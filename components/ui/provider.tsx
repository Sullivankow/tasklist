
"use client"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

// Créez ou étendez votre propre thème si nécessaire
const theme = extendTheme({
  // Personnalisation du thème si besoin
})

// Composant ClientOnly pour rendre des éléments uniquement côté client
import { useEffect, useState, ReactNode } from "react"

// Typage de props pour ClientOnly
interface ClientOnlyProps {
  children: ReactNode
}

const ClientOnly = ({ children }: ClientOnlyProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <>{children}</>
}

interface ProviderProps extends ColorModeProviderProps {
  children: ReactNode
}

export function Provider({ children, ...props }: ProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* Passer les enfants au ColorModeProvider */}
      <ColorModeProvider {...props}>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}