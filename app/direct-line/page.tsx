import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, MapPin, Send, Clock, CheckCircle2, AlertCircle, ThumbsUp, Search } from "lucide-react"

export default function DirectLinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-sky-600">Direct Line</h1>
        <Button variant="outline" className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>View Map</span>
        </Button>
      </div>

      <Tabs defaultValue="submit">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="submit">Submit Issue</TabsTrigger>
          <TabsTrigger value="my-issues">My Issues</TabsTrigger>
          <TabsTrigger value="city-issues">City Issues</TabsTrigger>
        </TabsList>

        <TabsContent value="submit" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Report a City Issue</CardTitle>
              <CardDescription>Submit details about an issue in your area</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Issue Title</Label>
                  <Input id="title" placeholder="Brief description of the issue" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="roads">Roads & Sidewalks</SelectItem>
                      <SelectItem value="lighting">Street Lighting</SelectItem>
                      <SelectItem value="garbage">Garbage & Cleaning</SelectItem>
                      <SelectItem value="water">Water Supply</SelectItem>
                      <SelectItem value="parks">Parks & Public Spaces</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Provide details about the issue" rows={4} />
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Address or location description" className="flex-1" />
                    <Button variant="outline" type="button" className="flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                      <span className="sr-only">Use current location</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Add Photos</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square rounded-md border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                        <Camera className="h-5 w-5" />
                        <span className="sr-only">Add photo</span>
                      </Button>
                    </div>
                    <div className="aspect-square rounded-md border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                        <Camera className="h-5 w-5" />
                        <span className="sr-only">Add photo</span>
                      </Button>
                    </div>
                    <div className="aspect-square rounded-md border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                        <Camera className="h-5 w-5" />
                        <span className="sr-only">Add photo</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Issue
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-issues" className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">My Reported Issues</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search issues..." className="pl-8 w-[250px]" />
            </div>
          </div>

          <div className="space-y-4">
            <IssueCard
              title="Broken Street Light"
              category="Street Lighting"
              date="May 12, 2025"
              status="in-progress"
              description="Street light at the corner of Abay and Auezov streets is not working for the past week."
              location="Abay/Auezov intersection"
              upvotes={12}
            />

            <IssueCard
              title="Pothole on Main Road"
              category="Roads & Sidewalks"
              date="May 8, 2025"
              status="in-review"
              description="Large pothole on Tauelsizdik Avenue causing traffic problems and potential damage to vehicles."
              location="Tauelsizdik Avenue, near Central Market"
              upvotes={24}
            />

            <IssueCard
              title="Overflowing Garbage Bin"
              category="Garbage & Cleaning"
              date="May 1, 2025"
              status="solved"
              description="Garbage bin near the playground is overflowing and hasn't been emptied for days."
              location="Children's playground, Microdistrict 6"
              upvotes={8}
            />
          </div>
        </TabsContent>

        <TabsContent value="city-issues" className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">City-wide Issues</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search issues..." className="pl-8 w-[250px]" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Issues</SelectItem>
                  <SelectItem value="in-review">In Review</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="solved">Solved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <IssueCard
              title="Park Benches Need Repair"
              category="Parks & Public Spaces"
              date="May 14, 2025"
              status="in-review"
              description="Several benches in Central Park are broken and need repair."
              location="Central Park, near the fountain"
              upvotes={18}
            />

            <IssueCard
              title="Water Supply Interruption"
              category="Water Supply"
              date="May 13, 2025"
              status="in-progress"
              description="No water supply in Microdistrict 3 since yesterday morning."
              location="Entire Microdistrict 3"
              upvotes={56}
            />

            <IssueCard
              title="Damaged Playground Equipment"
              category="Parks & Public Spaces"
              date="May 10, 2025"
              status="in-progress"
              description="The slide in the children's playground is damaged and unsafe for use."
              location="Children's playground, Microdistrict 8"
              upvotes={32}
            />

            <IssueCard
              title="Fallen Tree Blocking Sidewalk"
              category="Roads & Sidewalks"
              date="May 7, 2025"
              status="solved"
              description="A tree has fallen and is blocking the sidewalk after yesterday's storm."
              location="Kazybek Bi Street, near School #5"
              upvotes={15}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function IssueCard({ title, category, date, status, description, location, upvotes }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium">{title}</h3>
              <StatusBadge status={status} />
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{category}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
            <p className="text-sm mb-2">{description}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
          </div>
          <div className="flex sm:flex-col items-center gap-2 sm:gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{upvotes}</span>
            </Button>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function StatusBadge({ status }) {
  if (status === "in-review") {
    return (
      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
        <Clock className="h-3 w-3 mr-1" />
        In Review
      </Badge>
    )
  } else if (status === "in-progress") {
    return (
      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
        <AlertCircle className="h-3 w-3 mr-1" />
        In Progress
      </Badge>
    )
  } else if (status === "solved") {
    return (
      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
        <CheckCircle2 className="h-3 w-3 mr-1" />
        Solved
      </Badge>
    )
  }
  return null
}
