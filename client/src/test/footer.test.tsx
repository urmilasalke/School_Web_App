import Footer from "../components/Footer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
describe("header", () => {
  test("renders header component", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
});
