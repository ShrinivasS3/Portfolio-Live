// /components/ui/hoverable-split-text.tsx

"use client"

import { useSprings, animated } from '@react-spring/web'

interface HoverableSplitTextProps {
    text?: string
    className?: string
    startAnimation?: boolean // 1. Replaced 'inView' logic with this prop
    delay?: number
    textAlign?: 'left' | 'right' | 'center' | 'justify'
}

export const SplitText = ({
                                       text = '',
                                       className = '',
                                       startAnimation = false, // Default to false
                                       delay = 50,
                                       textAlign = 'justify',
                                   }: HoverableSplitTextProps) => {
    const words = text.split(' ').map((word) => word.split(''))
    const letters = words.flat()

    // 2. Removed IntersectionObserver and related state/refs

    // const springs = useSprings(
    //     letters.length,
    //     letters.map((_, i) => ({
    //         from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    //         // 3. Animation now depends on the 'startAnimation' prop
    //         to: startAnimation
    //             ? { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    //             : { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    //         delay: i * delay,
    //         config: { tension: 280, friction: 60 },
    //     }))
    // )
    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            // 1. Change the 'from' based on the trigger
            from: startAnimation
                ? { opacity: 0, transform: 'translate3d(0, 20px, 0)' } // If animating, start from hidden
                : { opacity: 1, transform: 'translate3d(0, 0, 0)' }, // Otherwise, start from visible

            // 2. Always animate 'to' the visible state
            to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },

            // 3. Only apply a delay when animating
            delay: startAnimation ? i * delay : 0,

            // 4. Reset the animation to run from the new 'from' state on hover
            reset: startAnimation,

            config: { tension: 280, friction: 60 },
        }))
    )

    const textStyle: React.CSSProperties = {
        textAlign,
        whiteSpace: 'normal',
        wordWrap: 'break-word',
    }

    return (
        <p className={`split-parent overflow-hidden inline ${className}`} style={textStyle}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.map((letter, letterIndex) => {
              const index =
                  words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + letterIndex

              return (
                  <animated.span
                      key={index}
                      style={springs[index]}
                      className="inline-block"
                  >
                      {/* Use a non-breaking space for space characters to maintain width */}
                      {letter === ' ' ? '\u00A0' : letter}
                  </animated.span>
              )
          })}
                    {/* Add a space between words */}
                    {wordIndex < words.length - 1 && (
                        <span style={{ display: 'inline-block', width: '0.3em' }} />
                    )}
        </span>
            ))}
        </p>
    )
}