import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Vote,
  Clock,
  CheckCircle2,
  Filter,
  ChevronRight,
  LightbulbIcon,
  TreePine,
  Building,
  Bike,
  ShoppingBag,
} from "lucide-react"

export default function PollsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-sky-600">Polls</h1>
        <Button variant="outline" className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Active Polls</TabsTrigger>
          <TabsTrigger value="voted">Voted</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PollCard
              title="Street Lighting Improvement"
              description="Where should we install additional street lights in the city?"
              category="Infrastructure"
              icon={<LightbulbIcon className="h-5 w-5 text-yellow-500" />}
              endDate="May 25, 2025"
              status="active"
              options={[
                { id: "option1", label: "Microdistrict 7 residential area", votes: 145 },
                { id: "option2", label: "Abay Avenue near the university", votes: 87 },
                { id: "option3", label: "Central Park pathways", votes: 203 },
                { id: "option4", label: "School #8 surrounding streets", votes: 112 },
              ]}
              totalVotes={547}
            />

            <PollCard
              title="New Park Location"
              description="Where should the new city park be built?"
              category="Urban Planning"
              icon={<TreePine className="h-5 w-5 text-green-500" />}
              endDate="May 30, 2025"
              status="active"
              options={[
                { id: "option1", label: "Northern district near the river", votes: 234 },
                { id: "option2", label: "Eastern district empty lot", votes: 156 },
                { id: "option3", label: "Southern district near the stadium", votes: 189 },
              ]}
              totalVotes={579}
            />

            <PollCard
              title="Community Center Facilities"
              description="What facilities should be prioritized in the new community center?"
              category="Public Services"
              icon={<Building className="h-5 w-5 text-blue-500" />}
              endDate="June 5, 2025"
              status="active"
              options={[
                { id: "option1", label: "Library and study spaces", votes: 178 },
                { id: "option2", label: "Sports facilities", votes: 203 },
                { id: "option3", label: "Art and cultural spaces", votes: 145 },
                { id: "option4", label: "Technology and innovation hub", votes: 167 },
              ]}
              totalVotes={693}
            />

            <PollCard
              title="Bicycle Lane Routes"
              description="Which route should be prioritized for the new bicycle lanes?"
              category="Transportation"
              icon={<Bike className="h-5 w-5 text-purple-500" />}
              endDate="June 10, 2025"
              status="active"
              options={[
                { id: "option1", label: "City center to university route", votes: 213 },
                { id: "option2", label: "Riverside recreational path", votes: 187 },
                { id: "option3", label: "Connection between residential areas", votes: 156 },
                { id: "option4", label: "School routes network", votes: 124 },
              ]}
              totalVotes={680}
            />
          </div>
        </TabsContent>

        <TabsContent value="voted" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PollCard
              title="Weekend Market Location"
              description="Where should the weekend farmers market be relocated?"
              category="Commerce"
              icon={<ShoppingBag className="h-5 w-5 text-orange-500" />}
              endDate="May 20, 2025"
              status="active"
              options={[
                { id: "option1", label: "Central Square", votes: 245, selected: true },
                { id: "option2", label: "Cultural Center parking lot", votes: 178 },
                { id: "option3", label: "Riverside Park area", votes: 203 },
              ]}
              totalVotes={626}
              voted={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="closed" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PollCard
              title="Public Wi-Fi Hotspots"
              description="Where should we install new public Wi-Fi hotspots?"
              category="Technology"
              icon={<LightbulbIcon className="h-5 w-5 text-blue-500" />}
              endDate="April 30, 2025"
              status="closed"
              options={[
                { id: "option1", label: "Central Park", votes: 312, winner: true },
                { id: "option2", label: "Main Library", votes: 245 },
                { id: "option3", label: "Bus stations", votes: 287 },
                { id: "option4", label: "Shopping centers", votes: 198 },
              ]}
              totalVotes={1042}
            />

            <PollCard
              title="Cultural Festival Theme"
              description="What should be the theme for this year's cultural festival?"
              category="Culture"
              icon={<Building className="h-5 w-5 text-purple-500" />}
              endDate="April 25, 2025"
              status="closed"
              options={[
                { id: "option1", label: "Traditional Kazakh Heritage", votes: 356, winner: true },
                { id: "option2", label: "Modern Art and Innovation", votes: 287 },
                { id: "option3", label: "Multicultural Celebration", votes: 312 },
                { id: "option4", label: "Eco-friendly Future", votes: 198 },
              ]}
              totalVotes={1153}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function PollCard({ title, description, category, icon, endDate, status, options, totalVotes, voted = false }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
              {category}
            </Badge>
          </div>
          {status === "active" ? (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Ends {endDate}</span>
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" />
              <span>Closed</span>
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {status === "active" && !voted ? (
          <form className="space-y-4">
            <RadioGroup defaultValue={options[0].id}>
              {options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="flex-1">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Button className="w-full">
              <Vote className="mr-2 h-4 w-4" />
              Submit Vote
            </Button>
          </form>
        ) : (
          <div className="space-y-3">
            {options.map((option) => (
              <div key={option.id} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className={option.selected ? "font-medium text-sky-600" : ""}>{option.label}</span>
                    {option.winner && <Badge className="bg-green-500 text-white">Winner</Badge>}
                    {option.selected && <Badge className="bg-sky-500 text-white">Your Vote</Badge>}
                  </div>
                  <span className="font-medium">{Math.round((option.votes / totalVotes) * 100)}%</span>
                </div>
                <Progress
                  value={(option.votes / totalVotes) * 100}
                  className={option.winner ? "bg-green-100" : option.selected ? "bg-sky-100" : ""}
                />
                <p className="text-xs text-muted-foreground">{option.votes} votes</p>
              </div>
            ))}
            <div className="flex items-center justify-between pt-2 text-sm text-muted-foreground">
              <span>Total votes: {totalVotes}</span>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 h-7 px-2">
                <span>View Details</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
