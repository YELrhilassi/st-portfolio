"use client";
import { Form } from "@/components/ui";
import { User, Mail, Pencil } from "lucide-react";
import { useState } from "react";

export default function AboutForm() {
  const [isSubmitting] = useState(false);
  return (
    <Form>
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

      <div className="flex justify-end pt-4">
        <Form.Button>{isSubmitting ? "Sending..." : "Send"}</Form.Button>
      </div>
    </Form>
  );
}
