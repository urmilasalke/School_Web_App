import Header from "../components/Header";
import { render } from "@testing-library/react";
describe("header", () => {
  test("renders header component", () => {
    render(<Header />);
  });
});
