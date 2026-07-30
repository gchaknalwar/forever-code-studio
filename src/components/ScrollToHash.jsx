import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Handles smooth-scrolling to a section (#work, #story, etc.) whenever the
// URL hash changes — whether that's a same-page click or navigating in
// from another route (e.g. /about -> /#work).
export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const timeout = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      // No hash — this is a normal route change (e.g. clicking the logo
      // to go home), so reset scroll to the top of the new page.
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return null
}
