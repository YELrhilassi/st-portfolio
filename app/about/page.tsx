"use client";
import GridWrapper from "@/components/layout/grid-wrapper";
import AboutBio from "./about-bio";
import { User, Mail, Send, Pencil } from "lucide-react";

export default function About() {
  const isSubmitting = false;
  return (
    <GridWrapper className="grid-rows-[repeat(2,auto)]">
      <div className="col-span-full flex p-8 py-12 mt-10 min-h-[550]">
        <AboutBio />
        <div className="flex-1 ml-14 p-8">
          <Form>
            <Form.Field label="name" icon={User}>
              <Form.Input name="name" placeholder="David Jhon" required />
            </Form.Field>

            <Form.Field label="email" icon={Mail}>
              <Form.Input
                name="email"
                type="email"
                placeholder="inot@mail.com"
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
        </div>
      </div>
      <div className="col-span-full">bottom grid</div>
    </GridWrapper>
  );
}

type TForm = {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
};

function Form({ children, onSubmit }: TForm) {
  return (
    <form onSubmit={onSubmit} className="space-y-8 w-full h-full font-sans">
      {children}
    </form>
  );
}

type TField = {
  children: React.ReactNode;
  label: string;
  error?: string;
  icon?: React.JSX.ElementType;
};

Form.Field = ({ children, label, error, icon: Icon }: TField) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={label.toLowerCase()} className="font-bold uppercase">
        {label}
      </label>
      <div className="flex items-center pb-3 border-b">
        {Icon ? (
          <Icon className="self-start p-0 h-5 w-5 text-gray-500" />
        ) : null}
        {children}
        {error ? <Form.Error>{error}</Form.Error> : null}
      </div>
    </div>
  );
};

Form.Error = ({ children }: { children: React.ReactNode }) => {
  return <span className="">{children}</span>;
};

type TInput = TTextArea | TBaseInput;
type TTextArea = React.ComponentProps<"textarea"> & {
  type?: "textarea";
  name: string;
};
type TBaseInput = React.ComponentProps<"input"> & {
  type?: React.HTMLInputTypeAttribute;
  name: string;
};

Form.Input = ({ type = "text", name, ...rest }: TInput) => {
  const handleInput: any = (e: any) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  if (type === "textarea") {
    const _rest = rest as React.ComponentProps<"textarea">;
    return (
      <textarea
        className="w-full resize-none pl-6 focus:outline-none overflow-hidden"
        onInput={handleInput}
        rows={1}
        {..._rest}
        name={name.toLowerCase()}
      />
    );
  }

  const _rest = rest as React.ComponentProps<"input">;
  return (
    <input
      className=" w-full ml-6 focus:outline-none"
      {...{ type }}
      {..._rest}
      name={name.toLowerCase()}
    />
  );
};

type TButton = {
  children: React.ReactNode;
};
Form.Button = ({ children }: TButton) => {
  return (
    <button
      type="submit"
      className=" group flex justify-center gap-3 px-4 pt-1 text-lg font-bold tracking-wider uppercase border hover:cursor-pointer"
    >
      {children}
      <Send className="translate-y-1 h-4 w-4 p-0 transition-transform group-hover:translate-x-1" />
    </button>
  );
};
