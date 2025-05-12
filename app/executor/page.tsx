import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  XCircle,
  Camera,
  Send,
  Search,
  ClipboardList,
  BarChart,
  Settings,
} from "lucide-react"

export default function ExecutorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-sky-600">Executor Panel</h1>
          <p className="text-muted-foreground">Welcome back, Askar Kenzhebaev</p>
        </div>
        <Button variant="outline" className="flex items-center gap-1">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <ClipboardList className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Today's Tasks</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <BarChart className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Efficiency</p>
                <p className="text-2xl font-bold">92%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tasks">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tasks">Today's Tasks</TabsTrigger>
          <TabsTrigger value="reports">Submit Reports</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Task List</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search tasks..." className="pl-8 w-[250px]" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tasks</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <TaskCard
              title="Water Pipe Repair"
              description="Fix the leaking water pipe at Abay Street, Building 45, Apartment 12."
              date="Today"
              time="10:00 - 12:00"
              location="Abay Street, Building 45"
              category="Water Supply"
              priority="high"
              status="pending"
            />

            <TaskCard
              title="Street Light Replacement"
              description="Replace the broken street light at the corner of Tauelsizdik Avenue and Kazybek Bi Street."
              date="Today"
              time="13:00 - 14:00"
              location="Tauelsizdik/Kazybek Bi intersection"
              category="Street Lighting"
              priority="medium"
              status="pending"
            />

            <TaskCard
              title="Garbage Collection"
              description="Collect garbage from overflowing bins in Microdistrict 6 playground area."
              date="Today"
              time="08:00 - 09:00"
              location="Microdistrict 6, Children's playground"
              category="Garbage & Cleaning"
              priority="medium"
              status="completed"
            />

            <TaskCard
              title="Pothole Repair"
              description="Fill in the large pothole on Auezov Street near the bus stop."
              date="Today"
              time="15:00 - 17:00"
              location="Auezov Street, near Central Bus Stop"
              category="Roads & Sidewalks"
              priority="high"
              status="pending"
            />

            <TaskCard
              title="Park Bench Installation"
              description="Install new benches in Central Park near the fountain area."
              date="Today"
              time="09:00 - 11:00"
              location="Central Park, fountain area"
              category="Parks & Public Spaces"
              priority="low"
              status="completed"
            />
          </div>
        </TabsContent>

        <TabsContent value="reports" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Submit Task Report</CardTitle>
                  <CardDescription>Complete the form to report on a completed task</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Select Task</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a task" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="task1">Water Pipe Repair - Abay Street</SelectItem>
                          <SelectItem value="task2">Street Light Replacement - Tauelsizdik Avenue</SelectItem>
                          <SelectItem value="task3">Pothole Repair - Auezov Street</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Status</label>
                      <Select defaultValue="completed">
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="partial">Partially Completed</SelectItem>
                          <SelectItem value="delayed">Delayed</SelectItem>
                          <SelectItem value="impossible">Cannot Complete</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Report Details</label>
                      <Textarea
                        placeholder="Describe the work done, materials used, and any issues encountered..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Add Photos</label>
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

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time Spent</label>
                      <div className="flex gap-2">
                        <Input type="number" placeholder="Hours" className="w-24" />
                        <Input type="number" placeholder="Minutes" className="w-24" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Report
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Garbage Collection</h4>
                      <p className="text-xs text-muted-foreground">Today, 08:45 AM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Park Bench Installation</h4>
                      <p className="text-xs text-muted-foreground">Today, 11:20 AM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Tree Trimming</h4>
                      <p className="text-xs text-muted-foreground">Yesterday, 03:15 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm">
                    <p className="font-medium mb-1">Taking Good Photos</p>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Take before and after photos</li>
                      <li>Ensure good lighting</li>
                      <li>Include surrounding area for context</li>
                      <li>Focus on the repaired/installed item</li>
                    </ul>
                  </div>

                  <div className="text-sm">
                    <p className="font-medium mb-1">Writing Effective Reports</p>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Be specific about work completed</li>
                      <li>Note any materials used</li>
                      <li>Document any challenges faced</li>
                      <li>Include follow-up recommendations if needed</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Task History</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search history..." className="pl-8 w-[250px]" />
              </div>
              <Select defaultValue="week">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <TaskCard
              title="Garbage Collection"
              description="Collect garbage from overflowing bins in Microdistrict 6 playground area."
              date="Today"
              time="08:00 - 09:00"
              location="Microdistrict 6, Children's playground"
              category="Garbage & Cleaning"
              priority="medium"
              status="completed"
            />

            <TaskCard
              title="Park Bench Installation"
              description="Install new benches in Central Park near the fountain area."
              date="Today"
              time="09:00 - 11:00"
              location="Central Park, fountain area"
              category="Parks & Public Spaces"
              priority="low"
              status="completed"
            />

            <TaskCard
              title="Tree Trimming"
              description="Trim overgrown trees on Abay Street that are blocking street lights."
              date="Yesterday"
              time="14:00 - 16:00"
              location="Abay Street, between blocks 23-27"
              category="Parks & Public Spaces"
              priority="medium"
              status="completed"
            />

            <TaskCard
              title="Playground Equipment Repair"
              description="Fix the broken swing set at the children's playground in Microdistrict 8."
              date="Yesterday"
              time="10:00 - 12:00"
              location="Microdistrict 8, Children's playground"
              category="Parks & Public Spaces"
              priority="high"
              status="completed"
            />

            <TaskCard
              title="Bus Stop Cleaning"
              description="Clean and remove graffiti from the bus stop on Kazybek Bi Street."
              date="May 11, 2025"
              time="09:00 - 10:00"
              location="Kazybek Bi Street, Central Bus Stop"
              category="Garbage & Cleaning"
              priority="low"
              status="completed"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TaskCard({ title, description, date, time, location, category, priority, status }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium">{title}</h3>
              {priority === "high" && <Badge className="bg-red-500 text-white">High Priority</Badge>}
              {priority === "medium" && <Badge className="bg-yellow-500 text-white">Medium Priority</Badge>}
              {priority === "low" && <Badge className="bg-green-500 text-white">Low Priority</Badge>}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{category}</span>
              <span>•</span>
              <span>{status === "completed" ? "Completed" : "Pending"}</span>
            </div>
            <p className="text-sm mb-2">{description}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
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
          </div>
          <div className="flex sm:flex-col items-center gap-2 sm:gap-4">
            {status === "pending" ? (
              <>
                <Button className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Complete</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-1">
                  <XCircle className="h-4 w-4" />
                  <span>Delay</span>
                </Button>
              </>
            ) : (
              <Button variant="outline" className="flex items-center gap-1">
                <Camera className="h-4 w-4" />
                <span>View Report</span>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
