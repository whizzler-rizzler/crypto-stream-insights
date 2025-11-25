import { Bug, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import StatsCard from "./StatsCard";
import { Clock, Lightbulb, Database, Package } from "lucide-react";

const DebugPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rawData] = useState([
    { timestamp: "2025-11-26 17:29:01", message: "WebSocket connected" },
    { timestamp: "2025-11-26 17:29:05", message: "Received 150 ticks" },
    { timestamp: "2025-11-26 17:29:10", message: "Created 45 candles" },
    { timestamp: "2025-11-26 17:29:15", message: "Saved 45 candles to database" },
    { timestamp: "2025-11-26 17:29:20", message: "Batch sent: 50 records" },
  ]);

  return (
    <div className="space-y-6">
      <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bug className="h-5 w-5 text-blue-500" />
          <h3 className="font-semibold text-foreground">Debug Logi (bieżąca sesja)</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatsCard title="⏱️ Ticki otrzymane" value="0" icon={Clock} iconColor="text-blue-500" />
          <StatsCard title="💡 Świece utworzone" value="0" icon={Lightbulb} iconColor="text-amber-500" />
          <StatsCard title="💾 Świece zapisane" value="0" icon={Database} iconColor="text-violet-500" />
          <StatsCard title="📦 Batche wysłane" value="0" icon={Package} iconColor="text-emerald-500" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-muted-foreground">Ostatnie wiadomości</h4>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-primary hover:text-primary/80 flex items-center gap-1"
            >
              {isExpanded ? (
                <>
                  Zwiń <ChevronUp className="h-3 w-3" />
                </>
              ) : (
                <>
                  Rozwiń <ChevronDown className="h-3 w-3" />
                </>
              )}
            </button>
          </div>
          
          <div className="bg-background/50 rounded-lg border border-border/40 p-4 max-h-48 overflow-y-auto">
            <p className="text-sm text-muted-foreground">
              Kliknij 'Wyślij Hello World' lub 'Start Streaming' aby rozpocząć
            </p>
          </div>
        </div>
      </Card>

      {isExpanded && (
        <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
          <button
            onClick={() => setIsExpanded(false)}
            className="w-full flex items-center justify-between mb-4 hover:bg-accent/5 transition-colors rounded p-2"
          >
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold text-foreground">Surowe dane JSON (ostatnie 5)</span>
            </div>
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          </button>
          
          <div className="bg-background/80 rounded-lg border border-border/40 p-4 font-mono text-xs overflow-x-auto">
            <pre className="text-muted-foreground">
              {JSON.stringify(rawData, null, 2)}
            </pre>
          </div>
        </Card>
      )}
    </div>
  );
};

export default DebugPanel;
