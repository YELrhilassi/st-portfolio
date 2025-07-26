import { Mail, User } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TFormField } from "@/types/about";



export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center" >
      <div className="w-full max-w-md space-y-12">
        <div className="space-y-8">
          <FormField label="name" icon={User} placeholder="David Jhon" />
          <FormField type="email" label="email" icon={Mail} placeholder="info@yourmail.com" />
        </div>

        <div className="pt-8">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            LET'S
            <br />
            CONNECT
          </h1>
        </div>
      </div>
    </div>
  )
}

const FormField = ({
  label,
  icon: Icon,
  type = "text",
  placeholder,
}: TFormField) => (
  <div className="space-y-3">
    <Label htmlFor={label.toLowerCase()} className="text-lg font-medium text-gray-800 capitalize">
      {label}
    </Label>
    <div className="relative">
      {Icon ? <Icon className="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" /> : null}
      <Input
        id={label.toLowerCase()}
        type={type}
        placeholder={placeholder}
        className="pl-8 border-0 border-b-2 border-gray-400 
          rounded-none bg-transparent focus:border-gray-600 focus:ring-0 
          text-gray-600 placeholder:text-gray-400"
      />
    </div>
  </div>
);
