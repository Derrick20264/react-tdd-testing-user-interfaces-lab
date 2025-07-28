import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of derrick/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text About Me", () => {
  render(<App />);
  const subheading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(subheading).toBeInTheDocument();
});

test("displays a biography paragraph", () => {
  render(<App />);
  const paragraph = screen.getByText(/software developer/i);
  expect(paragraph).toBeInTheDocument();
});

test("has a link to my GitHub profile", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/your-username");
});

test("has a link to my LinkedIn profile", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/your-profile");
});
