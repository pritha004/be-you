const ShopByConcernCategoryCard = ({ imgURL, name }) => {
  return (
    <div className="flex flex-1 flex-col w-full rounded-md max-sm:w-full">
      <div className="flex justify-center mt-2">
        <img
          src={imgURL}
          alt={name}
          className="h-[200px] w-[200px] rounded-full object-cover"
        />
      </div>

      <div className="flex justify-center mt-2">
        <h3 className="m-1 text-md text-center leading-normal font-semibold font-palanquin">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default ShopByConcernCategoryCard;
