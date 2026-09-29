import { useRef, type ReactNode, type ElementType } from "react"

interface ScrollContainerProps {
     children: ReactNode
     className?: string
     as?: ElementType
     dragSpeed?: number
}

export function ScrollContainer({
     children,
     className = "",
     as: Component = "div",
     dragSpeed = 1.5,
}: ScrollContainerProps) {

     const scrollRef = useRef<HTMLElement>(null)
     const isDown = useRef(false)
     const startX = useRef(0)
     const scrollLeft = useRef(0)

     const handlePointerDown = (e: React.PointerEvent) => {
          if (e.pointerType !== "mouse" || !scrollRef.current) return

          isDown.current = true
          startX.current = e.pageX - scrollRef.current.offsetLeft
          scrollLeft.current = scrollRef.current.scrollLeft
     }

     const handlePointerLeave = () => {
          isDown.current = false
     }

     const handlePointerUp = () => {
          isDown.current = false
     }

     const handlePointerMove = (e: React.PointerEvent) => {
          if (e.pointerType !== "mouse" || !isDown.current || !scrollRef.current) return

          e.preventDefault()
          const x = e.pageX - scrollRef.current.offsetLeft
          const walk = (x - startX.current) * dragSpeed
          scrollRef.current.scrollLeft = scrollLeft.current - walk
     }

     return (
          <Component
               ref={scrollRef}
               onPointerDown={handlePointerDown}
               onPointerLeave={handlePointerLeave}
               onPointerUp={handlePointerUp}
               onPointerMove={handlePointerMove}
               className={`no-scrollbar relative touch-pan-x select-none overflow-x-auto ${className}`}
               style={{ cursor: "grab" }}
          >
               {children}
          </Component>
     )
}