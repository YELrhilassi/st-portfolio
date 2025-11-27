import { Send } from "lucide-react";

type TForm = {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
};
type TField = {
  children: React.ReactNode;
  label: string;
  error?: string;
  icon?: React.JSX.ElementType;
};
// =====
type TInput = TTextArea | TBaseInput;
type TTextArea = React.ComponentProps<"textarea"> & {
  type?: "textarea";
  name: string;
};
type TBaseInput = React.ComponentProps<"input"> & {
  type?: React.HTMLInputTypeAttribute;
  name: string;
};
// ======
type TButton = {
  children: React.ReactNode;
};

export function Form({ children, onSubmit }: TForm) {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className="space-y-8 w-full h-full font-sans"
    >
      {children}
    </form>
  );
}

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
