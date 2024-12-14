import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Container from "../components/Container";
import RestaurantDetail from "../components/RestaurantDetail";
import ProductList from "../components/ProductList";

const Restaurant = () => {
  return (
    <div>
      <div className="shadow">
        <Container>
          <RestaurantDetail />
        </Container>
      </div>

      <Container>
        <ProductList />
      </Container>
    </div>
  );
};

export default Restaurant;
