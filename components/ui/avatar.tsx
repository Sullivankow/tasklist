"use client"

import { Avatar as ChakraAvatar, AvatarBadge } from "@chakra-ui/react"
import { FaUser } from "react-icons/fa"
import * as React from "react"

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export interface AvatarProps {
  name?: string
  src?: string
  srcSet?: string
  loading?: ImageProps["loading"]
  icon?: React.ReactElement
  fallback?: React.ReactNode
  children?: React.ReactNode
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, ...rest } = props
    return (
      <ChakraAvatar ref={ref} {...rest} name={name} src={src} srcSet={srcSet} loading={loading}>
        {fallback || (
          <AvatarFallback name={name} icon={icon}>
            {children}
          </AvatarFallback>
        )}
        {children}
      </ChakraAvatar>
    )
  },
)

interface AvatarFallbackProps {
  name?: string
  icon?: React.ReactElement
  children?: React.ReactNode
}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  function AvatarFallback(props, ref) {
    const { name, icon, children, ...rest } = props
    return (
      <ChakraAvatar ref={ref} {...rest}>
        {children}
        {name && !children && <>{getInitials(name)}</>}
        {!name && !children && icon && icon} {/* Directement l'icône ici */}
      </ChakraAvatar>
    )
  },
)

function getInitials(name: string) {
  const names = name.trim().split(" ")
  const firstName = names[0] != null ? names[0] : ""
  const lastName = names.length > 1 ? names[names.length - 1] : ""
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}






