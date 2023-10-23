import { createI18n } from 'vue-i18n'
import en from '../src/locales/en.json' 
import fa from '../src/locales/fa.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        fa
    },
    fallbackWarn: false,
    missingWarn: false
})

export default i18n