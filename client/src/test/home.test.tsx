import Home from "../components/Home";
import { render } from "@testing-library/react";
describe("home", () => {
  test("renders home component", () => {
    render(<Home />);
  });
});
