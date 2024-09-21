import { StyleSheet, FlatList } from "react-native";
import { Category } from "./Category.js";
import { useGetCategoriesQuery } from "../services/shop.js";
import { LoadingSpinner } from "./LoadingSpinner.js";

export const Categories = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <LoadingSpinner />;
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Category item={item} />}
    />
  );
};

const styles = StyleSheet.create({});
