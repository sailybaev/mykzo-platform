import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  MapPin,
  CalendarIcon,
  Clock,
  Users,
  Tag,
  Music,
  Utensils,
  BookOpen,
  Tent,
  ShoppingBag,
} from "lucide-react"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-sky-600">KZO Time</h1>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search events..." className="pl-8 w-[250px]" />
          </div>
          <Button variant="outline" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="upcoming">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="weekend">Weekend</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-4">
              <div className="space-y-6">
                <EventCard
                  title="Kyzylorda Music Festival"
                  description="Annual music festival featuring local and national artists, with food stalls and activities for all ages."
                  image="/placeholder.svg?height=200&width=600"
                  date="May 20-22, 2025"
                  time="16:00 - 22:00"
                  location="Central Park"
                  category="Music"
                  categoryIcon={<Music className="h-4 w-4" />}
                  attendees={1240}
                />

                <EventCard
                  title="Farmers Market"
                  description="Weekly market featuring fresh local produce, handmade crafts, and traditional foods from local farmers and artisans."
                  image="/placeholder.svg?height=200&width=600"
                  date="May 18, 2025"
                  time="09:00 - 15:00"
                  location="City Square"
                  category="Market"
                  categoryIcon={<ShoppingBag className="h-4 w-4" />}
                  attendees={450}
                />

                <EventCard
                  title="Cultural Heritage Exhibition"
                  description="Exhibition showcasing the rich cultural heritage of Kyzylorda region, with artifacts, photographs, and interactive displays."
                  image="/placeholder.svg?height=200&width=600"
                  date="May 25-30, 2025"
                  time="10:00 - 18:00"
                  location="Cultural Center"
                  category="Exhibition"
                  categoryIcon={<BookOpen className="h-4 w-4" />}
                  attendees={780}
                />

                <EventCard
                  title="Food Festival"
                  description="Celebration of local and international cuisine, with cooking demonstrations, tastings, and competitions."
                  image="/placeholder.svg?height=200&width=600"
                  date="June 1-2, 2025"
                  time="12:00 - 20:00"
                  location="Riverside Park"
                  category="Food"
                  categoryIcon={<Utensils className="h-4 w-4" />}
                  attendees={920}
                />

                <EventCard
                  title="Outdoor Movie Night"
                  description="Free outdoor screening of family-friendly movies under the stars. Bring your own blankets and chairs."
                  image="/placeholder.svg?height=200&width=600"
                  date="June 5, 2025"
                  time="20:00 - 23:00"
                  location="Central Park"
                  category="Entertainment"
                  categoryIcon={<Tent className="h-4 w-4" />}
                  attendees={350}
                />
              </div>
            </TabsContent>

            <TabsContent value="today" className="mt-4">
              <div className="space-y-6">
                <EventCard
                  title="Book Club Meeting"
                  description="Monthly meeting of the Kyzylorda Book Club. This month's book: 'The Silent Steppe' by Mukhamet Shayakhmetov."
                  image="/placeholder.svg?height=200&width=600"
                  date="Today"
                  time="18:00 - 20:00"
                  location="City Library"
                  category="Literature"
                  categoryIcon={<BookOpen className="h-4 w-4" />}
                  attendees={35}
                />

                <EventCard
                  title="Tech Meetup"
                  description="Networking event for tech professionals and enthusiasts. Topic: 'Smart City Technologies'."
                  image="/placeholder.svg?height=200&width=600"
                  date="Today"
                  time="19:00 - 21:00"
                  location="Innovation Hub"
                  category="Technology"
                  categoryIcon={<Tag className="h-4 w-4" />}
                  attendees={85}
                />
              </div>
            </TabsContent>

            <TabsContent value="weekend" className="mt-4">
              <div className="space-y-6">
                <EventCard
                  title="Farmers Market"
                  description="Weekly market featuring fresh local produce, handmade crafts, and traditional foods from local farmers and artisans."
                  image="/placeholder.svg?height=200&width=600"
                  date="May 18, 2025"
                  time="09:00 - 15:00"
                  location="City Square"
                  category="Market"
                  categoryIcon={<ShoppingBag className="h-4 w-4" />}
                  attendees={450}
                />

                <EventCard
                  title="Weekend Yoga in the Park"
                  description="Free yoga session for all levels. Bring your own mat and water."
                  image="/placeholder.svg?height=200&width=600"
                  date="May 19, 2025"
                  time="08:00 - 09:30"
                  location="Central Park"
                  category="Fitness"
                  categoryIcon={<Users className="h-4 w-4" />}
                  attendees={120}
                />

                <EventCard
                  title="Children's Art Workshop"
                  description="Creative workshop for children ages 6-12. All materials provided."
                  image="/placeholder.svg?height=200&width=600"
                  date="May 19, 2025"
                  time="14:00 - 16:00"
                  location="Cultural Center"
                  category="Workshop"
                  categoryIcon={<Tag className="h-4 w-4" />}
                  attendees={45}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Calendar</CardTitle>
              <CardDescription>Browse events by date</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={new Date()} className="rounded-md border" />
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Cultural events</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Markets</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Entertainment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>Workshops</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start">
                  <Music className="mr-2 h-4 w-4" />
                  Music
                </Button>
                <Button variant="outline" className="justify-start">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Markets
                </Button>
                <Button variant="outline" className="justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Culture
                </Button>
                <Button variant="outline" className="justify-start">
                  <Utensils className="mr-2 h-4 w-4" />
                  Food
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Sports
                </Button>
                <Button variant="outline" className="justify-start">
                  <Tag className="mr-2 h-4 w-4" />
                  Workshops
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Venues</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-gray-100 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Central Park</p>
                  <p className="text-sm text-muted-foreground">15 upcoming events</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-gray-100 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Cultural Center</p>
                  <p className="text-sm text-muted-foreground">8 upcoming events</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-gray-100 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">City Square</p>
                  <p className="text-sm text-muted-foreground">6 upcoming events</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-gray-100 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Riverside Park</p>
                  <p className="text-sm text-muted-foreground">4 upcoming events</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function EventCard({ title, description, image, date, time, location, category, categoryIcon, attendees }) {
  return (
    <Card>
      <CardContent className="p-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover object-center" />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="flex items-center gap-1 bg-sky-50 text-sky-700 border-sky-200">
              {categoryIcon}
              <span>{category}</span>
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{attendees} attending</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{time}</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm">
              Add to Calendar
            </Button>
            <Button>Register</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
