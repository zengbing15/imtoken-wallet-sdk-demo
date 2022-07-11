import { handleApiCall } from 'utils'

const Navigator = () => (
  <section>
    <h2><b>TokenWebView.apis.navigator:</b>Route navigation and settings page.</h2>

    <details>
      <summary>TokenWebView.apis.navigator.setTitle(title: string): void</summary>
      <form onSubmit={handleApiCall} data-mod="navigator" data-method="setTitle">
        <fieldset>
          <label>Title</label>
          <input name="title" placeholder="Set title of the webview" defaultValue="Title of the webview" />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.navigator.getOrientation(): Promise&lt;&quot;LANDSCAPE&quot; | &quot;PORTRAIT&quot;&gt;</summary>
      <form onSubmit={handleApiCall} data-mod="navigator" data-method="getOrientation">
        <fieldset>
          <label>Response</label>
          <input name="res" readOnly placeholder="response" />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.navigator.setOrientation(orientation: LANDSCAPE | PORTRAIT): void</summary>
      <form onSubmit={handleApiCall} data-mod="navigator" data-method="setOrientation">
        <fieldset>
          <label>Orientation</label>
          <select name="orientation">
            {['LANDSCAPE', 'PORTRAIT'].map((orientation) => (
              <option key={orientation} value={orientation}>
                {orientation}
              </option>
            ))}
          </select>
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.navigator.closeDapp(): void</summary>
      <form onSubmit={handleApiCall} data-mod="navigator" data-method="closeDapp">
        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.navigator.goBack(): void</summary>
      <form onSubmit={handleApiCall} data-mod="navigator" data-method="goBack">
        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.navigator.routeTo(params: RouteToParams): void</summary>
      <form onSubmit={handleApiCall} data-mod="navigator" data-method="routeTo">
        <fieldset>
          <label>Screen</label>
          <input name="screen" placeholder="screen" defaultValue="DappView" />
        </fieldset>

        <fieldset>
          <label>Title</label>
          <input name="title" placeholder="title" defaultValue="Title" />
        </fieldset>

        <fieldset>
          <label>URL</label>
          <input name="url" placeholder="URL" defaultValue="https://token.im/" />
        </fieldset>

        <button>Call API</button>
      </form>
    </details>

    <details>
      <summary>TokenWebView.apis.navigator.toggleNavbar(): void</summary>
      <form onSubmit={handleApiCall} data-mod="navigator" data-method="toggleNavbar">
        <button>Call API</button>
      </form>
    </details>
  </section>
)

Navigator.displayName = 'Navigator'

export default Navigator
