import Image from "next/image";
import ProductImage1 from "@/public/images/products/1.jpg"

export default function ProductCard() {
// export default function ProductCard({ product }) {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={ProductImage1.src}
                    alt="product-image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={ProductImage1.src}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            Product Name
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Black
                    </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    $999
                </p>
            </div>
        </div>
    );
}