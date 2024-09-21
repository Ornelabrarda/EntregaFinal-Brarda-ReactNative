import { FlatList, StyleSheet, Text, View } from "react-native";
import { OrderItem } from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shop";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const Orders = () => {
  const { data: orders, isLoading } = useGetOrdersByUserQuery("1");

  if (isLoading) return <LoadingSpinner />;

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
