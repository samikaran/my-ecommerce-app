// import '@/envConfig.js';

const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_ENDPOINT;
const access_token = process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN;

import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: endpoint,
    storefrontAccessToken: access_token
});

const getProducts = async () => {
    try {
        const products = await client.product.fetchAll();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Re-throw the error for proper handling in the calling component
    }
};

export { getProducts };