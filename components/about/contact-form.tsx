import { Mail, User } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TFormField } from "@/types/about";
import { Button } from "../ui/button";

export default function ContactForm() {
  return (
    <div className="flex-1 w-full pr-12">
      <form>
        <div className="space-y-8 w-full">
          <FormField label="full name" icon={User} placeholder="David Jhon" />
          <FormField
            type="email"
            label="email"
            icon={Mail}
            placeholder="info@yourmail.com"
          />
          <FormField label="Company" icon={Mail} placeholder="Company name" />
          <FormField label="Message" placeholder="" />
          <div className="flex">
            <Button className="pt-7 pb-6 m-auto w-1/2 text-2xl font-extrabold rounded-full border-0 cursor-pointer ">
              Contact Us
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

const FormField = ({
  label,
  icon: Icon,
  type = "text",
  placeholder,
}: TFormField) => (
  <div className="">
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
