import Head from 'next/head'

import * as S from './styles'
import { I_MainLayoutProps } from './models'

import { Navbar } from 'features'

export const MainLayout = ({ children, title }: I_MainLayoutProps) => {
  return (
    <S.Inner>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <S.Content>{children}</S.Content>
    </S.Inner>
  )
}
