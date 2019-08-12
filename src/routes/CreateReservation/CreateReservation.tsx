import React from "react";
import { Text, View } from "react-native";
import ReservationAddForm from "../../components/AddReservation";

import styles from "./createReservationStyles";

export default class CreateReservation extends React.PureComponent {
  public static navigationOptions = {
    title: "Reservation Create"
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Create Reservation</Text>
        <ReservationAddForm />
      </View>
    );
  }
}
