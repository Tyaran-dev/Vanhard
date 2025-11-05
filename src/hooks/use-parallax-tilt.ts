"use client"

import { useMotionValue, useTransform, animate } from "framer-motion"
import { useCallback } from "react"

export function useParallaxTilt(range = 10) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useTransform(my, [-0.5, 0.5], [range, -range])
  const rotateY = useTransform(mx, [-0.5, 0.5], [-range, range])

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(x)
    my.set(y)
  }, [mx, my])

  const onMouseLeave = useCallback(() => {
    animate(mx, 0, { duration: 0.3 })
    animate(my, 0, { duration: 0.3 })
  }, [mx, my])

  return { rotateX, rotateY, onMouseMove, onMouseLeave }
}
