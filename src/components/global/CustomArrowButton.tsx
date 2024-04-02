import React from 'react';
import {ButtonGroupProps} from "react-multi-carousel";
import {IconArrowLeft, IconArrowRight} from "@/components/assets/menuIcons";


interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
}
const CustomArrowButton = ({ next, previous }:CarouselButtonGroupProps) => {
    return (
        <div className="flex items-center gap-1 md:gap-2 absolute md:top-[7.8rem] top-[7.3rem] right-2">
            <button
                onClick={previous}
                type="button"
                className="swiper-flash-prev text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
            >
                <IconArrowLeft />
            </button>
            <button
                onClick={next}
                type="button"
                className="swiper-flash-next text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
            >
                <IconArrowRight />
            </button>
        </div>
    );
};

export  default  CustomArrowButton