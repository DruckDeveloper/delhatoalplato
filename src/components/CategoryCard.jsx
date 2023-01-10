import React from "react";

const CategoryCard = ({ cat_image, cat_name, action}) => {
  return (
    // category container
    <div 
    className="relative grid place-items-center hover:cursor-pointer">
      {/* category background image */}
      <img
        className="rounded-xl"
        src={cat_image}
        alt={cat_name}
      />
      <div className="w-full h-full absolute text-white flex justify-center items-center bg-black opacity-50">
        {/* category title */}
        <h3 className="font-bold text-[20px]">{cat_name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
