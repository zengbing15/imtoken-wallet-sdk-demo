import TokenWebView from '@consenlabs-fe/webview'

export const handleApiCall = async (e: React.FormEvent<HTMLFormElement>) => {
  e.stopPropagation()
  e.preventDefault()

  const form = e.currentTarget
  const {
    dataset: { mod, method },
  } = form

  if (!mod || !method) {
    return
  }

  let params: Record<string, string> | string | undefined = {}

    ;[...form.querySelectorAll('input'), ...form.querySelectorAll('select')].forEach((i) => {
      if (i.name !== 'res' && typeof params === 'object') {
        params[i.name] = i.value
      }
    })
  const fields = Object.keys(params)

  if (fields.length === 1) {
    params = params[fields[0]]
  } else if (!fields.length) {
    params = undefined
  }

  if (params !== undefined) {
    window.alert(`Calling method TokenWebView.api.${mod}.${method}(${JSON.stringify(params)})`)
  } else {
    window.alert(`Calling method TokenWebView.api.${mod}.${method}()`)
  }
  if (method === 'routeTo' && typeof params === 'object' && 'title' in params && 'url' in params) {
    Object.defineProperty(params, 'props', {
      value: {
        title: params && params.title,
        url: params && params.url,
      }
    })
    delete params.title
    delete params.url
  }

  try {
    const apiModule: any = TokenWebView.apis[mod as keyof typeof TokenWebView.apis]
    const res: string = await apiModule[method](params)

    if (!res) return

    const resInput = form.querySelector<HTMLInputElement>('input[name=res]')
    if (resInput) {
      resInput.value = res
    } else {
      alert(JSON.stringify(res))
    }
  } catch (error: any) {
    if (TokenWebView.isCancelError(error)) {
      alert(`User cancelled the operation`)
    } else {
      alert('message' in error ? error.message : JSON.stringify(error))
    }
  } finally {
    if (method === 'setLoading') {
      // Cancel loading after 3 seconds to restore interoperability
      setTimeout(() => {
        TokenWebView.apis.native.setLoading(false)
      }, 3000)
    }
  }
}
