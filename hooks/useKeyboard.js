import { useEffect } from 'react'

export default function useKeyboard (keyCode, handle) {
  const handleKeyPress = (ev) => {
    if (ev.keyCode === parseInt(keyCode)) {
      handle(ev)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  })
}
