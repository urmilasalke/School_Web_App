import Contactus from "../components/Contactus";
import { render } from "@testing-library/react";
describe("header", () => {
  test("renders header component", () => {
    render(<Contactus />);
  });
});
