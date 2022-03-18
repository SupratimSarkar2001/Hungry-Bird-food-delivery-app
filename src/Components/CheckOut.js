import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
function CheckOut() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_auru5j8",
        "template_d0tf6l2",
        formRef.current,
        "user_I2wQdZx9OjCuZKsnWi3MG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="checkoutCompo">
      <div className="formCheckout">
        <form ref={formRef} onSubmit={handleSubmit}>
          <h2>Please Enter Your Deatils</h2>
          <input type="text" placeholder="Name" name="from_name" />
          <input type="text" placeholder="Feedback." name="user_phone" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea rows="5" placeholder="Address & PhoneNo." name="message" />
          <button>Submit</button>
          {done && (
            <div className="greet">
              "Order will be delivered with in 10 min."
            </div>
          )}
        </form>
      </div>
      <div className="imageCheckout">
        <img
          src="https://img.freepik.com/free-vector/burger-with-french-fries-icon-illustration-fast-food-icon-concept-isolated-flat-cartoon-style_138676-1342.jpg"
          alt=""
          className="CheckoutImg"
        />
      </div>
    </div>
  );
}

export default CheckOut;
