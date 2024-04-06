import React, { useRef } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Form = ({ isColTwo }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5retzpw', 'template_aeenbo6', form.current, 'zLe_qrOQ6dgWyo3wb')
      .then((result) => {
        console.log(result.text);
        // Show success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your message has been sent successfully!',
        });
      })
      .catch((error) => {
        console.log(error.text);
        // Show error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred. Please try again later.',
        });
      });
  };

  return (
    <div className="replay__box cmn__bg">
      <h3>Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <form ref={form} onSubmit={sendEmail} className="row g-4">
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="col-lg-12">
          <textarea
            name="message"
            rows="5"
            placeholder="Write Comments"
          ></textarea>
        </div>
        <button type="submit" className="d-flex fw-500 cmn--btn align-items-center gap-2">
          <span className="get__text">Submit Comment</span>
          <span>
            <i className=" fz-20">
              {" "}
              <ArrowRight />{" "}
            </i>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
