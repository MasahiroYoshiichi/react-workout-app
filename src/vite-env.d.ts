/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_AUTH_REGION: string;
  readonly VITE_REACT_APP_AUTH_USER_POOL_ID: string;
  readonly VITE_REACT_APP_AUTH_USER_POOL_WEB_CLIENT_ID: string;
  readonly VITE_REACT_APP_AUTH_COOKIE_STORAGE_DOMAIN: string;
  // 定義した変数をを追加していく
}

// 型宣言ファイルについて
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
