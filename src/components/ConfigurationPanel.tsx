import { useState } from "react";
import { Settings, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ConfigurationPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [wsUrl, setWsUrl] = useState("wss://example.supabase.co/functions/v1/crypto-data-stream");
  const [batchInterval, setBatchInterval] = useState("50");
  const [pollingInterval, setPollingInterval] = useState("30");
  const [dataCollectionInterval, setDataCollectionInterval] = useState("1000");

  return (
    <Card className="border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Settings className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">Konfiguracja</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="wsUrl" className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                  🔗 WebSocket URL
                </Label>
                <Input
                  id="wsUrl"
                  value={wsUrl}
                  onChange={(e) => setWsUrl(e.target.value)}
                  className="bg-background/50 border-border/60"
                />
              </div>
              
              <div>
                <Label htmlFor="batchInterval" className="text-sm text-muted-foreground mb-2 block">
                  Batch INSERT (co ile świec)
                </Label>
                <Input
                  id="batchInterval"
                  type="number"
                  value={batchInterval}
                  onChange={(e) => setBatchInterval(e.target.value)}
                  className="bg-background/50 border-border/60"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="pollingInterval" className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                  📊 Supabase
                  <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">
                    Skonfigurowany
                  </Badge>
                </Label>
                <p className="text-xs text-muted-foreground mt-2">
                  💡 Jeśli widzisz 'Invalid API key', użyj anon key zamiast service_role
                </p>
              </div>
              
              <div>
                <Label htmlFor="pollingInterval" className="text-sm text-muted-foreground mb-2 block">
                  Polling danych WebSocket (s)
                </Label>
                <Input
                  id="pollingInterval"
                  type="number"
                  value={pollingInterval}
                  onChange={(e) => setPollingInterval(e.target.value)}
                  className="bg-background/50 border-border/60"
                />
              </div>
              
              <div>
                <Label htmlFor="dataCollection" className="text-sm text-muted-foreground mb-2 block">
                  Zbieranie danych (ms)
                </Label>
                <Input
                  id="dataCollection"
                  type="number"
                  value={dataCollectionInterval}
                  onChange={(e) => setDataCollectionInterval(e.target.value)}
                  className="bg-background/50 border-border/60"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ConfigurationPanel;
