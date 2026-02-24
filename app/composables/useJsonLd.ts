import type { WithContext, Thing, LocalBusiness, MedicalBusiness } from 'schema-dts'

export function useJsonLd(schema: WithContext<Thing> | WithContext<Thing>[]) {
  const schemas = Array.isArray(schema) ? schema : [schema]

  useHead({
    script: schemas.map((s, i) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(s),
      key: `json-ld-${i}`,
    })),
  })
}

export function createLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Serenity Behavioral Services',
    description: 'Outpatient behavioral health clinic providing therapy, evaluations, and mental health services in Las Vegas, Nevada.',
    url: 'https://serenitybhs.com',
    telephone: ['+1-702-665-5035', '+1-702-552-6881'],
    email: 'serenitybslv@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4680 S Eastern Ave. Suite B',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89119',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    priceRange: 'Medicare, Medicaid and select commercial insurance plans',
  }
}

export function createMedicalBusinessSchema(): WithContext<MedicalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Serenity Behavioral Services',
    medicalSpecialty: 'Psychiatric',
    availableService: [
      { '@type': 'MedicalTherapy', name: 'Psychotherapy' },
      { '@type': 'MedicalTherapy', name: 'Psychological Evaluations' },
      { '@type': 'MedicalTherapy', name: 'Intensive Outpatient Program (IOP)' },
      { '@type': 'MedicalTherapy', name: 'Psychosocial Rehabilitation (PSR)' },
      { '@type': 'MedicalTherapy', name: 'Trauma Treatment' },
      { '@type': 'MedicalTherapy', name: 'Group Therapy' },
      { '@type': 'MedicalTherapy', name: 'Telehealth Services' },
    ],
    url: 'https://serenitybhs.com',
    telephone: '+1-702-665-5035',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4680 S Eastern Ave. Suite B',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89119',
      addressCountry: 'US',
    },
  }
}
