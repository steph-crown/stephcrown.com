import { useEffect } from 'react'

/**
 * A custom React hook to manage and apply theme preferences.
 * @returns {Object} An object containing the `handleThemeToggle` function.
 */
const useThemeManager = () => {
  /**
   * Adds a specified class name to the root document element's class list.
   * @param {string} className - The class name to be added.
   */
  const addClassName = (className: string) => {
    document.documentElement.classList.add(className)
  }

  /**
   * Checks if the system's color scheme preference is dark.
   * @returns {boolean} `true` if the system prefers dark mode, `false` otherwise.
   */
  const doesSystemPrefersDark = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  /**
   * Retrieves the current theme preference from local storage.
   * @returns {string} The current theme preference ('dark' or 'light').
   */
  const getTheme = () => localStorage.theme

  /**
   * Handles the theme toggle, updating the theme preference in local storage
   * and applying the appropriate theme class.
   */
  const handleThemeToggle = () => {
    localStorage.setItem('theme', isDarkTheme() ? 'light' : 'dark')
    setTheme()
  }

  /**
   * Checks if the current theme is set to dark, either through local storage
   * or system preference, and returns a boolean indicating dark theme.
   * @returns {boolean} `true` if the theme is dark, `false` otherwise.
   */
  const isDarkTheme = () => getTheme() === 'dark' || (isThemeNotSet() && doesSystemPrefersDark())

  /**
   * Checks if the theme preference is not set in local storage.
   * @returns {boolean} `true` if the theme preference is not set, `false` otherwise.
   */
  const isThemeNotSet = () => !('theme' in localStorage)

  /**
   * Removes a specified class name from the root document element's class list.
   * @param {string} className - The class name to be removed.
   */
  const removeClassName = (className: string) => {
    document.documentElement.classList.remove(className)
  }

  /**
   * Sets the appropriate theme class based on the current theme preference.
   */
  const setTheme = () => {
    if (isDarkTheme()) {
      addClassName('dark')
    } else {
      removeClassName('dark')
    }
  }

  // Apply the initial theme preference on component mount.
  useEffect(() => {
    setTheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { handleThemeToggle, isDarkTheme }
}

export default useThemeManager
