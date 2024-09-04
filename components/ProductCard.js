import React from "react"
import ProductImage1 from "@/public/images/products/1.jpg"
import Image from "next/image"

const ProductCard = ({ product }) => {
    console.log(product)
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                    src={product.images[0].src}
                    width={500}
                    height={500}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={ProductImage1.src}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* {product.description} */}
                        {product.variants[0].price.amount} {product.variants[0].price.currencyCode}
                    </p>
                </div>
                {/* <p className="text-sm font-medium text-gray-900">
                    {product.variants[0].price.amount} {product.variants[0].price.currencyCode}
                </p> */}
            </div>
        </div>
    )
}

export default ProductCard