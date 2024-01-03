import english from './en.json'
import spanish from './es.json'

const LANGUAGES = {
  english: 'en',
  SPANISH: 'es'
}

export const getI18N = ({
  currentLocale = 'es'
}: {
  currentLocale: string | undefined
}) => {
  if (currentLocale === LANGUAGES.english) return english
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  return spanish
}