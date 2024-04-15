import {
  allProducts,
  sortByCategories,
  subCategoriesMapping,
} from "../constants";
import { Button, ProductCard } from "../components";
import { Product } from "../models/Product";
import { useEffect, useState } from "react";

type Props = {
  type?: "MAKEUP" | "SKINCARE" | "HAIRCARE" | "BABYCARE" | "ALL PRODUCTS";
};

const AllProducts = ({ type }: Props) => {
  const [products, setProducts] = useState<Product[]>();
  const [subCategories, setSubCategories] = useState<string[]>();

  useEffect(() => {
    if (type && type !== "ALL PRODUCTS") {
      setSubCategories(subCategoriesMapping[type]);
    }

    const filterProducts = allProducts.filter(
      (product) => product.category === type
    );
    if (filterProducts && filterProducts.length > 0) {
      setProducts(filterProducts);
    } else {
      setProducts(allProducts);
    }
  }, [type, setProducts]);

  const filterBySubCategory = (subCategory: string) => {
    console.log(subCategory);

    const filterProducts = allProducts.filter(
      (product) => product.SubCategory === subCategory
    );

    if (filterProducts && filterProducts.length > 0) {
      setProducts(filterProducts);
    } else {
      setProducts([]);
    }
  };

  return (
    <>
      <section className=" sm:px-16 px-8 sm:py-24 py-28">
        <section id="newProducts" className="max-container">
          <div className="flex justify-center gap-5 mb-4">
            <h2 className="text-4xl font-bold font-palanquin capitalize">
              <span className="text-skin">{type?.slice(0, 4)}</span>
              {type?.slice(4)}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            {subCategories?.map((subCategory) => (
              <Button
                key={subCategory}
                label={subCategory}
                bgColor="bg-white"
                textColor="text-black"
                borderColor="border-chocolate-brown"
                onHoverBg="bg-pale-skin"
                onClick={() => {
                  filterBySubCategory(subCategory);
                }}
              />
            ))}
          </div>
          <section className="grid gap-4 m-4 sm:grid-cols-12">
            <div className="rounded sm:col-span-3">
              <div className="p-2 rounded-md border shadow-lg">
                <p>Sort By</p>
                {sortByCategories?.map((category) => (
                  <p className="whitespace-nowrap">{category}</p>
                ))}
              </div>
            </div>
            <div className="rounded sm:col-span-9">
              <div className="grid justify-around lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {products?.map((product: Product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default AllProducts;
