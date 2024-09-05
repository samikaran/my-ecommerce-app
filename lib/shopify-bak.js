// import '@/envConfig.js';

const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_ENDPOINT
const access_token = process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN

export async function fetchShopifyData(query) {
  const URL = `https://${endpoint}/api/2024-09/graphql.json`

  try {
    const result = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Shopify-Storefront-Access-Token": access_token
      },
      body: JSON.stringify({ query })
    })

    return {
      status: result.status,
      body: await result.json()
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      status: 500,
      error: "Error receiving data"
    }
    // throw new Error("Error receiving data");
  }
}

export async function getProducts() {
  return fetchShopifyData({
    query: `{
          products(sortKey: TITLE, first: 100) {
            edges{
              node {
                handle
                id
                title
                description
              }
            }
          }
        }`
  })
}
