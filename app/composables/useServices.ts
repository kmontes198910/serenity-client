import type { Service } from '~/types'

export function useServices() {
  const { t } = useI18n()

  const serviceIds = ['evaluations', 'psychiatric', 'courtReferred', 'therapy', 'iop', 'psr', 'trauma', 'substance', 'telehealth'] as const

  const iconMap: Record<string, string> = {
    evaluations: 'clipboard-check',
    psychiatric: 'stethoscope',
    courtReferred: 'scale',
    therapy: 'brain',
    iop: 'calendar-range',
    psr: 'users',
    trauma: 'shield-check',
    substance: 'heart-handshake',
    telehealth: 'monitor-smartphone',
  }

  const slugMap: Record<string, string> = {
    evaluations: 'evaluations',
    psychiatric: 'psychiatric-evaluations',
    courtReferred: 'court-referred',
    therapy: 'therapy',
    iop: 'intensive-outpatient',
    psr: 'psychosocial-rehabilitation',
    trauma: 'trauma-treatment',
    substance: 'substance-recovery',
    telehealth: 'telehealth',
  }

  const featureCountMap: Record<string, number> = {
    evaluations: 4,
    psychiatric: 4,
    courtReferred: 4,
    therapy: 13,
    iop: 4,
    psr: 9,
    trauma: 4,
    substance: 4,
    telehealth: 4,
  }

  const services = computed<Service[]>(() =>
    serviceIds.map(id => ({
      id,
      title: t(`services.items.${id}.title`),
      description: t(`services.items.${id}.description`),
      icon: iconMap[id],
      features: Array.from({ length: featureCountMap[id] }, (_, i) => t(`services.items.${id}.features.${i}`)),
      slug: slugMap[id],
    })),
  )

  const featuredServices = computed(() => services.value.slice(0, 6))

  return { services, featuredServices }
}
