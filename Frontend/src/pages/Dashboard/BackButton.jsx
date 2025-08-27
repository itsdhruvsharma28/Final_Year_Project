import React from "react";
import { Link } from "react-router-dom";
const BackButton = () => {
    return <Link to={"/"}>  <div class="m-3 flex h-[50px] w-[50px] items-center justify-center rounded-[100%] text-3xl font-extrabold hover:smooth: bg-gray-500 ">
        {"<<<" ||
            <i class="fa-solid fa-chevron-left"></i>
        }</div>
    </Link>;
};

export default BackButton;
