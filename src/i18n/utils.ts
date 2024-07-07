import {en} from './en'
import {zhCn} from './zhCn'
import {cs} from './cs'
import {config} from "../consts";

const ui = {
  'zh-cn':zhCn,
  en,
  
  cs
}


export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = useTranslations(config.lang)

