import { handleApiCall } from 'utils'

const Device = () => {
  return (
    <section>
      <h2><b>TokenWebView.apis.device:</b>Gets the user&apos;s current language setting and currency setting.</h2>

      <details>
        <summary>TokenWebView.apis.device.getCurrentCurrency(): Promise&lt;&quot;CNY&quot; | &quot;USD&quot; | &quot;TWD&quot; | &quot;HKD&quot;&gt;</summary>
        <form onSubmit={handleApiCall} data-mod="device" data-method="getCurrentCurrency">
          <fieldset>
            <label>Response</label>
            <input name="res" readOnly placeholder="response" />
          </fieldset>
          <button>Call API</button>
        </form>
      </details>

      <details>
        <summary>
          TokenWebView.apis.device.getCurrentLanguage(): Promise&lt;&quot;zh-CN&quot; | &quot;en-US&quot; | &quot;zh-Hant-US&quot; | &quot;zh-Hant-HK&quot; |
          &quot;zh-Hant-TW&quot;&gt;
        </summary>
        <form onSubmit={handleApiCall} data-mod="device" data-method="getCurrentLanguage">
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

Device.displayName = 'Device'

export default Device
