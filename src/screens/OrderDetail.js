import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useGetOrderByUserQuery } from "../services/shop";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const OrderDetail = ({ route }) => {
  const { id } = route.params;
  const localId = useSelector((state) => state.auth.localId);
  const {
    data: order,
    isLoading,
    error,
  } = useGetOrderByUserQuery({
    localId,
    orderId: id,
  });

  if (isLoading) return <LoadingSpinner />;

  if (error) return <Text>Error al cargar los detalles de la orden.</Text>;
  if (!order) return <Text>No se encontraron detalles para esta orden.</Text>;

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Detalles de la Orden</Text>
        <Text>ID de la Orden: {order.id}</Text>
        <Text>Cliente: {order.customerName}</Text>
        <Text>Total: ${order.total}/</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
