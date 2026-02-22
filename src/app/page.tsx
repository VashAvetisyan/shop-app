import Image from "next/image"
import ProductList from "./components/ProductList"

const Homepage = async ({searchParams} : {searchParams: Promise<{category: string, query: string }>}) => {
    const category = (await searchParams).category
    const query = (await searchParams).query
    
    return (
        <div className=''>
            <div className="relative aspect-3/1 mb-12">
                <Image src="/featured.png" alt="Featured Product" fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <ProductList category={category} query={query} params='homepage'/>
        </div>
    )
}

export default Homepage