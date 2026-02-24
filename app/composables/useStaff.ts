import type { StaffMember } from '~/types'

import imgElsa from '~/assets/images/our_team/elsa-villalobos.webp'
import imgLuz from '~/assets/images/our_team/luz-morales.webp'
import imgStephanie from '~/assets/images/our_team/stephanie-more-texier.webp'
import imgJuan from '~/assets/images/our_team/juan-freije.webp'
import imgDamian from '~/assets/images/our_team/damian-perez.webp'
import imgMarlon from '~/assets/images/our_team/marlon-baro.webp'

interface StaffData {
  id: string
  name: string
  credentials: string
  role: string
  initials: string
  gradientFrom: string
  gradientTo: string
  specialtyCount: number
  image?: string
}

export function useStaff() {
  const { t } = useI18n()

  const staffData: StaffData[] = [
    { id: 'elsa-villalobos', name: 'Elsa Villalobos', credentials: 'LCSW', role: 'leadership', initials: 'EV', gradientFrom: '#0d9488', gradientTo: '#0ea5e9', specialtyCount: 5, image: imgElsa },
    { id: 'luz-morales', name: 'Luz Morales', credentials: 'PMHNP', role: 'clinical', initials: 'LM', gradientFrom: '#0f766e', gradientTo: '#0284c7', specialtyCount: 5, image: imgLuz },
    { id: 'stephanie-more-texier', name: 'Stephanie More-Texier', credentials: 'QMHA', role: 'support', initials: 'SM', gradientFrom: '#14b8a6', gradientTo: '#38bdf8', specialtyCount: 5, image: imgStephanie },
    { id: 'juan-freije', name: 'Juan Freije', credentials: 'RN, QMHA', role: 'clinical', initials: 'JF', gradientFrom: '#0d9488', gradientTo: '#7dd3fc', specialtyCount: 5, image: imgJuan },
    { id: 'damian-perez', name: 'Damian Perez', credentials: 'QBA', role: 'support', initials: 'DP', gradientFrom: '#115e59', gradientTo: '#0ea5e9', specialtyCount: 5, image: imgDamian },
    { id: 'marlon-baro', name: 'Marlon Baro', credentials: 'QBA', role: 'support', initials: 'MB', gradientFrom: '#134e4a', gradientTo: '#0284c7', specialtyCount: 5, image: imgMarlon },
  ]

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
      image: s.image,
    })),
  )

  const leadership = computed(() => members.value.filter(m => m.role === 'leadership'))
  const clinicalStaff = computed(() => members.value.filter(m => m.role === 'clinical'))
  const supportStaff = computed(() => members.value.filter(m => m.role === 'support'))

  return { members, leadership, clinicalStaff, supportStaff }
}
