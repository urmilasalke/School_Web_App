import Aboutus from "../components/Aboutus";
import { fireEvent, render, screen } from "@testing-library/react";
describe("home", () => {
  test("renders home component", () => {
    render(<Aboutus />);
  });
});

// test("increment counter", () => {
//   render(<Aboutus />);
//   const btnIncrement = screen.findByLabelText("History");

//   fireEvent.click(btnIncrement);
//   expect(screen.getByTestId("home-text")).toHaveTextContent("1");
// });
