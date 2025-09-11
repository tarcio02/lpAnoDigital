import type React from "react"

export const scrollRef = (
  e: React.MouseEvent<HTMLElement>,
  ref: HTMLElement | null
) => {
  e.preventDefault()

  if (ref) {
    const offsetTop = ref.getBoundingClientRect().top + window.scrollY
    const offset = offsetTop - 70 
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    })
  }
}