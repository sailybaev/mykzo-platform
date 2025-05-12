import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-sky-600 mb-2">Welcome to MyKzo</h1>
        <p className="text-lg text-muted-foreground">Smart city service platform for residents of Kyzylorda</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Home</CardTitle>
            <CardDescription>Manage your utilities and services</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end">
            <Button asChild variant="outline">
              <Link href="/my-home">
                Go to My Home <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Direct Line</CardTitle>
            <CardDescription>Report city issues and track their status</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end">
            <Button asChild variant="outline">
              <Link href="/direct-line">
                Report an Issue <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Polls</CardTitle>
            <CardDescription>Vote on city improvements anonymously</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end">
            <Button asChild variant="outline">
              <Link href="/polls">
                View Polls <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>KZO News</CardTitle>
            <CardDescription>Stay updated with local news</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end">
            <Button asChild variant="outline">
              <Link href="/news">
                Read News <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>KZO Time</CardTitle>
            <CardDescription>Discover local events and activities</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end">
            <Button asChild variant="outline">
              <Link href="/events">
                Browse Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Volunteer Hub</CardTitle>
            <CardDescription>Contribute to your community</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-end">
            <Button asChild variant="outline">
              <Link href="/volunteers">
                Volunteer Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
