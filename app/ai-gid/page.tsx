import { Metadata } from "next"
import AIGuideContent from "./components/AIGuideContent"

export const metadata: Metadata = {
  title: "AI Guide",
  description: "AI Guide page for MyKZO Platform",
}

export default function AIGuidePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">AI Guide</h1>
      <div className="prose max-w-none">
        <p>Welcome to the AI Guide section.</p>
        <AIGuideContent />
      </div>
    </div>
  )
}
