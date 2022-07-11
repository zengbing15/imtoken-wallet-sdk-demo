import { handleApiCall } from 'utils'

const Internal = () => (
  <section>
    <h2><b>TokenWebView.apis.internal:</b>Customize development and debugging process.(Experimental).</h2>
    <details>
      <summary>TokenWebView.apis.internal.getHeaders(): Promise&lt;string&gt;<br /> NOTICE: private method cannot be called from webview</summary>
      <form onSubmit={handleApiCall} data-mod="internal" data-method="getHeaders">
        <fieldset>
          <label>Response</label>
          <input name="res" readOnly placeholder="response" />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.internal.setLogo(logo: string): void</summary>
      <form onSubmit={handleApiCall} data-mod="internal" data-method="setLogo">
        <fieldset>
          <label>Logo</label>
          <input name="logo" placeholder="logo url" defaultValue="https://token.im/img/imTokenLogo.svg" />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.internal.log(...data: any[]): void</summary>
      <form onSubmit={handleApiCall} data-mod="internal" data-method="log">
        <fieldset>
          <label>Message</label>
          <input name="message" placeholder="content to log" defaultValue="content to log" />
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

Internal.displayName = 'Internal'

export default Internal
