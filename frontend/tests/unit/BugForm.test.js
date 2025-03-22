import { render, screen } from "@testing-library/react";
import BugForm from "../../src/componenets/BugForm";

test("BugForm renders correctly", () => {
  render(<BugForm />);
  expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
});