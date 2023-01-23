import React from "react";

const CategoryCard = ({ cat_image, cat_name, action }) => {
  return (
    // category container
    <div
      className="hover:cursor-pointer rounded h-[50px] bg-center bg-no-repeat bg-cover"
      style={{backgroundImage: `url(${cat_image})`}}
    >
      <div className="h-full w-full text-white flex justify-center items-center bg-black opacity-50">
        {/* category title */}
        <h3 className="font-bold text-[20px]">{cat_name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
