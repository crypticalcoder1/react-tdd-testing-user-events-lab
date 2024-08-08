import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);
  const image = screen.getByAltText("My profile pic");
  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);
  const bio = screen.getByText(/lorem ipsum/i);
  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toHaveAttribute("href", expect.stringContaining("https://github.com"));
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("https://linkedin.com"));
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email address/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);
  const checkbox1 = screen.getByRole("checkbox", { name: /interest 1/i });
  const checkbox2 = screen.getByRole("checkbox", { name: /interest 2/i });
  const checkbox3 = screen.getByRole("checkbox", { name: /interest 3/i });

  expect(checkbox1).toBeInTheDocument();
  expect(checkbox2).toBeInTheDocument();
  expect(checkbox3).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);
  const checkbox1 = screen.getByRole("checkbox", { name: /interest 1/i });
  const checkbox2 = screen.getByRole("checkbox", { name: /interest 2/i });
  const checkbox3 = screen.getByRole("checkbox", { name: /interest 3/i });

  expect(checkbox1).not.toBeChecked();
  expect(checkbox2).not.toBeChecked();
  expect(checkbox3).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email address/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

  // Validate input values directly
  expect(nameInput.value).toBe('John Doe');
  expect(emailInput.value).toBe('john@example.com');
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);
  const checkbox1 = screen.getByRole("checkbox", { name: /interest 1/i });

  // Click checkbox and verify state
  fireEvent.click(checkbox1);
  expect(checkbox1).toBeChecked();

  // Click checkbox again and verify state
  fireEvent.click(checkbox1);
  expect(checkbox1).not.toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  fireEvent.click(submitButton);
  const successMessage = screen.getByText(/submission successful/i);
  expect(successMessage).toBeInTheDocument();
});
