import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./ProductCard.module.scss";
import Button from "../../button/Button";
import useFetch from "../../../hooks/useFetch";

const ProductCard = ({ image, name, price, colSpace }) => {
  const addToCart = () => {
    console.log("add to cart");
  };

  return (
    <div
      data-test="component-product-card"
      className={`col-${colSpace} ${style.productCard}`}
    >
      <img
        data-test="product-image"
        src={image}
        loading="lazy"
        alt={name}
        className={style.productCard__image}
      />
      <h5 data-test="product-name">{name}</h5>
      <p data-test="product-price">{price}</p>
      <Button
        onClick={addToCart}
        classes="btn btn-primary btn-border"
        name="Add to Cart"
      />
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
