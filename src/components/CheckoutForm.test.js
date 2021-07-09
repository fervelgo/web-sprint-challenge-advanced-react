import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);

    const headerElement = screen.queryByText(/Checkout Form/i);

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toBeTruthy();
    expect(headerElement).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameField = screen.getByLabelText(/first name:*/i);
    const lastNameField = screen.getByLabelText(/last name:*/i);
    const cityField = screen.getByLabelText(/city:*/i);
    const stateField = screen.getByLabelText(/state:*/i);
    const zipField = screen.getByLabelText(/zip:*/i);

    userEvent.type(firstNameField, "Fernando");
    userEvent.type(lastNameField, "Velasco");
    userEvent.type(cityField, "CDMX");
    userEvent.type(stateField, "DF");
    userEvent.type(zipField, "11000");
    
    const button = screen.getByRole('button');
    userEvent.click(button);

    // await waitFor(() => {

        const successDisplay = screen.queryByTestId("successMessage");
        
        expect(successDisplay).toHaveTextContent("Fernando");
        expect(successDisplay).toHaveTextContent("Velasco");
        expect(successDisplay).toHaveTextContent("CDMX");
        expect(successDisplay).toHaveTextContent("DF");
        expect(successDisplay).toHaveTextContent("11000");
    // })

    });
    