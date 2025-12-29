import React from "react";
import SC1 from "../assets/sc1.png";
import SC2 from "../assets/sc2.png";
import SC3 from "../assets/sc3.png";
import SC4 from "../assets/sc4.png";
import SC11 from "../assets/sc11.png";
import SC12 from "../assets/sc12.png";
import SC13 from "../assets/sc13.png";
import SC14 from "../assets/sc14.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-center ">
        <br />
        <span className="text-4xl font-semibold">NEW LAUNCHES</span>
        <br />
        <br />
        <div className="flex justify-between ml-7 mr-7 ">
          <div className="h-100">
            <img src={SC1} alt="image 1"  />
            <button className="border-2 rounded w-100 font-bold text-white bg-black p-2">
              ADD TO CART
            </button>
          </div>
          <div className="h-100">
            <img src={SC2} alt="image 2"  />
            <button className="border-2 rounded w-100 font-bold text-white bg-black p-2">
              ADD TO CART
            </button>
          </div>
          <div className="h-100">
            <img src={SC3} alt="image 3"  />
            <button className="border-2 rounded w-100 font-bold text-white bg-black p-2">
              ADD TO CART
            </button>
          </div>
          <div className="h-100" >
            <img src={SC4} alt="image 4" />
            <button className="border-2 rounded w-100 font-bold text-white bg-black p-2">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------- */}
      <div className="text-center mt-5">
        <br />
        <span className="text-4xl font-semibold">CHRISTMAS SPECIAL</span>
        <br />
        <br />
        <div className="flex justify-between ml-7 mr-7 ">
          <div className="h-100">
            <img src={SC11} alt="image 1"  />
            <button className="border-2 rounded w-100 font-bold text-white bg-black p-2">
              ADD TO CART
            </button>
          </div>
          <div className="h-100">
            <img src={SC12} alt="image 2"  />
            <button className="border-2 rounded w-100 font-bold text-white bg-black p-2">
              ADD TO CART
            </button>
          </div>
          <div className="h-100">
            <img src={SC13} alt="image 3"  />
            <button className="border-2 rounded w-100 font-bold text-white bg-black p-2">
              ADD TO CART
            </button>
          </div>
          <div className="h-100">
            <img src={SC14} alt="image 4"  />
            <button className="border-2 rounded w-100 font-bold text-white bg-black p-2">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------- */}

      <div className="container flex mt-\[70px]\ ">
        <button className="border-2 p-3 text-white bg-black rounded justify-center">VIEW ALL</button>
      </div>
      </div>
    </>
  );
};
export default Home;
