import { TestComponent } from "./TestComponent";
import { render } from "@testing-library/react"

test("Renders h2 containing Test", () => {
    const { getByText } = render(<TestComponent/>);
    const h2 = getByText(/Test/);
    expect(h2).toHaveTextContent("Test");
});