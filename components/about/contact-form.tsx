import { Mail, User } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TFormField } from "@/types/about";

export default function ContactForm() {
  return (
      <div className="w-full">
        <div className="space-y-8">
          <FormField label="name" icon={User} placeholder="David Jhon"  />
          <FormField
            type="email"
            label="email"
            icon={Mail}
            placeholder="info@yourmail.com"
          />
          <FormField label="Company" icon={Mail} placeholder="Company name" />
        </div>
      </div>
  );
}

const FormField = ({
  label,
  icon: Icon,
  type = "text",
  placeholder,
}: TFormField) => (
  <div className="space-y-3">
    <Label
      htmlFor={label.toLowerCase()}
      className="text-lg font-medium text-gray-800 capitalize"
    >
      {label}
    </Label>
    <div className="relative flex items-center">
      {Icon ? (
        <Icon className="absolute ml-4 -translate-y-1 h-5 w-5 text-gray-400" />
      ) : null}
      <Input
        id={label.toLowerCase()}
        type={type}
        placeholder={placeholder}
        className="px-12 py-8 border-0 border-b-2 border-primary
          rounded-none bg-transparent focus:ring-0 focus-visible:ring-0
          placeholder:text-gray-400 placeholder:text-lg"
      />
    </div>
  </div>
);
