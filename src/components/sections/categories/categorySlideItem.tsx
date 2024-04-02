import React from 'react';

const CategorySlideItem = ({item}:{item:Subcategory}) => {
    return (
        <div
            className="border flex py-5 items-center  group/subcategory_b gap-2 justify-center flex-col cursor-pointer hover:bg-primary bg-white hover:text-white transition-all rounded "
        >
          <span className="text-5xl">
            <i className={item.icon}></i>
          </span>
            <h2 className="text-center font-medium md:text-base text-sm">{item.name}</h2>
        </div>
    );
};

export default CategorySlideItem;
