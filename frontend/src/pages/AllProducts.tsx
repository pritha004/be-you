import {
  allProducts,
  footerLinks,
  sortByCategories,
  subCategoriesMapping,
} from "../constants";
import { Button, ProductCard } from "../components";
import { Product } from "../models/Product";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  type?: "MAKEUP" | "SKINCARE" | "HAIRCARE" | "BABYCARE" | "ALL PRODUCTS";
};

const AllProducts = ({ type }: Props) => {
  const [products, setProducts] = useState<Product[]>();
  const [subCategories, setSubCategories] = useState<string[]>();

  const [isSelectedSort, setIsSelectedSort] = useState("");

  useEffect(() => {
    setIsSelectedSort("");

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
    setIsSelectedSort("");

    const filterProducts = allProducts.filter(
      (product) => product.SubCategory === subCategory
    );

    if (filterProducts && filterProducts.length > 0) {
      setProducts(filterProducts);
    } else {
      setProducts([]);
    }
  };

  const sortByOptions = (category: string) => {
    if (category) {
      setIsSelectedSort(category);
    }
    if (products && products.length > 0) {
      const sortedProducts = [...products];
      if (category === "name") {
        sortedProducts.sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else if (category === "custrating") {
        sortedProducts.sort(function (a, b) {
          return b.rating - a.rating;
        });
      } else if (category === "pricehightolow") {
        sortedProducts.sort(function (a, b) {
          return b.price - a.price;
        });
      } else if (category === "pricelowtohigh") {
        sortedProducts.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      setProducts(sortedProducts);
    }
  };

  return (
    <>
      <section className=" sm:px-16 px-8 sm:py-24 py-28 dark:text-white">
        <section id="allProducts" className="max-container">
          <div className="flex justify-center gap-5 mb-4">
            <h2 className="text-4xl font-bold font-palanquin capitalize">
              <span className="text-skin">{type?.slice(0, 4)}</span>
              {type?.slice(4)}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            {type === "ALL PRODUCTS"
              ? footerLinks[0].links.map((link) => (
                  <span
                    className={`flex justify-center items-center gap-2 px-6 py-2 border text-lg leading-none rounded-full
                bg-white text-black border-chocolate-brown hover:bg-pale-skin    
                `}
                    key={link.name}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </span>
                ))
              : subCategories?.map((subCategory) => (
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
              <div className="p-4 rounded-md border shadow-lg">
                <p className="font-semibold text-lg">Sort By</p>
                {sortByCategories?.map((category) => (
                  <span
                    className="flex items-center justify-between gap-1 p-1"
                    key={category.id}
                  >
                    <span>{category.label}</span>
                    {isSelectedSort === category.id ? (
                      <button>
                        <FaCircleCheck className="text-chocolate-brown" />
                      </button>
                    ) : (
                      <button onClick={() => sortByOptions(category.id)}>
                        <FaRegCircle className=" active:text-chocolate-brown" />
                      </button>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded sm:col-span-9">
              <div className="grid justify-around lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {products?.map((product: Product) => (
                  <Link to={`/products/${product.id}`} key={product.id}>
                    <ProductCard {...product} />
                  </Link>
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
