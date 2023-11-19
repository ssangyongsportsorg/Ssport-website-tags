import { languages } from '@app/i18n'
import { getPages, getPageUrl } from '@app/source'
import { createI18nSearchAPI } from 'next-docs-zeta/server'
 
export const { GET } = createI18nSearchAPI('simple', {
  indexes: languages.map(lang => {
    const pages = getPages(lang)!.map(page => ({
      title: page.title,
      content: page.body.raw,
      url: getPageUrl(page.slug, lang)
    }))
 
    return [lang, pages]
  })
})
