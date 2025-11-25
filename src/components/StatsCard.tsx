import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
}

const StatsCard = ({ title, value, icon: Icon, iconColor = "text-primary" }: StatsCardProps) => {
  return (
    <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className={`${iconColor}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
