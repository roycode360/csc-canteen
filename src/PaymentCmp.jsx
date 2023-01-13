import React from "react";
import { format } from "currency-formatter";

import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import "./paymentCmp.css";

const PaymentCmp = ({ reqObj, disabled }) => {
  console.log(reqObj.amount);
  const config = {
    public_key: "FLWPUBK_TEST-d79b8c122907e33b5bace407712a4eeb-X",
    tx_ref: Date.now(),
    amount: reqObj.amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${reqObj.email}`,
      phonenumber: `${reqObj.phone}`,
      name: `${reqObj.name}`,
    },
    customizations: {
      title: `${reqObj.title}`,
      description: `${reqObj.quantity} ${reqObj.title} - ${reqObj.type}`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    disabled: !disabled,
    callback: (response) => {
      if (response.status === "successful") {
        // console.log(response);
        // closePaymentModal(); // this will close the modal programmatically
      }
    },
    onClose: () => {},
  };

  return (
    <div className="payment-cmp">
      <FlutterWaveButton className="form-pay-btn" {...fwConfig}>
        <i className="fas fa-lock"></i>
        <span className="text">Pay ₦{format(reqObj.amount, "NG")}</span>
      </FlutterWaveButton>
    </div>
  );
};

export default PaymentCmp;
