import { Textarea } from "@/components/ui/textarea";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { sendEmail } from "@/helpers/function";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [flashMessage, setFlashStatus] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    sendEmail("service_qz0fzc5", "template_sxx0n7q", "2Tn4IFB4WzepDG_JW", {
      from_name: name,
      from_email: email,
      message: message,
    })
      .then(() => {
        setFlashStatus("Email sent successfully!");
        setStatus(true);
        setLoading(false);
      })
      .catch((error) => {
        setFlashStatus(error.text);
        setStatus(false);
        setLoading(false);
      });
    reset();
  };

  return (
    <>
      <div
        className="w-full md:max-w-3xl lg:max-w-6xl mx-auto px-5 text-white my-40 lg:my-40"
        id="contact"
        data-aos="fade-up"
      >
        <div className="text-slate-200 font-semibold text-center text-2xl mb-10">
          Contact
        </div>
        <div className="max-w-3xl m-auto">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <Textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here."
              required
            />
            <div className="flex justify-between gap-2 items-center">
              <p className={`${status ? "text-cyan-400" : "text-red-500"}`}>
                {flashMessage}
              </p>
              <div>
                <Button
                  className={"mt-5 bg-cyan-600 rounded hover:bg-cyan-500 me-2"}
                  size={"sm"}
                  type="submit"
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
                <Button
                  className={"mt-5 bg-red-600 rounded hover:bg-red-500"}
                  size={"sm"}
                  onClick={reset}
                  type="button"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
