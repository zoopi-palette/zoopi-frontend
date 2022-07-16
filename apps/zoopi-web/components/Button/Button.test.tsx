import {Button} from "./Button"
import {fireEvent, render, screen} from "@web/tests/test-utils"

test("trigger onClick", ()=>{
  const handleClick = jest.fn();
  const BUTTON_TEXT = "BUTTON"

  render(<Button onClick={handleClick}>{BUTTON_TEXT}</Button>)

  const button = screen.getByRole("button", {name: BUTTON_TEXT})
  fireEvent.click(button)

  expect(handleClick).toBeCalledTimes(1);
})

test("don't trigger onClick when it's disabled", ()=>{
  const handleClick = jest.fn();
  const BUTTON_TEXT = "BUTTON"

  render(<Button disabled={true} onClick={handleClick}>{BUTTON_TEXT}</Button>)

  const button = screen.getByRole("button", {name: BUTTON_TEXT})
  fireEvent.click(button)

  expect(handleClick).toBeCalledTimes(0);
})