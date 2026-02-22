import React from 'react'
import ProductList from '../components/ProductList'

const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ category: string, query: string }> }) => {
	const category = (await searchParams).category
	const query = (await searchParams).query

	return (
		<div>
			<ProductList category={category} query={query} params='products' />
		</div>
	)
}

export default ProductsPage