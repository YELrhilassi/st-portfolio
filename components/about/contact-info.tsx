import { Label } from "@/components/ui/label"
import { Facebook, FacebookIcon, InstagramIcon, LinkedinIcon, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  return <div className=" grid grid-cols-2">
    <div className="space-y-3">
      <Label className="text-lg font-medium text-gray-800 capitalize">Contact Info </Label>
      <span className="flex gap-3  text-xl text-gray-500 ">
        <Mail />
        <p>email@test.com</p>
      </span>
      <div className="flex gap-8  mt-2">
        <Link href="#"><LinkedinIcon /> </Link>
        <Link href="#"><InstagramIcon /> </Link>
      </div>
    </div>
    <div className="space-y-3">
      <Label className="text-lg font-medium text-gray-800 capitalize">Based In</Label>
      <span className="flex gap-3 px-4 text-xl text-gray-500 ">
        <p>
          Vacouver,<br />
          British Colombia
        </p>
      </span>
    </div>
  </div>
}
