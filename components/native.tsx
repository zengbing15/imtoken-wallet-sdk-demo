import { handleApiCall } from 'utils'

const Native = () => (
  <section>
    <h2><b>TokenWebView.apis.native:</b>Provide native platform UI and interaction capabilities.</h2>

    <details>
      <summary>TokenWebView.apis.native.alert(content: string): void</summary>
      <form onSubmit={handleApiCall} data-mod="native" data-method="alert">
        <fieldset>
          <label>Content</label>
          <input name="content" placeholder="Set alert message" defaultValue="alert message" />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.native.confirm(params: ConfirmParams): Promise&lt;boolean&gt;</summary>
      <form onSubmit={handleApiCall} data-mod="native" data-method="confirm">
        <fieldset>
          <label>Title</label>
          <input name="title" placeholder="Set confirm title" defaultValue="confirm title" />
        </fieldset>

        <fieldset>
          <label>Message</label>
          <input name="message" placeholder="Set confirm message" defaultValue="confirm message" />
        </fieldset>

        <fieldset>
          <label>Cancen Text</label>
          <input name="cancelText" placeholder="Set text of cancel button" defaultValue="cancel" />
        </fieldset>

        <fieldset>
          <label>Confirm Text</label>
          <input name="confirmText" placeholder="Set text of confirm button" defaultValue="confirm" />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.native.setLoading(visible: boolean): void</summary>
      <form onSubmit={handleApiCall} data-mod="native" data-method="setLoading">
        <fieldset>
          <label>Visible</label>
          <select name="visible">
            {['true', 'false'].map((visible) => (
              <option key={visible} value={visible}>
                {visible}
              </option>
            ))}
          </select>
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.native.share(params: ShareParams): Promise&lt;OpenReturn&gt;</summary>
      <form onSubmit={handleApiCall} data-mod="native" data-method="share">
        <fieldset>
          <label>Title</label>
          <input name="title" placeholder="Set share title" defaultValue="share title" />
        </fieldset>

        <fieldset>
          <label>Message</label>
          <input name="message" placeholder="Set share message" defaultValue="share message" />
        </fieldset>

        <fieldset>
          <label>Share URL</label>
          <input
            name="url"
            placeholder="Set share url"
            defaultValue="https://imtoken.gitbook.io/developers/products/webview/sdk#share"
          />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.native.scanQRCode(): Promise&lt;string&gt;</summary>
      <form onSubmit={handleApiCall} data-mod="native" data-method="scanQRCode">
        <fieldset>
          <label>Response</label>
          <input name="res" readOnly placeholder="response" />
        </fieldset>
        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.native.setClipboard(text: string): void</summary>
      <form onSubmit={handleApiCall} data-mod="native" data-method="setClipboard">
        <fieldset>
          <label>Text</label>
          <input name="text" placeholder="Text to copy" defaultValue="Text will be written into clipboard" />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>
  </section>
)

Native.displayName = 'Native'

export default Native
