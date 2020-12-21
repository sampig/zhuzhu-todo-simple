import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import en from 'locales/en'
import zh from 'locales/zh'

i18n.locale = Localization.locale
i18n.fallbacks = true

i18n.translations = {
  en,
  zh,
}

export default i18n
