import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import {
  Droplet,
  Flame,
  Thermometer,
  Trash2,
  BrushIcon as Broom,
  Home,
  HelpCircle,
  QrCode,
  Check,
  Clock,
} from "lucide-react"

export default function MyHomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-sky-600">My Home</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span>I'm not home</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <HelpCircle className="h-4 w-4" />
            <span>Need help</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="utilities">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="utilities">Utilities</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
            </TabsList>
            <TabsContent value="utilities" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UtilityCard
                  title="Water"
                  icon={<Droplet className="h-5 w-5 text-blue-500" />}
                  usage="12.3 m³"
                  cost="2,460 ₸"
                  status="Normal"
                />
                <UtilityCard
                  title="Gas"
                  icon={<Flame className="h-5 w-5 text-orange-500" />}
                  usage="45.7 m³"
                  cost="4,570 ₸"
                  status="Normal"
                />
                <UtilityCard
                  title="Heating"
                  icon={<Thermometer className="h-5 w-5 text-red-500" />}
                  usage="0.8 Gcal"
                  cost="6,400 ₸"
                  status="Normal"
                />
                <UtilityCard
                  title="Garbage"
                  icon={<Trash2 className="h-5 w-5 text-green-500" />}
                  usage="N/A"
                  cost="1,200 ₸"
                  status="Collected"
                />
                <UtilityCard
                  title="Entrance Cleaning"
                  icon={<Broom className="h-5 w-5 text-purple-500" />}
                  usage="N/A"
                  cost="800 ₸"
                  status="Scheduled"
                />
              </div>
            </TabsContent>
            <TabsContent value="services" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Services</CardTitle>
                  <CardDescription>Scheduled maintenance and service visits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Droplet className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium">Water Pipe Maintenance</p>
                          <p className="text-sm text-muted-foreground">May 15, 2025 • 10:00-14:00</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Upcoming
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Flame className="h-5 w-5 text-orange-500" />
                        <div>
                          <p className="font-medium">Gas System Inspection</p>
                          <p className="text-sm text-muted-foreground">May 20, 2025 • 09:00-11:00</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Upcoming
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Broom className="h-5 w-5 text-purple-500" />
                        <div>
                          <p className="font-medium">Entrance Deep Cleaning</p>
                          <p className="text-sm text-muted-foreground">May 18, 2025 • 08:00-12:00</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Completed
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payments" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Options</CardTitle>
                  <CardDescription>Pay your utilities and services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <QrCode className="h-5 w-5" />
                          Kaspi QR
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-center p-4">
                          <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-lg">
                            QR Code
                          </div>
                        </div>
                        <Button className="w-full mt-2">Open Kaspi</Button>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Total Due</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-center my-4">15,430 ₸</div>
                        <Button className="w-full">Pay All</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Service Calendar</CardTitle>
              <CardDescription>Upcoming visits and shutdowns</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={new Date()} className="rounded-md border" />
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Water maintenance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>Gas inspection</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Cleaning</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Extra Services</CardTitle>
              <CardDescription>Vote for additional services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="playground">Playground Renovation</Label>
                    <p className="text-sm text-muted-foreground">15/20 votes needed</p>
                  </div>
                  <Switch id="playground" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="security">Additional Security</Label>
                    <p className="text-sm text-muted-foreground">8/20 votes needed</p>
                  </div>
                  <Switch id="security" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="garden">Community Garden</Label>
                    <p className="text-sm text-muted-foreground">12/20 votes needed</p>
                  </div>
                  <Switch id="garden" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Recent Service Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceReport service="Entrance Cleaning" date="May 10, 2025" worker="Askar K." status="completed" />
          <ServiceReport service="Water Meter Reading" date="May 5, 2025" worker="Marat T." status="completed" />
          <ServiceReport service="Heating System Check" date="April 28, 2025" worker="Dauren S." status="completed" />
        </div>
      </div>
    </div>
  )
}

function UtilityCard({ title, icon, usage, cost, status }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-sm text-muted-foreground">Usage</p>
            <p className="font-medium">{usage}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Cost</p>
            <p className="font-medium">{cost}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground">Status</p>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ServiceReport({ service, date, worker, status }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            {status === "completed" ? (
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-5 w-5 text-green-600" />
              </div>
            ) : (
              <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-medium">{service}</h3>
            <p className="text-sm text-muted-foreground">
              {date} by {worker}
            </p>
            <div className="mt-2 flex gap-2">
              <Button variant="outline" size="sm">
                View Photos
              </Button>
              <Button variant="outline" size="sm">
                Rate Service
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
