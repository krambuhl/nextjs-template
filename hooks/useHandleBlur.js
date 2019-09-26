import { useEffect } from 'react'

export default function useHandleBlur (ref, handle) {
  const handleFocusChange = () => {
    if (
      ref.current &&
      !ref.current.contains(document.activeElement)
    ) {
      handle()
    }
  }

  useEffect(() => {
    window.addEventListener('focus', handleFocusChange, true)

    return () => {
      window.removeEventListener('focus', handleFocusChange, true)
    }
  })
}
