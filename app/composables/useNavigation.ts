import type { NavigationItem } from '~/types'

export function useNavigation() {
  const { t } = useI18n()

  const items = computed<NavigationItem[]>(() => [
    { label: t('nav.home'), to: '/#hero' },
    { label: t('nav.services'), to: '/#services' },
    { label: t('nav.team'), to: '/#team' },
    { label: t('nav.about'), to: '/#about' },
    { label: t('nav.contact'), to: '/#contact' },
    { label: t('nav.testimonials'), to: '/#testimonials' },
    { label: t('nav.faq'), to: '/#faq' },
  ])

  return { items }
}
