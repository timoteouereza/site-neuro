"use client"

import { useEffect, useMemo, useState } from "react"

export function useUtm() {
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    setSearch(window.location.search || "")
  }, [])

  return useMemo(() => new URLSearchParams(search), [search])
}
