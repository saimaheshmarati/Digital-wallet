// src/pages/QRCodePayment.jsx
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react"; // <-- Named import

const QRCodePayment = () => {
  const [paymentInfo, setPaymentInfo] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleGenerateQR = (e) => {
    e.preventDefault();
    setQrValue(paymentInfo);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2>QR Code Payment</h2>
      <Form onSubmit={handleGenerateQR} className="w-50 mt-3">
        <Form.Group controlId="paymentInfo">
          <Form.Label>Enter Payment Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter amount or reference"
            value={paymentInfo}
            onChange={(e) => setPaymentInfo(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Generate QR Code
        </Button>
      </Form>

      {qrValue && (
        <div className="mt-4 text-center">
          <QRCodeCanvas value={qrValue} size={200} />
          <p className="mt-2">Scan to Pay: {qrValue}</p>
        </div>
      )}
    </Container>
  );
};

export default QRCodePayment;

