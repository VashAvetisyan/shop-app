'use client'

import React, { useState } from 'react'
import { ProductType } from '../types'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import useCartStore from '../stores/cartStore'
import { toast } from 'react-toastify'

const ProductCard = ({ product }: { product: ProductType }) => {
	const [productType, setProductType] = useState({
		size: product.sizes[0],
		color: product.colors[0]
	})

	const {addToCart} = useCartStore()

	const handleAddToCart  = () => {
		addToCart({
			...product,
			quantity: 1,
			selectedSize: productType.size,
			selectedColor: productType.color
		})
		toast.success("Product added to cart!")
	}

	const handleProductType = ({ type, value }: { type: "size" | "color", value: string }) => {
		setProductType((prev) => ({ ...prev, [type]: value }))
	}
	return (
		<div className='shadow-lg rounded-lg overflow-hidden'>
			<Link href={`/products/${product.id}`}>
				<div className='relative aspect-2/3'>
				<Image src={product.images[productType.color]} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw"
						className='object-cover hover:scale-105 transition-all duration-300' />
				</div>
			</Link>
			<div className='flex flex-col gap-4 p-4'>
				<h1 className='font-medium'>{product.name}</h1>
				<p className='text-sm text-gray-500'>{product.shortDescription}</p>
				<div className='flex items-center gap-4 text-xs'>
					<div className='flex flex-col gap-1'>
						<span className='text-gray-500'>Size</span>
						<select name="size" id="size" className='ring ring-gray-300 rounded-md px-2 py-1' 
							onChange={e=>handleProductType({type:"size", value:e.target.value})}>
							{product.sizes.map((size) => (
								<option key={size} value={size}>{size.toUpperCase()}</option>
							))}
							
						</select>
					</div>

					<div className='flex flex-col gap-1'>
						<span className='text-gray-500'>Color</span>
						<div className='flex items-center gap-2'>
							{product.colors.map((color) => (
								<div key={color} 
									className={`cursor-pointer border ${productType.color == color ? "border-gray-400" : "border-gray-200" } rounded-full p-[1.2px]`}>
									<div className='w-3.5 h-3.5 rounded-full' style={{ backgroundColor: color }}
									onClick={()=>handleProductType({type:"color", value:color})}>

									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='flex items-center justify-between'>
					<p className='font-medium'>${product.price.toFixed(2)}</p>
					<button onClick={handleAddToCart} className='ring ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2'>
						<ShoppingCart className='w-4 h-4' />
						Add to Cart
					</button>
				</div>
			</div>
		</div>

	)
}

export default ProductCard