import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import reactTestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  let appComponent: JSX.Element;
  beforeEach(() => {
    appComponent = (
      <MemoryRouter>
        <App
          menu={{
            appetizer: {},
            tempura: {},
            udon: {},
            yaki: {},
            teriyaki: {},
            bento: {},
          }}
        />
      </MemoryRouter>
    );
  });
  describe("snapshot", () => {
    it("renders app", () => {
      const app = reactTestRenderer.create(appComponent);
      expect(app.toJSON()).toMatchSnapshot();
    });
  });
});
