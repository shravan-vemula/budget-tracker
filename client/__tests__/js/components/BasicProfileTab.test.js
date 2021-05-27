import React from "react";
import { cleanup } from "@testing-library/react";
import BasicProfileTab from "js/_components/molecules/BasicProfileTab";
import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";

afterEach(cleanup);

jest.mock("axios");

describe("BasicProfileTab Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<BasicProfileTab />);
    expect(wrapper).toMatchSnapshot();
  });

  // it("does it recieve user details", async () => {
  //   axios.get.mockResolvedValue({
  //     data: {
  //       name: "Raju",
  //       phone: "9999999999",
  //       country: "india",
  //     },
  //   });

  //   const { result, waitForNextUpdate } = renderHook(() => BasicProfileTab());
  //   await waitForNextUpdate();
  //   expect(result.current._owner.memoizedState).toMatchObject({
  //     memoizedState: "Raju",
  //   });
  //   expect(result.current._owner.memoizedState.next).toMatchObject({
  //     memoizedState: "9999999999",
  //   });
  //   expect(result.current._owner.memoizedState.next.next).toMatchObject({
  //     memoizedState: "india",
  //   });
  // });
});
