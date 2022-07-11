import TokenWebView from '@consenlabs-fe/webview'

const General = () => {
  const handleGeneralCall = async (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
    const {
      dataset: { method },
    } = e.currentTarget
    const inputs = e.currentTarget.querySelectorAll('input')
    const params: Array<any> = Array.from(inputs)
      .slice(0, -1)
      .map((i) => i.value)
    const resInput = inputs[inputs.length - 1]

    if (!method) return

    if (params.length) {
      window.alert(`Calling method TokenWebView.${method}(${params.join()})`)
    } else {
      window.alert(`Calling method TokenWebView.${method}()`)
    }

    try {
      const generalMethod: any = TokenWebView[method as keyof typeof TokenWebView]
      if (typeof generalMethod !== 'function') {
        return
      }
      const res: any = await generalMethod(...params)
      if (resInput) {
        resInput.value = `${res}`
      }
    } catch (err) {
      alert(err)
    }
  }

  return (
    <section>
      <h2><b>General:</b>Check the environment and the processing of generic scenarios.</h2>
      <details>
        <summary>TokenWebView.isTokenEnv(): boolean</summary>
        <form onSubmit={handleGeneralCall} data-method="isTokenEnv">
          <fieldset>
            <label>Response</label>
            <input name="res" readOnly placeholder="response" />
          </fieldset>

          <button>Call API</button>
        </form>
      </details>

      <details>
        <summary>TokenWebView.getVersion(): string</summary>
        <form onSubmit={handleGeneralCall} data-method="getVersion">
          <fieldset>
            <label>Response</label>
            <input name="res" readOnly placeholder="response" />
          </fieldset>

          <button>Call API</button>
        </form>
      </details>

      <details>
        <summary>TokenWebView.isGreaterThanOrEqualVersion(version: string): boolean</summary>
        <form onSubmit={handleGeneralCall} data-method="isGreaterThanOrEqualVersion">
          <fieldset>
            <label>Version</label>
            <input name="version" placeholder="Version of imToken to compare" defaultValue="2.1.0" />
          </fieldset>

          <fieldset>
            <label>Response</label>
            <input name="res" readOnly placeholder="response" />
          </fieldset>

          <button>Call API</button>
        </form>
      </details>

      <details>
        <summary>TokenWebView.compareSemver(v_1?: string, v_2?: string): number</summary>
        <form onSubmit={handleGeneralCall} data-method="compareSemver">
          <fieldset>
            <label>Version A</label>
            <input name="ver_a" placeholder="Version of imToken to compare" defaultValue="2.1.0" />
          </fieldset>

          <fieldset>
            <label>Version B</label>
            <input name="ver_b" placeholder="Version of imToken to compare" defaultValue="2.2.0" />
          </fieldset>

          <fieldset>
            <label>Response</label>
            <input name="res" readOnly placeholder="response" />
          </fieldset>

          <button>Call API</button>
        </form>
      </details>
    </section>
  )
}

General.displayName = 'General'

export default General
