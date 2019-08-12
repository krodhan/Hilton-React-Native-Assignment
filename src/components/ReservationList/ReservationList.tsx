import React from "react";
import { FlatList } from "react-native";
import { ReservationProps } from "../../models/reservation";
import ReservationItem from "./../ReservationItem";

interface Props {
  reservations: ReservationProps[];
}

const ReservationList: React.FunctionComponent<Props> = ({ reservations }) => {
  return (
    <FlatList
      data={reservations}
      keyExtractor={(item: ReservationProps, index) => index.toString()}
      renderItem={({ item }) => <ReservationItem item={item} />}
    />
  );
};

export default ReservationList;
