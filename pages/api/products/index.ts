import { allProducts } from 'libs'
import { ShopifyData } from 'utils'

export default async function getProducts(req: any, res: any) {
  const response = await ShopifyData(allProducts)

  res.status(200)
  res.json(response)
}
