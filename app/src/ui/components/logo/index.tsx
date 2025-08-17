import { ImgHTMLAttributes } from "react"

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
    size: string
}

export const Logo = ({ size, ...rest }: LogoProps) => {
    return <img {...rest} style={{ "width": size, "height": size }} src="/logos/logo-armardur-bg-white.png" alt="Logo" />
}