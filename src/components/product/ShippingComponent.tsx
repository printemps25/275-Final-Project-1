import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const ShippingComponent = (): JSX.Element => {
    const [shippingAddress, setShippingAddress] = useState<string>("");

    const handleSaveAddress = () => {
        // Save the shipping address and update any relevant state or perform any necessary actions
    };

    return (
        <div className="mt-4">
            <h2>Shipping Information</h2>
            <Form>
                <Form.Group controlId="shippingAddress">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your shipping address"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSaveAddress}>
                    Save Address
                </Button>
            </Form>
        </div>
    );
};
