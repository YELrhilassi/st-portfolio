"use client";
import { Form } from "@/components/ui";
import { Mail, Pencil, User } from "lucide-react";
import { useState } from "react";

export default function AboutForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setFeedback(null);

    const name = `${formData.get("name") || ""}`.trim();
    const email = `${formData.get("email") || ""}`.trim();
    const message = `${formData.get("message") || ""}`.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and a message.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Unable to send message right now.");
      }

      setStatus("success");
      setFeedback("Thanks for reaching out! I'll be in touch soon.");
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      setStatus("error");
      setFeedback(message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field label="name" icon={User}>
        <Form.Input name="name" placeholder="David Jhon" required />
      </Form.Field>

      <Form.Field label="email" icon={Mail}>
        <Form.Input
          name="email"
          type="email"
          placeholder="example@email.com"
          required
        />
      </Form.Field>

      <Form.Field label="message" icon={Pencil}>
        <Form.Input
          name="message"
          type="textarea"
          placeholder="Message"
          required
        />
      </Form.Field>

      <div className="flex items-center justify-between pt-4">
        <div
          aria-live="polite"
          className="text-sm text-gray-700 h-6"
        >
          {feedback}
        </div>
        <Form.Button disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send"}
        </Form.Button>
      </div>
    </Form>
  );
}
