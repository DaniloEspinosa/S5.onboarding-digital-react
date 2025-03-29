import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Button from "./Button";
import "@testing-library/jest-dom";

const mockOnClick = vi.fn();

describe("Button component", () => {
  test("renders correctly with the passed value", () => {
    render(<Button className="btn" onClick={mockOnClick} value="Click me" />);

    // Verifica que el texto del botón sea el correcto
    expect(screen.getByText("Click me")).toBeDefined();
  });

  test("calls onClick when clicked", () => {
    render(<Button className="btn" onClick={mockOnClick} value="Click me" />);

    const button = screen.getByText("Click me");

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });

  test("applies styles and className correctly", () => {
    render(
      <Button
        className="btn-primary"
        onClick={mockOnClick}
        style={{ backgroundColor: "blue" }}
        value="Styled Button"
      />
    );

    const button = screen.getByText("Styled Button");

    expect(button).toHaveClass("btn-primary");

    expect(getComputedStyle(button).backgroundColor).toBe("rgb(0, 0, 255)");
  });
});
