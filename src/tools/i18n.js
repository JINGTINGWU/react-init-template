import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(backend)
    .use(LanguageDetector) // 偵測瀏覽器語系
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: 'en-US', // 未偵測到時的後備語系
        ns: ['common'], // 語系的 loading namespace 如語系檔案名稱 common.js
        defaultNS: 'common', // 預設的 namespace name
        interpolation: {
            escapeValue: false // not needed for react!!
        },
        backend: {
            // 設定語系檔案的 server 路徑, 會以GET的方式跟 server 要檔案
            // lng = 語系代碼 ns = namespace
            "loadPath": "locales/{{lng}}/{{ns}}.json"
        }
    });

export default i18n;