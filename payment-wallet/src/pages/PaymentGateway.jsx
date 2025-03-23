// src/pages/PaymentGateway.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";

const PaymentGateway = () => {
  const handlePayment = () => {
    // Simulate payment processing
    alert("Payment processed successfully! (Simulation)");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-center fade-in">
      <Container>
        <h2>Payment Gateway</h2>
        <p>This simulates a real payment process.</p>
        <Button variant="success" onClick={handlePayment}>
          Pay Now
        </Button>
      </Container>
    </div>
  );
};

export default PaymentGateway;
