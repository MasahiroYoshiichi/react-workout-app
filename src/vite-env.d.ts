/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ExprosiveWoekout: string;
  // 定義した変数をを追加していく
}

// 型宣言ファイルについて
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
