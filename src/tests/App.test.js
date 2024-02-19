import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

describe("App", () => {
  it("renders App component correctly", () => {
    render(<App forecasts={forecast.forecasts} location={forecast.location} />);
    const h1Element = screen.getByText(/Manchester, UK/i);

    expect(h1Element).toBeInTheDocument();
  });
});
