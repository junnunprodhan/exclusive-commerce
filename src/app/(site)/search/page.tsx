import React from 'react';
import Breadcrumb from "@/components/global/breadcrumb";
import Product from "@/components/product";
import {getProducts} from "@/hooks/getProducts";
import {IconHome} from "@/components/assets/menuIcons";

interface Props {
    searchParams: {
        keyword?: string
    }
}

const Search = async ({searchParams: {keyword}}: Props) => {

    const url = `${process.env.NEXTAUTH_URL}/api/search?keyword=${keyword}`
    const {products} = await getProducts(url)

    return (
        <div className="container py-10 min-h-screen">
            <Breadcrumb crumb={breadcrumb}/>
            <div className="pt-5 flex justify-between items-center">
                <div>
                    <h2 className="text-xl">Search keyword: <span className="text-base">...{keyword}</span></h2>
                </div>
            </div>
            {/* Product List */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-2 md:gap-5 gap-3">
                {products.map((item, index) => (
                    <Product
                        key={index}
                        item={item}
                        showDiscount={true}
                        showPercentage={true}
                    />
                ))}
            </div>
            {/* Product not found to show*/}
            {!products.length && (
                <div className="flex items-center h-full justify-center mt-[25vh] flex-col">
                    <span className="text-3xl text-primary font-bold">404</span>
                    <span className="text-xl">Product not found !</span>
                </div>
            )}

        </div>
    );
};

export default Search;

const breadcrumb = [
    {
        title: "Home",
        icon: <IconHome/>,
        pathname: "/",
    },
    {
        title: "Products",
        icon: null,
        pathname: null,
    },
];
