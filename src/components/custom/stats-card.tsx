import { Stat } from "@/src/types";
import { Card, CardContent, CardHeader } from "../ui/card";

const STATS: Stat[] = [
  { label: "Language Support", value: "30+" },
  { label: "Developers", value: "10K+" },
  { label: "Hours Saved", value: "100K+" },
];

const StatsCard = () => {
  return (
    <Card className="w-full max-w-[300px] bg-white rounded-xl shadow-lg">
      <CardHeader className="flex-row gap-2 items-center border-b p-4">
        <img
          src="/assets/logo.svg"
          alt=""
          className="w-6 h-6"
          aria-hidden="true"
        />
        <h2 className="font-semibold text-sm">
          AI to Detect & Autofix Bad Code
        </h2>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-3 gap-2 p-4 text-center">
          {STATS.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-semibold text-sm">{value}</span>
              <span className="text-xs text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
