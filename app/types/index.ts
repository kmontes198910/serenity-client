export interface NavigationItem {
  label: string
  to: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  slug: string
}

export interface StaffMember {
  id: string
  name: string
  title: string
  credentials: string
  role: string
  bio: string
  specialties: string[]
  initials: string
  gradientFrom: string
  gradientTo: string
  image?: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
}
