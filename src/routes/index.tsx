import { createAppContainer, createStackNavigator } from "react-navigation";

import CreateReservation from "./CreateReservation";
import Reservations from "./ReservationsList";

const RootStack = createStackNavigator(
  {
    ReservationCreate: CreateReservation,
    Reservations
  },
  {
    initialRouteName: "Reservations",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#19A1D5"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const Routes = createAppContainer(RootStack);

export default Routes;
