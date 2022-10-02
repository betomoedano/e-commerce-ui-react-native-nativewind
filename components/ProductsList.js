import * as React from "react";
import { FlatList } from "react-native";
import { products } from "../products";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <ProductCard {...item} />}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
    />
  );
}
