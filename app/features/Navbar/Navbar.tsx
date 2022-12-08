import Link from 'next/link'

import * as S from './styles'
import { navbarLinks } from './data'

export const Navbar = () => {
  return (
    <S.NavbarInner>
      {navbarLinks.map((link) => {
        return (
          <Link key={link.label} href={link.path}>
            {link.label}
          </Link>
        )
      })}
    </S.NavbarInner>
  )
}
