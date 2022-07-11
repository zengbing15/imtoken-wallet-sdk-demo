import { handleApiCall } from 'utils'

const Layout = () => (
  <section>
    <h2><b>TokenWebView.apis.layout:</b>Set the frame layout style.</h2>
    <details>
      <summary>TokenWebView.apis.layout.setOptions(options: WebViewLayoutOptions): void</summary>
      <form onSubmit={handleApiCall} data-mod="layout" data-method="setOptions">
        <fieldset>
          <label>Background</label>
          <input name="background" type="color" />
        </fieldset>

        <fieldset>
          <label>Foreground</label>
          <input name="foreground" type="color" />
        </fieldset>

        <fieldset>
          <label>Is Title Left</label>
          <select name="isTitleLeft">
            {['true', 'false'].map((visible) => (
              <option key={visible} value={visible}>
                {visible}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <label>Title Size</label>
          <input name="titleSize" type="number" defaultValue="14" />
        </fieldset>

        <fieldset>
          <label>Is Transparent</label>
          <select name="isTransparent">
            {['true', 'false'].map((visible) => (
              <option key={visible} value={visible}>
                {visible}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <label>Transparent ScrollY</label>
          <input name="transparentScrollY" type="number" defaultValue="0" />
        </fieldset>

        <fieldset>
          <label>Loading Background</label>
          <input name="loadingBackground" type="color" />
        </fieldset>

        <fieldset>
          <label>Loading Foreground</label>
          <input name="loadingForeground" type="color" />
        </fieldset>

        <fieldset>
          <label>Body Background</label>
          <input name="bodyBackground" type="color" />
        </fieldset>

        <fieldset>
          <label>Body Foreground</label>
          <input name="bodyForeground" type="color" />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>
  </section>
)

Layout.displayName = 'Layout'

export default Layout
