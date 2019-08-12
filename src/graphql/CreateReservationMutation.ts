import { gql } from "apollo-boost";

const CreateReservationMutation = gql`
  mutation addReservation(
    $name: String!
    $hotelName: String!
    $arrivalDate: String!
    $departureDate: String!
  ) {
    createReservation(
      data: {
        name: $name
        hotelName: $hotelName
        arrivalDate: $arrivalDate
        departureDate: $departureDate
      }
    ) {
      id
    }
  }
`;

export default CreateReservationMutation;
