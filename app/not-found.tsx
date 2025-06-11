import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { fetchProjects } from "@/lib/data/fetchProjects"




export default function ProjectNotFound() {
  return (
    <div className="container flex-1 flex flex-col justify-center mx-auto space-y-4" >
        <CardHeader className="text-center space-y-3">
          <CardTitle className="font-instrument-serif text-4xl">Page Not Found</CardTitle>
          <CardDescription>
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home page
            </Link>
          </Button>
        </CardContent>
    </div>
  )
}
