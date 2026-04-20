import { useState, useEffect, useRef } from 'react'

export function useTyped(phrases, { typeSpeed = 100, deleteSpeed = 60, pauseMs = 2000, pauseAfterDelete = 400 } = {}) {
  const [text, setText] = useState('')
  const stateRef = useRef({ phraseIdx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    let timeout
    function tick() {
      const { phraseIdx, charIdx, deleting } = stateRef.current
      const current = phrases[phraseIdx]

      if (deleting) {
        setText(current.substring(0, charIdx - 1))
        stateRef.current.charIdx = charIdx - 1
      } else {
        setText(current.substring(0, charIdx + 1))
        stateRef.current.charIdx = charIdx + 1
      }

      let delay = deleting ? deleteSpeed : typeSpeed

      if (!deleting && stateRef.current.charIdx === current.length) {
        delay = pauseMs
        stateRef.current.deleting = true
      } else if (deleting && stateRef.current.charIdx === 0) {
        stateRef.current.deleting = false
        stateRef.current.phraseIdx = (phraseIdx + 1) % phrases.length
        delay = pauseAfterDelete
      }

      timeout = setTimeout(tick, delay)
    }

    timeout = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timeout)
  }, []) // eslint-disable-line

  return text
}
