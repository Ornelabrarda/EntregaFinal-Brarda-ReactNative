import { FlatList, StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem.js";
import { Search } from "../components/Search.js";
import { useGetProductsQuery } from "../services/shop.js";
import { LoadingSpinner } from "../components/LoadingSpinner.js";

export const ItemListCategories = ({ route }) => {
  const { category } = route.params;
  const {
    data: products,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery(category);
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setProductsFiltered(products);
    }
  }, [category, isSuccess]);

  const onSearch = (input) => {
    if (input) {
      setProductsFiltered(
        productsFiltered.filter((products) => products.title.includes(input))
      );
    } else {
      setProductsFiltered(products);
    }
  };
  if (isLoading) return <LoadingSpinner />;

  if (isError)
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Search onSearch={onSearch} />
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
