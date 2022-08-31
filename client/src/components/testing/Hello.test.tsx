import { render, screen } from "@testing-library/react"
import Hello from "./Hello"

it("renders 'Hello World' component", () => {
    render(<Hello />)
    const myEle = screen.getByText(/Hello World/)
    expect(myEle).toBeInTheDocument()
})