import { mount } from "enzyme";
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import CreateReservation from "../CreateReservation";

jest.mock("react-navigation", () => ({
  withNavigation: jest.fn(wrapper => wrapper)
}));

describe("<CreateReservation/>", () => {
  it("should render component", () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <CreateReservation />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain("Create Reservation");
  });
});
