import Link from "next/link";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { productsData } from "@/data/products";

const products = productsData

const ProductList = ({ category, params, query }: { category: string, query: string, params: "homepage" | "products" }) => {
	let filteredData = products;

	if (category && category !== "all") {
		filteredData = products.filter((item) => item.category === category)
	}

	if (query) {
		filteredData = filteredData.filter((item) =>
			item.name.toLowerCase().includes(query.toLowerCase()) ||
			item.description.toLowerCase().includes(query.toLowerCase())
		)
	}
	
	return (
		<div className="w-full">
			<Categories />
			{params == "products" && <Filter />}
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
				{filteredData.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			{params !== "products" &&
				<Link href={category ? `/products/?category=${category}` : "/products"} className="flex justify-end mt-4 underline text-gray-500">
					View All Products
				</Link>
			}

		</div>
	);
};

export default ProductList;