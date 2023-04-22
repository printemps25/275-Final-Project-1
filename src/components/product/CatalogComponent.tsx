import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ShippingComponent } from "./ShippingComponent"; // Import the ShippingComponent

interface Product {
    id: number;
    name: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}

export const CatalogComponent = (): JSX.Element => {
    const [cart, setCart] = useState<CartItem[]>([
        { product: { id: 1, name: "Product A" }, quantity: 2 },
        { product: { id: 2, name: "Product B" }, quantity: 1 }
    ]);

    return (
        <Container fluid className="flex-grow-1 ez-bg">
            <Container className="h-100 side-shadow">
                <h1 className="p-4">Your Cart</h1>
                <hr></hr>
                {cart.map((item: CartItem, idx: number) => (
                    <p key={idx}>
                        {item.product.name} - x{item.quantity}
                    </p>
                ))}
                <ShippingComponent /> {/* Add the ShippingComponent here */}
            </Container>
        </Container>
    );
};
