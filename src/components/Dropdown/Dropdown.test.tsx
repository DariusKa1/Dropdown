import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IDropdownData } from "../../utils/IDropdownData";
import Dropdown from "./Dropdown";

const data: IDropdownData[] = [
  {
    id: 1,
    group: "Cars",
    values: ["Audi", "BMW", "Volvo"],
  },
];

describe("Dropdown component", () => {
  test(`Render 'Please select Items' when no any items picked`, () => {
    render(<Dropdown dropdownData={data} />);

    const pleaseSelectItemsElement = screen.getByText(
      "Please pick some items..."
    );
    expect(pleaseSelectItemsElement).toBeInTheDocument();
  });

  test("Click dropdown button and list item and Not render Please select Items", () => {
    render(<Dropdown dropdownData={data} />);

    const dropdownButtonElement = screen.getByRole("button");
    userEvent.click(dropdownButtonElement);
    const listItemBMW = screen.getByText("BMW");
    userEvent.click(listItemBMW);

    const pleaseSelectItemsElement = screen.queryByText("Please select Items");
    expect(pleaseSelectItemsElement).not.toBeInTheDocument();
  });

  test("Render dropdown button", () => {
    render(<Dropdown dropdownData={data} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Click dropdown button and render all groups with values", () => {
    render(<Dropdown dropdownData={data} />);

    const dropdownButtonElement = screen.getByRole("button");
    userEvent.click(dropdownButtonElement);

    const groupName = screen.getByText("Cars:");
    const valueOne = screen.getByText("Audi");
    const valueTwo = screen.getByText("BMW");
    const valueThree = screen.getByText("Volvo");
    expect(groupName).toBeInTheDocument();
    expect(valueOne).toBeInTheDocument();
    expect(valueTwo).toBeInTheDocument();
    expect(valueThree).toBeInTheDocument();
  });

  test("NOT click dropdown button and NOT render all groups with values", () => {
    render(<Dropdown dropdownData={data} />);

    const groupName = screen.queryByText("Cars:");
    const valueOne = screen.queryByText("Audi");
    const valueTwo = screen.queryByText("BMW");
    const valueThree = screen.queryByText("Volvo");
    expect(groupName).not.toBeInTheDocument();
    expect(valueOne).not.toBeInTheDocument();
    expect(valueTwo).not.toBeInTheDocument();
    expect(valueThree).not.toBeInTheDocument();
  });

  test("Pick item from dropdown and render selectedItem with delete button on screen", () => {
    render(<Dropdown dropdownData={data} />);

    const dropdownButtonElement = screen.getByText("V");
    userEvent.click(dropdownButtonElement);
    const audiElement = screen.getByText("Audi");
    userEvent.click(audiElement);
    userEvent.click(dropdownButtonElement);

    const audiElementOnDisplay = screen.getByText("Audi");
    const audiElementDeleteButton = screen.getByText("X");
    expect(audiElementOnDisplay).toBeInTheDocument();
    expect(audiElementDeleteButton).toBeInTheDocument();
  });

  test("Pick item and delete picked item and NOT render it on screen", () => {
    render(<Dropdown dropdownData={data} />);

    const dropdownButtonElement = screen.getByText("V");
    userEvent.click(dropdownButtonElement);
    const listItemBMW = screen.getByText("BMW");
    userEvent.click(listItemBMW);
    userEvent.click(dropdownButtonElement);
    const audiDeleteElement = screen.getByText("X");
    userEvent.click(audiDeleteElement);

    const audiElementOnDisplay = screen.queryByText("Audi");
    const audiDeleteElementOnDisplay = screen.queryByText("X");
    expect(audiElementOnDisplay).not.toBeInTheDocument();
    expect(audiDeleteElementOnDisplay).not.toBeInTheDocument();
  });
});
