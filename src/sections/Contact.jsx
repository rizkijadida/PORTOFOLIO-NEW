import emailjs from "@emailjs/browser";
import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("form submitted: ", formData);
      await emailjs.send(
        "service_6ambeth",
        "template_gkyfqj9",
        {
          from_name: formData.name,
          to_name: "Rizki",
          from_email: formData.email,
          to_email: "rizkijadida@gmail.com",
          message: formData.message,
        },
        "cLf39uUVttM7n0BYT",
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "your message has been sent");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "something went wrong");
    }
  };
  const [color, setColor] = useState("#ffffff")
  return (
    <section className="c-space section-spacing relative flex items-center" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="bg-primary mx-auto flex max-w-md flex-col items-center justify-center rounded-2xl border border-white/10 p-5">
        <div className="mb-10 flex w-full flex-col items-start gap-5">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform or bring a unique project to life, I'm here to help
          </p>
          <p></p>
        </div>
        <form action="" className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="field-label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="John Doe"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="field-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="johndoe@gmail.com"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="field-label" htmlFor="name">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              required
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="from-lavender to-royal hover-animation w-full cursor-pointer rounded-md bg-radial px-1 py-3 text-center text-lg"
          >
            {!isLoading ? "Send" : "Sending"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
