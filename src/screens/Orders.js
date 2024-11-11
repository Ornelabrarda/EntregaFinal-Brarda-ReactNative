import { FlatList, StyleSheet, Text, View } from "react-native";
import { OrderItem } from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/shop";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import { EmptyOrder } from "../components/EmptyOrder.js";

export const Orders = () => {
  const localId = useSelector((state) => state.auth.localId);

  const { data: orders, isLoading } = useGetOrdersByUserQuery(localId);

  if (isLoading) return <LoadingSpinner />;

  if (!orders || orders.length === 0) return <EmptyOrder />;

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
