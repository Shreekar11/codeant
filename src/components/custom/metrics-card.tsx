import { ArrowUpIcon } from "lucide-react";
import { Card } from "../ui/card";

export const MetricsCard: React.FC = () => (
  <Card className="w-[200px] bg-white rounded-xl shadow-lg p-4">
    <div className="flex justify-between items-start">
      <img src="/assets/metrics.png" alt="metrics" className="h-10 w-10" />
      <div className="flex flex-col items-end">
        <div className="flex items-center text-blue-600">
          <ArrowUpIcon className="w-4 h-4" />
          <span className="text-sm">14%</span>
        </div>
        <span className="text-xs text-gray-600">This week</span>
      </div>
    </div>
    <div className="mt-3">
      <h3 className="font-semibold text-sm">Issues Fixed</h3>
      <span className="text-2xl font-bold">500K+</span>
    </div>
  </Card>
);
