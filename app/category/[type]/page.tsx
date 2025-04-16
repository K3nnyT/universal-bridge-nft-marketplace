import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import PixelHeader from "@/components/pixel-header"
import { Button } from "@/components/ui/button"
import CategoryNFTGrid from "@/components/category-nft-grid"

export default function CategoryPage({ params }: { params: { type: string } }) {
  const categoryType = params.type

  // Format the category title (capitalize first letter, handle "all" case)
  const categoryTitle =
    categoryType === "all" ? "All Items" : categoryType.charAt(0).toUpperCase() + categoryType.slice(1)

  return (
    <div className="pixel-container min-h-screen bg-zinc-900 text-white">
      <PixelHeader />

      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="pixel-border p-6 mb-8 bg-zinc-800">
          <h1 className="pixel-text text-3xl font-bold text-white-400 mb-4">{categoryTitle}</h1>
          <p className="text-zinc-300 mb-6">
            {categoryType === "Paintings" &&
              "Here you find all things made with a brush."}
            {categoryType === "Photography" &&
              "Light captured by the lens."}
            {categoryType === "Digital art" &&
              "Coputer or Ipad, it makes no difference to us."}
            {categoryType === "all" && "Browse our complete collection of relic artifacts."}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="pixel-button bg-blue-600 hover:bg-blue-700">Filter</Button>
            <Button className="pixel-button bg-white-600 hover:bg-white-700">Sort By: Latest</Button>
          </div>
        </div>

        <CategoryNFTGrid category={categoryType} />
      </main>

      <footer className="pixel-border-top bg-zinc-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-300 mb-2">© 2025 Pixel Realm NFT Marketplace</p>
          <div className="flex justify-center gap-4">
            <Link href="/about" className="text-white-400 hover:text-white-300">
              About
            </Link>
            <Link href="/faq" className="text-white-400 hover:text-white-300">
              FAQ
            </Link>
            <Link href="/terms" className="text-white-400 hover:text-white-300">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

