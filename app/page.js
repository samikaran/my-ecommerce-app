import ProductListing from "@/components/ProductListing"


export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Latest Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          <ProductListing />
        </div>
      </div>
    </div>
    // </main>
  );
}

// export default Home;