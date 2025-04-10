import { getLocales } from 'expo-localization'
import i18n from 'i18n-js'
import en from 'locales/en'
import zh from 'locales/zh'

i18n.locale = getLocales()[0].languageTag
i18n.fallbacks = true

i18n.translations = {
  en,
  zh,
}

export default i18n
