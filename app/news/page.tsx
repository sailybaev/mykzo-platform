import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Search,
  School,
  FlagIcon as Government,
  Users,
  Calendar,
  Clock,
} from "lucide-react"

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-sky-600">KZO News</h1>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search news..." className="pl-8 w-[250px]" />
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="municipality">Municipality</TabsTrigger>
          <TabsTrigger value="schools">Schools</TabsTrigger>
          <TabsTrigger value="ngo">NGOs</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <NewsCard
                title="City Announces New Public Transportation Routes"
                description="The municipality has announced new bus routes connecting the suburbs to the city center, starting next month."
                image="/placeholder.svg?height=200&width=600"
                date="May 13, 2025"
                time="10:30"
                source="Municipality"
                sourceIcon={<Government className="h-4 w-4" />}
                author={{
                  name: "Aizhan Nurpeisova",
                  role: "City Press Secretary",
                  avatar: "/placeholder.svg?height=40&width=40",
                }}
                likes={45}
                comments={12}
              />

              <NewsCard
                title="School #5 Wins Regional Olympiad"
                description="Students from School #5 have won first place in the regional mathematics and physics olympiad, qualifying for the national competition."
                image="/placeholder.svg?height=200&width=600"
                date="May 12, 2025"
                time="14:15"
                source="Schools"
                sourceIcon={<School className="h-4 w-4" />}
                author={{
                  name: "Marat Tulegenov",
                  role: "School Principal",
                  avatar: "/placeholder.svg?height=40&width=40",
                }}
                likes={78}
                comments={23}
              />

              <NewsCard
                title="Eco-Volunteers Clean Up Riverside Park"
                description="Over 100 volunteers participated in the weekend cleanup event at Riverside Park, collecting over 200 kg of trash."
                image="/placeholder.svg?height=200&width=600"
                date="May 11, 2025"
                time="09:45"
                source="NGO"
                sourceIcon={<Users className="h-4 w-4" />}
                author={{
                  name: "Dinara Smagulova",
                  role: "EcoKZO Director",
                  avatar: "/placeholder.svg?height=40&width=40",
                }}
                likes={124}
                comments={34}
              />
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trending News</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <TrendingNewsItem
                    title="New Sports Complex Construction Begins"
                    source="Municipality"
                    sourceIcon={<Government className="h-3 w-3" />}
                    time="2 hours ago"
                    likes={156}
                  />

                  <TrendingNewsItem
                    title="Local Artist Exhibition Opens at Cultural Center"
                    source="NGO"
                    sourceIcon={<Users className="h-3 w-3" />}
                    time="5 hours ago"
                    likes={98}
                  />

                  <TrendingNewsItem
                    title="School #3 Hosts International Exchange Students"
                    source="Schools"
                    sourceIcon={<School className="h-3 w-3" />}
                    time="8 hours ago"
                    likes={87}
                  />

                  <TrendingNewsItem
                    title="City Budget Public Hearing Scheduled for Next Week"
                    source="Municipality"
                    sourceIcon={<Government className="h-3 w-3" />}
                    time="12 hours ago"
                    likes={65}
                  />

                  <TrendingNewsItem
                    title="Local Tech Startup Wins National Innovation Award"
                    source="NGO"
                    sourceIcon={<Users className="h-3 w-3" />}
                    time="1 day ago"
                    likes={112}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <UpcomingEventItem
                    title="City Council Meeting"
                    date="May 15, 2025"
                    time="14:00"
                    location="City Hall"
                  />

                  <UpcomingEventItem
                    title="School Music Festival"
                    date="May 18, 2025"
                    time="16:00"
                    location="Central Park"
                  />

                  <UpcomingEventItem
                    title="Farmers Market"
                    date="May 20, 2025"
                    time="09:00 - 15:00"
                    location="City Square"
                  />

                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="municipality" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <NewsCard
                title="City Announces New Public Transportation Routes"
                description="The municipality has announced new bus routes connecting the suburbs to the city center, starting next month."
                image="/placeholder.svg?height=200&width=600"
                date="May 13, 2025"
                time="10:30"
                source="Municipality"
                sourceIcon={<Government className="h-4 w-4" />}
                author={{
                  name: "Aizhan Nurpeisova",
                  role: "City Press Secretary",
                  avatar: "/placeholder.svg?height=40&width=40",
                }}
                likes={45}
                comments={12}
              />

              <NewsCard
                title="New Sports Complex Construction Begins"
                description="Construction of the new sports complex in the eastern district has begun, with completion expected by the end of next year."
                image="/placeholder.svg?height=200&width=600"
                date="May 13, 2025"
                time="08:45"
                source="Municipality"
                sourceIcon={<Government className="h-4 w-4" />}
                author={{
                  name: "Bolat Iskakov",
                  role: "City Development Director",
                  avatar: "/placeholder.svg?height=40&width=40",
                }}
                likes={156}
                comments={42}
              />

              <NewsCard
                title="City Budget Public Hearing Scheduled for Next Week"
                description="Residents are invited to attend the public hearing on the city budget for the next fiscal year, scheduled for May 20."
                image="/placeholder.svg?height=200&width=600"
                date="May 12, 2025"
                time="16:20"
                source="Municipality"
                sourceIcon={<Government className="h-4 w-4" />}
                author={{
                  name: "Saule Bekturova",
                  role: "Finance Department",
                  avatar: "/placeholder.svg?height=40&width=40",
                }}
                likes={65}
                comments={28}
              />
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Municipality Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Mayor's Office</p>
                      <p className="text-sm text-muted-foreground">+7 (724) 555-0100</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>UD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Urban Development</p>
                      <p className="text-sm text-muted-foreground">+7 (724) 555-0101</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Public Services</p>
                      <p className="text-sm text-muted-foreground">+7 (724) 555-0102</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View All Contacts
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming City Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <UpcomingEventItem
                    title="City Council Meeting"
                    date="May 15, 2025"
                    time="14:00"
                    location="City Hall"
                  />

                  <UpcomingEventItem
                    title="Public Budget Hearing"
                    date="May 20, 2025"
                    time="15:00"
                    location="City Hall, Room 305"
                  />

                  <UpcomingEventItem
                    title="Transportation Forum"
                    date="May 25, 2025"
                    time="10:00"
                    location="Community Center"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="schools" className="mt-4">
          {/* Similar structure to other tabs, with school-specific news */}
        </TabsContent>

        <TabsContent value="ngo" className="mt-4">
          {/* Similar structure to other tabs, with NGO-specific news */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NewsCard({ title, description, image, date, time, source, sourceIcon, author, likes, comments }) {
  return (
    <Card>
      <CardContent className="p-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover object-center" />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="flex items-center gap-1 bg-sky-50 text-sky-700 border-sky-200">
              {sourceIcon}
              <span>{source}</span>
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
              <span>•</span>
              <Clock className="h-3 w-3" />
              <span>{time}</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar || "/placeholder.svg"} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{author.name}</p>
                <p className="text-xs text-muted-foreground">{author.role}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Read More
            </Button>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2">
                <ThumbsUp className="h-4 w-4" />
                <span>{likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2">
                <MessageSquare className="h-4 w-4" />
                <span>{comments}</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bookmark className="h-4 w-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function TrendingNewsItem({ title, source, sourceIcon, time, likes }) {
  return (
    <div className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
      <div className="w-12 h-12 rounded-md bg-gray-100 flex-shrink-0"></div>
      <div className="flex-1">
        <h4 className="text-sm font-medium">{title}</h4>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Badge variant="outline" className="flex items-center gap-1 h-5 px-1.5 text-xs">
              {sourceIcon}
              <span>{source}</span>
            </Badge>
            <span>•</span>
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <ThumbsUp className="h-3 w-3" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function UpcomingEventItem({ title, date, time, location }) {
  return (
    <div className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
      <div className="w-10 h-10 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
        <Calendar className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-muted-foreground">
          {date} • {time}
        </p>
        <p className="text-xs text-muted-foreground">{location}</p>
      </div>
    </div>
  )
}
