import { useState, useContext } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY);
import { Elements } from "@stripe/react-stripe-js";
import { AppContext } from "../../context/StateContext";
import visac from "../../../src/assets/Visa.png";
import massterc from "../../../src/assets/MasterCard.png";
import unionnc from "../../../src/assets/UnionPay.png";
import { toast } from "react-toastify";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, clearCart } = useContext(AppContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  let total = Array.from(cartItems, (item) => item.amount);
  const amount = Number(
    total.length > 1
      ? total.reduce((acc, price) => {
          return acc + price;
        })
      : total
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (processing) return; // Already submitting

    setProcessing(true);
    setError("");

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}`,
        {
          items: [{ amount }],
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (!data.clientSecret) {
        throw new Error("No clientSecret received from backend");
      }

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: e.target.elements["cardholderName"].value,
          },
        },
      });

      if (result.error) {
        setError(`Payment failed: ${result.error.message}`);
      } else if (result.paymentIntent.status === "succeeded") {
        toast.success("Payment Succeeded! 🎊", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          theme: "colored",
        });
        navigate("/properties");
        clearCart();
      }
    } catch (err) {
      toast.info(
        "Check your Internet connection. If error persists try logging out and sign-in again"
      );
      console.error("Checkout error:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Something went wrong. Try again."
      );
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: `${window.innerWidth <= 390 ? "10%" : "21%"}`,
          position: "absolute",
          backgroundColor: "#3d9970",
          top: "0",
          left: "0",
        }}
      ></div>
      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          marginTop: `${window.innerWidth <= 390 ? "25%" : "30%"}`,
          padding: "1rem",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Payment Section */}
          <div className="payme rounded-3 d-flex flex-column">
            <div className="payme-both d-flex flex-column">
              <div className="payme-tit d-flex flex-column gap-2">
                <h3
                  className="mb-1 fs-2 fw-semibold"
                  style={{ color: "#3d9970" }}
                >
                  Payment
                </h3>
                <p className="mb-0">
                  All transactions are secure and encrypted.
                </p>
              </div>
              <div className="credit-ca d-flex flex-column">
                <div className="credit-inp d-flex flex-column gap-3">
                  {/* Credit card selection and logos */}
                  <div className="credit-aldiv">
                    <div className="credit-al d-flex align-items-center justify-content-between">
                      <div className="rad-cre d-flex align-items-center gap-2">
                        <input type="radio" className="me-1" defaultChecked />
                        <label>Credit card</label>
                      </div>
                      <div className="card-cre d-flex align-items-center">
                        <img src={visac} alt="" />
                        <img src={massterc} alt="" />
                        <img src={unionnc} alt="" />
                      </div>
                    </div>
                    <hr className="m-0" />
                  </div>
                  {/* Stripe Elements for card number */}
                  <CardNumberElement
                    className="car-nom px-3 py-2"
                    options={{ placeholder: "Card number" }}
                  />
                  {/* Input for cardholder's name */}
                  <input
                    type="text"
                    name="cardholderName"
                    placeholder="Name on card"
                    className="car-nom px-3 py-2"
                    required
                  />
                  <div className="abou-car d-flex align-items-center flex-column flex-sm-row gap-2 mb-sm-2">
                    {/* Stripe Element for card expiry date */}
                    <CardExpiryElement
                      className="car-nom px-3 py-2 w-100"
                      options={{ placeholder: "Expiration date (MM/YY)" }}
                    />
                    {/* Stripe Element for card CVC */}
                    <CardCvcElement
                      className="car-nom px-3 py-2 w-100"
                      options={{ placeholder: "Security code" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Submit button to place the order */}
            <button
              className="rounded-3 d-flex justify-content-between"
              type="submit"
              disabled={processing || !stripe}
            >
              <strong role="status">
                {" "}
                {processing ? "Processing..." : "Pay Now."}
              </strong>
              <div
                class="spinner-border ms-auto"
                style={{ display: `${processing ? "block" : "none"}` }}
                aria-hidden="true"
              ></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const check = () => {
  return (
    <div className="payment-app">
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
};

export default check;
