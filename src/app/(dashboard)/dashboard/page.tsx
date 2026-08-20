import { RightSidePanel } from "@/components/dashboard/right-side-panel";
import { RoadmapCard } from "@/components/dashboard/roadmap-card";
import { TabsPanel } from "@/components/dashboard/tabs-panel";
import { InspirationalModal } from "@/components/dashboard/inspirational-modal";
import AnimatedBackground from "@/components/animated-background";

export default function DashboardPage() {
  return (
    <>
      <AnimatedBackground />
      <InspirationalModal />
      <div className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.7fr]">
          <div className="space-y-6">
            <RoadmapCard />
            <TabsPanel />
          </div>
          <RightSidePanel />
        </div>
      </div>
    </>
  );
}
