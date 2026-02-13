import type { Service } from '~/types'

export function useServices() {
  const { t } = useI18n()

  const serviceIds = ['evaluations', 'psychotherapy', 'iop', 'psr', 'trauma', 'substance', 'groups', 'telehealth'] as const

  const iconMap: Record<string, string> = {
    evaluations: 'clipboard-check',
    psychotherapy: 'brain',
    iop: 'calendar-range',
    psr: 'users',
    trauma: 'shield-check',
    substance: 'heart-handshake',
    groups: 'message-circle',
    telehealth: 'monitor-smartphone',
  }

  const slugMap: Record<string, string> = {
    evaluations: 'evaluations',
    psychotherapy: 'psychotherapy',
    iop: 'intensive-outpatient',
    psr: 'psychosocial-rehabilitation',
    trauma: 'trauma-treatment',
    substance: 'substance-recovery',
    groups: 'group-therapy',
    telehealth: 'telehealth',
  }

  const services = computed<Service[]>(() =>
    serviceIds.map(id => ({
      id,
      title: t(`services.items.${id}.title`),
      description: t(`services.items.${id}.description`),
      icon: iconMap[id],
      features: [0, 1, 2, 3].map(i => t(`services.items.${id}.features.${i}`)),
      slug: slugMap[id],
    })),
  )

  const featuredServices = computed(() => services.value.slice(0, 6))

  return { services, featuredServices }
}
