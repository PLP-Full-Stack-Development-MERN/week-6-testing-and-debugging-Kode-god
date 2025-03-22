import { render, screen, waitFor } from "@testing-library/react";
import BugList from "../../src/componenets/BugList";
import { getBugs } from "../../src/api";

// Mock the API call
jest.mock("../../src/api");

test("BugList displays bugs fetched from API", async () => {
  const mockBugs = [
    { _id: "1", title: "Test Bug 1", description: "This is a test bug" },
    { _id: "2", title: "Test Bug 2", description: "This is another test bug" },
  ];
  getBugs.mockResolvedValue({ data: mockBugs });

  render(<BugList />);

  await waitFor(() => {
    expect(screen.getByText("Test Bug 1")).toBeInTheDocument();
    expect(screen.getByText("Test Bug 2")).toBeInTheDocument();
  });
});