import { render, screen, fireEvent } from "@testing-library/react";

import { composeStory } from "@storybook/react";
import meta, { Secondary as Story }from "./button.story.ts";
const Primary = composeStory(Story, meta);

describe("Button", () => {
	it("renders with the correct label", async () => {
		await Primary.run();

		const button = screen.getByRole("button", { name: /Button/i });
		expect(button).toBeInTheDocument();
	});

	it("applies the primary class when primary is true", async () => {
		await Primary.run({ args: { ...Primary.args, primary: true }});

		const button = screen.getByRole("button", { name: /Button/i });
		expect(button).toHaveClass("storybook-button--primary");
	});

	/*
	it("applies the secondary class when primary is false", () => {
		render(<Button label="Click Me" />);
		const button = screen.getByRole("button", { name: /Click Me/i });
		expect(button).toHaveClass("storybook-button--secondary");
	});

	it("applies the correct size classes", () => {
		const sizes = ["small", "medium", "large", "xlarge"] as const;

		sizes.forEach(size => {
		render(<Button label="Click Me" size={size} />);
		const button = screen.getByRole("button", { name: /Click Me/i });
		expect(button).toHaveClass(`storybook-button--${size}`);
		});
	});

	it("applies a custom background color", () => {
		render(<Button label="Click Me" backgroundColor="red" />);
		const button = screen.getByRole("button", { name: /Click Me/i });
		expect(button).toHaveStyle({ backgroundColor: "red" });
	});

	it("calls the onClick handler when clicked", () => {
		const handleClick = jest.fn();
		render(<Button label="Click Me" onClick={handleClick} />);
		const button = screen.getByRole("button", { name: /Click Me/i });

		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	*/
});
