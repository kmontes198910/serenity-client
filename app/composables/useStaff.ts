import type { StaffMember } from '~/types'

export function useStaff() {
  const { t } = useI18n()

  const staffData = [
    { id: 'elsa-villalobos', name: 'Elsa Villalobos', credentials: 'LCSW', role: 'leadership', initials: 'EV', gradientFrom: '#0d9488', gradientTo: '#0ea5e9', specialtyCount: 5 },
    { id: 'arnaldo-morejon', name: 'Arnaldo Morejon-Suarez', credentials: 'FNP, QMHP', role: 'clinical', initials: 'AM', gradientFrom: '#0f766e', gradientTo: '#0284c7', specialtyCount: 5 },
    { id: 'stephanie-more-texier', name: 'Stephanie More-Texier', credentials: 'QMHA', role: 'support', initials: 'SM', gradientFrom: '#14b8a6', gradientTo: '#38bdf8', specialtyCount: 5 },
    { id: 'juan-freije', name: 'Juan Freije', credentials: 'RN, QMHA', role: 'clinical', initials: 'JF', gradientFrom: '#0d9488', gradientTo: '#7dd3fc', specialtyCount: 5 },
    { id: 'damian-perez', name: 'Damian Perez', credentials: 'QBA', role: 'support', initials: 'DP', gradientFrom: '#115e59', gradientTo: '#0ea5e9', specialtyCount: 5 },
    { id: 'marlon-baro', name: 'Marlon Baro', credentials: 'QBA', role: 'support', initials: 'MB', gradientFrom: '#134e4a', gradientTo: '#0284c7', specialtyCount: 5 },
  ] as const

  const members = computed<StaffMember[]>(() =>
    staffData.map(s => ({
      id: s.id,
      name: s.name,
      title: t(`staff.${s.id}.title`),
      credentials: s.credentials,
      role: s.role,
      bio: t(`staff.${s.id}.bio`),
      specialties: Array.from({ length: s.specialtyCount }, (_, i) => t(`staff.${s.id}.specialties.${i}`)),
      initials: s.initials,
      gradientFrom: s.gradientFrom,
      gradientTo: s.gradientTo,
    })),
  )

  const leadership = computed(() => members.value.filter(m => m.role === 'leadership'))
  const clinicalStaff = computed(() => members.value.filter(m => m.role === 'clinical'))
  const supportStaff = computed(() => members.value.filter(m => m.role === 'support'))

  return { members, leadership, clinicalStaff, supportStaff }
}
