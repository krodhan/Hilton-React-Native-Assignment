import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { Button } from "react-native";
import { ReservationFactory } from "../../../../tests/factories";
import { CreateReservationMutation } from "./../../../graphql";
import ReservationAddForm from "../AddReservation";
import wait from "waait";

jest.mock("react-navigation", () => ({
  withNavigation: jest.fn(wrapper => wrapper)
}));
const handleSubmit = jest.fn();
const reservation = ReservationFactory.build();
const mocks = [
  {
    request: {
      query: CreateReservationMutation
    },
    result: { data: { reservation } }
  }
];

describe("Create Reservation", () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ReservationAddForm />
    </MockedProvider>
  );

  it("should create a reservation", async () => {
    await wait(0);

    wrapper.update();
    expect(wrapper.length).toEqual(1);
    wrapper.find(Button).simulate("submit");
  });
});
