import TopHeader from "../components/TopHeader";
import { render } from "@testing-library/react";
describe("Top header", () => {
  test("renders top header component", () => {
    render(<TopHeader />);
  });
});
