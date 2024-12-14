import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";
import store from "../redux/store";

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurant);

  const {cart} = useSelector((store) => store.cart);

  const total = cart.reduce((a,b) => a + b.amount , 0)

  return (
    <header className="shadow">
      <Container designs="flex justify-between items-center">
        <Link
          to="/"
          className="text-red-500 font-[900] text-2xl font-mono md:text-3xl"
        >
          Thunk Sepeti
        </Link>

        <div className="flex gap-5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            Yakınınızda {restaurants.length}
            {"  "}
            <IoRestaurant className="text-red-500" />
          </Link>

          <button className="border py-1 px-3 rounded text-red-500 hover:bg-red-500 hover:text-white transition max-md:hidden">
            Giriş Yap
          </button>
          <button className="border py-1 px-3 rounded text-red-500 hover:bg-red-500 hover:text-white transition max-md:hidden">
            Kayıt Ol
          </button>

          <Link
            to="/cart"
            className="flex items-center gap-2 p-2 hover:bg-red-100 rounded-full"
          >
            <BsBasket />

            <span>{total}</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
