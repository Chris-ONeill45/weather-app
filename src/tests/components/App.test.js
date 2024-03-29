import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

// describe("App", () => {
//   it("renders App component correctly", () => {
//     render(<App forecasts={forecast.forecasts} location={forecast.location} />);
//     const h1Element = screen.getByText(/Manchester, UK/i);

//     expect(h1Element).toBeInTheDocument();
//   });
// });

describe("App", () => {
  test("renders correctly", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      data: forecast,
    });
    const { asFragment } = render(<App />);
    await waitFor(() => {
      const h1Element = screen.getByText(/Manchester, UK/i);

      expect(h1Element).toBeInTheDocument();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
