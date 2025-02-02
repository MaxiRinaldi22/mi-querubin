"use client"

import { useState, useEffect } from "react"

export function useLoading() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    handleStart()
    const timer = setTimeout(handleComplete, 1000) // 1 second delay for demonstration (Esto se debe modificar)

    return () => clearTimeout(timer)
  }, [])

  return loading
}

