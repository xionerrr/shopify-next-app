import { default as fetch } from 'node-fetch'

export const ShopifyData = async (query: string) => {
  const URL = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT!
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query }),
  }

  try {
    const data = await fetch(URL, options).then((res) => res.json())

    return data
  } catch (error) {
    console.log(error)
  }
}
