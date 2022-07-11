import { handleApiCall } from 'utils'

const User = () => (
  <section>
    <h2><b>TokenWebView.apis.user:</b>Switch the user wallet and return wallet address.</h2>
    <details>
      <summary>
        TokenWebView.apis.user.showAccountSwitch(chainType?: &quot;ETHEREUM&quot; | &quot;BITCOIN&quot; | &quot;LITECOIN&quot; | &quot;EOS&quot; | &quot;COSMOS&quot; |
        &quot;TRON&quot; | &quot;BITCOINCASH&quot; | &quot;NERVOS&quot; | &quot;KUSAMA&quot; | &quot;POLKADOT&quot; | &quot;FILECOIN&quot; | null): Promise&lt;string&gt;
      </summary>
      <form onSubmit={handleApiCall} data-mod="user" data-method="showAccountSwitch">
        <fieldset>
          <label>Chan Type</label>
          <select name="chainType">
            {[
              'ETHEREUM',
              'BITCOIN',
              'LITECOIN',
              'EOS',
              'COSMOS',
              'TRON',
              'BITCOINCASH',
              'NERVOS',
              'KUSAMA',
              'POLKADOT',
              'FILECOIN',
              null,
            ].map((type) => (
              <option key={type} value={type ?? undefined}>{`${type}`}</option>
            ))}
          </select>
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

User.displayName = 'User'

export default User
