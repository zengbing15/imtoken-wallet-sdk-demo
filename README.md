```typescript
isTokenEnv: () => boolean;
isCancelError: (error: string | StandardError) => boolean;
compareSemver: (ver_a?: string, ver_b?: string) => number;
isGreaterThanOrEqualVersion: (version: string) => boolean;
getVersion: () => string;
apis: {
    navigator: {
        closeDapp: () => void;
        goBack: () => void;
        toggleNavbar: () => void;
        routeTo: ({ screen, props }: {
            screen: string;
            props: import("./apis/navigator").ScreenProps;
        }) => void;
        getOrientation: () => Orientation;
        setOrientation: (orientation: Orientation) => void;
        setTitle: (title: string) => void;
    };
    native: {
        alert: (content: string) => void;
        confirm: (params: ConfirmParams) => Promise<boolean>;
        setLoading: (visible: boolean) => void;
        share: (params: ShareParams) => Promise<OpenReturn>;
        scanQRCode: () => Promise<string>;
        setClipboard: (text: string) => void;
    };
    user: {
        showAccountSwitch: (chainType?: "ETHEREUM" | "BITCOIN" | "LITECOIN" | "EOS" | "COSMOS" | "TRON" | "BITCOINCASH" | "NERVOS" | "KUSAMA" | "POLKADOT" | "FILECOIN" | null) => Promise<string>;
    };
    device: {
        getCurrentLanguage: () => Promise<"zh-CN" | "en-US" | "zh-Hant-US" | "zh-Hant-HK" | "zh-Hant-TW">; // type declaration of sdk is not clear enough, getCurrentLanguage: () => Promise<string>
        getCurrentCurrency: () => Promise<"CNY" | "USD" | "TWD" | "HKD">; // type declaration of sdk is not clear enough, getCurrentCurrency: () => Promise<string>
    };
    internal: {
        getHeaders: () => Promise<string>; // get headers is a private method that cannot be called from webview
        setLogo: (logo: string) => void;
        log: (...data: any[]) => void;
        emitEvent: <T extends Record<string | number | symbol, any>>(eventName: string, params?: T | undefined) => Promise<T>;
        dangerouslyAPI: <T_1>(...args: unknown[]) => T_1;
        dangerouslyPromisifyAPI: <T_2>(...args: unknown[]) => Promise<T_2>;
    };
    layout: {
        setOptions: (options: WebViewLayoutOptions) => void;
    };

```
