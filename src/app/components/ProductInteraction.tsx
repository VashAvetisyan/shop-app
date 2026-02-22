"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ProductType } from "../types"
import { Minus, Plus, ShoppingCartIcon } from "lucide-react"
import { Suspense, useState } from "react"
import useCartStore from "../stores/cartStore"
import { toast } from 'react-toastify'

const ProductInteraction = ({ product, selectedSize, selectedColor }: { product: ProductType, selectedSize: string, selectedColor: string }) => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [quantity, setQuantity] = useState(1)
	const { addToCart } = useCartStore()

	const handleTypeChange = (type: "size" | "color", value: string) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set(type, value)
		router.push(`${pathname}?${params.toString()}`, { scroll: false })
	}

	const hanedleQuantityChange = (type: "inc" | "dec") => {
		if (type === "inc") {
			setQuantity(prev => prev + 1)
		} else {
			if (quantity === 1) return
			setQuantity(prev => prev - 1)
		}
	}
	const handleAddtoCart = () => {
		addToCart({ ...product, selectedSize, selectedColor, quantity })
		toast.success("Product added to cart!")
	}

	return (
		<div className="flex flex-col gap-4 mt-4">
			<div className="flex flex-col gap-2 text-xs">
				<span className="text-gray-500">Size</span>
				<div className="flex items-center gap-2">
					{product.sizes.map(size => (
						<div
							key={size}
							className={`cursor-pointer border p-0.5 ${selectedSize === size ? "border-gray-600" : "border-gray-300"}`}
							onClick={() => handleTypeChange("size", size)}
						>
							<div className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}>
								{size.toUpperCase()}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-2 text-sm">
				<span className="text-gray-500">Color</span>
				<div className="flex items-center gap-2">
					{product.colors.map((color) => (
						<div
							className={`cursor-pointer border p-0.5 ${selectedColor === color ? "border-gray-300" : "border-white"
								}`}
							key={color}
							onClick={() => handleTypeChange("color", color)}
						>
							<div className={`w-6 h-6`} style={{ backgroundColor: color }} />
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-2 text-sm">
				<span className="text-gray-500">Quantity</span>
				<div className="flex item-center gap-2">
					<button className="cursor-pointer border border-gray-300 p-1" onClick={() => hanedleQuantityChange("dec")}>
						<Minus className="w-4 h-4" />
					</button>
					<span>{quantity}</span>
					<button className="cursor-pointer border border-gray-300 p-1" onClick={() => hanedleQuantityChange("inc")}>
						<Plus className="w-4 h-4" />
					</button>
				</div>
			</div>
			<button className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium" onClick={handleAddtoCart}>
				<Plus className="w-4 h-4" />
				Add to Cart
			</button>
			<button className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex justify-center items-center gap-2 cursor-pointer text-sm font-medium">
				<ShoppingCartIcon className="w-4 h-4" />
				Buy this item
			</button>
		</div>
	)
}

export default function ProductInteractionWrapper(props: { product: ProductType, selectedSize: string, selectedColor: string }) {
	return (
		<Suspense fallback={null}>
			<ProductInteraction {...props} />
		</Suspense>
	)
}