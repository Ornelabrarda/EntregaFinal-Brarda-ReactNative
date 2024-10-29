import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useGetOrderByUserQuery } from "../services/shop";
import { useEffect } from "react";

export const OrderDetail = ({ route }) => {
  const { id } = route.params;
  const localId = useSelector((state) => state.auth.localId);
  const { data: order, isSuccess } = useGetOrderByUserQuery({
    localId,
    orderId: id,
  });

  useEffect(() => {
    if (isSuccess) console.log(order);
  }, [isSuccess]);

  return (
    <View>
      <Text>OrderDetail</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
