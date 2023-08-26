import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-full px-3 py-5">
      <div className="">
        <p className="text-2xl leading-none text-white ">-{">"} louie jay</p>
        <p className="text-lg leading-none text-right text-blue-300">
          fullstack_dev
        </p>
      </div>
      {/* <div className="flex gap-5 pr-32 text-2xl">
        <Link className="text-yellow-300" href="">
          =home
        </Link>
        <Link className="text-yellow-300" href="">
          =about
        </Link>
        <Link className="text-yellow-300" href="">
          =projects
        </Link>
        <Link className="text-yellow-300" href="">
          =services
        </Link>
        <Link className="text-yellow-300" href="">
          =resume
        </Link>
        <Link className="text-yellow-300" href="">
          =contact
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
