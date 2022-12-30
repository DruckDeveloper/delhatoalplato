import React from "react";

const CategoryCard = ({ cat_image, cat_name }) => {
  return (
    // category container
    <div className="relative grid place-items-center w-1/5 relative hover:cursor-pointer">
      {/* category background image */}
      <img
        className="rounded-xl border-solid border-2 border-[#000000]"
        src={cat_image}
        alt={cat_name}
      />
      <div className="w-full h-full absolute text-white flex justify-center items-center">
        {/* category title */}
        <h3 className="font-bold sm:text-[12px] lg:text-[30px]">{cat_name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
