export type ThemeName = 'default' | 'teal'

const THEME_KEY = 'serenity-theme'

export function useTheme() {
  const currentTheme = useState<ThemeName>('theme', () => 'default')

  if (import.meta.client) {
    const saved = localStorage.getItem(THEME_KEY) as ThemeName | null
    if (saved && saved !== currentTheme.value) {
      currentTheme.value = saved
    }
  }

  function setTheme(theme: ThemeName) {
    currentTheme.value = theme

    if (import.meta.client) {
      if (theme === 'default') {
        document.documentElement.removeAttribute('data-theme')
      } else {
        document.documentElement.setAttribute('data-theme', theme)
      }
      localStorage.setItem(THEME_KEY, theme)
    }
  }

  function toggleTheme() {
    setTheme(currentTheme.value === 'default' ? 'teal' : 'default')
  }

  return {
    currentTheme: readonly(currentTheme),
    setTheme,
    toggleTheme,
  }
}
