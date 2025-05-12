import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Camera,
  Leaf,
  Paintbrush,
  BookOpen,
  Baby,
  Utensils,
} from "lucide-react"

export default function VolunteersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-sky-600">Volunteer Hub</h1>
        <Button className="flex items-center gap-1">
          <Heart className="h-4 w-4" />
          <span>Become a Volunteer</span>
        </Button>
      </div>

      <Tabs defaultValue="opportunities">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="my-activities">My Activities</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="opportunities" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VolunteerCard
              title="Park Cleanup Day"
              description="Help clean up Central Park and plant new trees. Equipment and refreshments provided."
              image="/placeholder.svg?height=200&width=400"
              date="May 20, 2025"
              time="09:00 - 13:00"
              location="Central Park"
              category="Environment"
              categoryIcon={<Leaf className="h-4 w-4" />}
              hours={4}
              spots={20}
              spotsLeft={8}
            />

            <VolunteerCard
              title="Art Workshop Assistant"
              description="Assist instructors at a children's art workshop. Help with materials and guidance."
              image="/placeholder.svg?height=200&width=400"
              date="May 22, 2025"
              time="15:00 - 18:00"
              location="Cultural Center"
              category="Arts"
              categoryIcon={<Paintbrush className="h-4 w-4" />}
              hours={3}
              spots={10}
              spotsLeft={4}
            />

            <VolunteerCard
              title="Library Book Sorting"
              description="Help organize and catalog new book donations at the city library."
              image="/placeholder.svg?height=200&width=400"
              date="May 25, 2025"
              time="10:00 - 15:00"
              location="City Library"
              category="Education"
              categoryIcon={<BookOpen className="h-4 w-4" />}
              hours={5}
              spots={15}
              spotsLeft={9}
            />

            <VolunteerCard
              title="Childcare Support"
              description="Provide assistance at the children's center. Play games, read stories, and help with activities."
              image="/placeholder.svg?height=200&width=400"
              date="May 27, 2025"
              time="14:00 - 17:00"
              location="Children's Center"
              category="Social"
              categoryIcon={<Baby className="h-4 w-4" />}
              hours={3}
              spots={12}
              spotsLeft={5}
            />

            <VolunteerCard
              title="Food Bank Helper"
              description="Sort and package food donations for distribution to families in need."
              image="/placeholder.svg?height=200&width=400"
              date="May 29, 2025"
              time="13:00 - 16:00"
              location="Community Center"
              category="Food"
              categoryIcon={<Utensils className="h-4 w-4" />}
              hours={3}
              spots={25}
              spotsLeft={15}
            />

            <VolunteerCard
              title="Senior Companion"
              description="Visit elderly residents at the senior center. Engage in conversation, games, and activities."
              image="/placeholder.svg?height=200&width=400"
              date="June 1, 2025"
              time="10:00 - 12:00"
              location="Senior Center"
              category="Social"
              categoryIcon={<Users className="h-4 w-4" />}
              hours={2}
              spots={15}
              spotsLeft={10}
            />
          </div>
        </TabsContent>

        <TabsContent value="my-activities" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Activities</CardTitle>
                  <CardDescription>Your scheduled volunteer activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ActivityItem
                    title="Park Cleanup Day"
                    date="May 20, 2025"
                    time="09:00 - 13:00"
                    location="Central Park"
                    category="Environment"
                    categoryIcon={<Leaf className="h-4 w-4" />}
                    status="upcoming"
                  />

                  <ActivityItem
                    title="Library Book Sorting"
                    date="May 25, 2025"
                    time="10:00 - 15:00"
                    location="City Library"
                    category="Education"
                    categoryIcon={<BookOpen className="h-4 w-4" />}
                    status="upcoming"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Past Activities</CardTitle>
                  <CardDescription>Your completed volunteer work</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ActivityItem
                    title="Food Bank Helper"
                    date="May 5, 2025"
                    time="13:00 - 16:00"
                    location="Community Center"
                    category="Food"
                    categoryIcon={<Utensils className="h-4 w-4" />}
                    status="completed"
                    hours={3}
                  />

                  <ActivityItem
                    title="Senior Companion"
                    date="April 28, 2025"
                    time="10:00 - 12:00"
                    location="Senior Center"
                    category="Social"
                    categoryIcon={<Users className="h-4 w-4" />}
                    status="completed"
                    hours={2}
                  />

                  <ActivityItem
                    title="Art Workshop Assistant"
                    date="April 22, 2025"
                    time="15:00 - 18:00"
                    location="Cultural Center"
                    category="Arts"
                    categoryIcon={<Paintbrush className="h-4 w-4" />}
                    status="completed"
                    hours={3}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">User Name</h3>
                    <p className="text-muted-foreground mb-4">Volunteer since April 2025</p>

                    <div className="w-full space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Total Hours</span>
                          <span className="font-medium">8 / 50</span>
                        </div>
                        <Progress value={16} className="h-2" />
                        <p className="text-xs text-muted-foreground">42 more hours until Silver Badge</p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Activities</span>
                          <span className="font-medium">3 / 10</span>
                        </div>
                        <Progress value={30} className="h-2" />
                        <p className="text-xs text-muted-foreground">7 more activities until Dedicated Badge</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <Leaf className="h-8 w-8 text-green-600" />
                      </div>
                      <span className="text-xs text-center">Eco Helper</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <span className="text-xs text-center text-muted-foreground">Silver (Locked)</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <span className="text-xs text-center text-muted-foreground">Gold (Locked)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Leaderboard</CardTitle>
                  <CardDescription>Top volunteers in Kyzylorda</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <LeaderboardItem name="Aizhan Nurpeisova" hours={120} activities={25} rank={1} />

                    <LeaderboardItem name="Marat Tulegenov" hours={95} activities={18} rank={2} />

                    <LeaderboardItem name="Dinara Smagulova" hours={82} activities={20} rank={3} />

                    <LeaderboardItem name="Askar Kenzhebaev" hours={74} activities={16} rank={4} />

                    <LeaderboardItem name="Gulnara Alimova" hours={68} activities={15} rank={5} />

                    <div className="pt-4 border-t">
                      <LeaderboardItem name="You" hours={8} activities={3} rank={42} isCurrentUser={true} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Achievement Levels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Award className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Bronze</p>
                        <p className="text-xs text-muted-foreground">10 hours of volunteering</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <Award className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Silver</p>
                        <p className="text-xs text-muted-foreground">50 hours of volunteering</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Award className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">Gold</p>
                        <p className="text-xs text-muted-foreground">100 hours of volunteering</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Award className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Platinum</p>
                        <p className="text-xs text-muted-foreground">200 hours of volunteering</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Special Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <Leaf className="h-8 w-8 text-green-600" />
                      </div>
                      <span className="text-xs text-center">Eco Helper</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                        <Paintbrush className="h-8 w-8 text-purple-600" />
                      </div>
                      <span className="text-xs text-center">Art Supporter</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <BookOpen className="h-8 w-8 text-blue-600" />
                      </div>
                      <span className="text-xs text-center">Education Ally</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                        <Utensils className="h-8 w-8 text-orange-600" />
                      </div>
                      <span className="text-xs text-center">Food Provider</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                        <Heart className="h-8 w-8 text-pink-600" />
                      </div>
                      <span className="text-xs text-center">Community Heart</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                        <Users className="h-8 w-8 text-gray-600" />
                      </div>
                      <span className="text-xs text-center">Social Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function VolunteerCard({
  title,
  description,
  image,
  date,
  time,
  location,
  category,
  categoryIcon,
  hours,
  spots,
  spotsLeft,
}) {
  return (
    <Card>
      <CardContent className="p-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-40 object-cover object-center" />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="flex items-center gap-1 bg-sky-50 text-sky-700 border-sky-200">
              {categoryIcon}
              <span>{category}</span>
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {hours} hours
            </Badge>
          </div>

          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{location}</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span>Available spots</span>
              <span className="font-medium">
                {spotsLeft} / {spots}
              </span>
            </div>
            <Progress value={(spotsLeft / spots) * 100} className="h-2" />
          </div>

          <Button className="w-full">
            <Heart className="mr-2 h-4 w-4" />
            Sign Up
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ActivityItem({ title, date, time, location, category, categoryIcon, status, hours = null }) {
  return (
    <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className="w-12 h-12 rounded-md bg-sky-100 flex items-center justify-center flex-shrink-0">
        {categoryIcon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">{title}</h4>
          {status === "upcoming" ? (
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Upcoming
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Completed
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        </div>
        {status === "completed" && (
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 text-sm">
              <Clock className="h-3 w-3" />
              <span>{hours} hours logged</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-8">
                <Camera className="mr-1 h-4 w-4" />
                View Photos
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                Certificate
              </Button>
            </div>
          </div>
        )}
        {status === "upcoming" && (
          <div className="flex justify-end mt-2">
            <Button variant="outline" size="sm" className="h-8">
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

function LeaderboardItem({ name, hours, activities, rank, isCurrentUser = false }) {
  return (
    <div className={`flex items-center gap-4 p-2 rounded-md ${isCurrentUser ? "bg-sky-50" : ""}`}>
      <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-medium">
        {rank}
      </div>
      <Avatar className="h-10 w-10">
        <AvatarImage src="/placeholder.svg?height=40&width=40" />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className={`font-medium ${isCurrentUser ? "text-sky-700" : ""}`}>{name}</p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{hours} hours</span>
          <span>{activities} activities</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {rank <= 3 && (
          <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
            <Award className="h-4 w-4 text-yellow-600" />
          </div>
        )}
      </div>
    </div>
  )
}
