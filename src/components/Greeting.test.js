import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('renders hello world text', () => {
        //arrange
        render(<Greeting />);

        //act

        //assert
        const helloWorldElement = screen.getByText('Hello world', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });


    test('renders "good to see you" if button was NOT clicked', () => {
        //arrange
        render(<Greeting />);

        //act

        //assert
        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        //arrange
        render(<Greeting />);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const outputElement = screen.getByText('Changed', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('doest not renders "good to see you" if the button was clicked', () => {
        //arrange
        render(<Greeting />);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    });
});

