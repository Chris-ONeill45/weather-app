import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const mockForecast = {
    date: 1111111,
    humidity: 50,
    temperature: {
      min: 10,
      max: 20,
    },
    wind: {
      speed: 10,
      direction: "NW",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={mockForecast} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with correct data", () => {
    const { getByText } = render(<ForecastDetails forecast={mockForecast} />);

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("Min Temperature: 10°C")).toHaveClass(
      "forecast-details__min-temperature"
    );
    expect(getByText("Max Temperature: 20°C")).toHaveClass(
      "forecast-details__max-temperature"
    );
    expect(getByText("Humidity: 50%")).toHaveClass(
      "forecast-details__humidity"
    );
    expect(getByText("Wind Speed: 10 mph")).toHaveClass(
      "forecast-details__wind-speed"
    );
    expect(getByText("Wind Direction: NW")).toHaveClass(
      "forecast-details__wind-direction"
    );
  });
});
