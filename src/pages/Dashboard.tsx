import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { KPICards } from "../components/dashboard/KPICards";
import { MainCharts } from "../components/dashboard/MainCharts";
import { SecondaryMetrics } from "../components/dashboard/SecondaryMetrics";

export function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader />
      <KPICards />
      <MainCharts />
      <SecondaryMetrics />
    </div>
  );
}
