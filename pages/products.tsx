import { NextPage } from 'next'

import { MainLayout } from 'layouts'
import { ProductsScreen } from 'screens'

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/products')

  if (!response) console.error(response)

  const products = await response.json()

  return { props: { products } }
}

const Products: NextPage = ({ products }: any) => {
  return (
    <MainLayout title='Products'>
      <ProductsScreen products={products} />
    </MainLayout>
  )
}

export default Products
