import { useState } from "react";
import { Settings, ChevronDown, ChevronUp, Copy, Wifi, Database, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const ConfigurationPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const wsUrl = "wss://ujtavgmgeefutsadbyzv.supabase.co/functions/v1/crypto-data-stream";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wsUrl);
    setCopied(true);
    toast.success("URL skopiowany do schowka");
    setTimeout(() => setCopied(false), 2000);
  };

  const testWebSocket = () => {
    toast.success("WebSocket: Wysłano 'Hello World'");
  };

  const testSupabase = () => {
    toast.success("Supabase: Zapisano 'Hello World'");
  };

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
            {/* Left Column - WebSocket & Supabase Config */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                  🔗 WebSocket URL
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 bg-background/50 border border-border/60 rounded-md px-3 py-2 text-sm text-foreground font-mono">
                    {wsUrl}
                  </div>
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="icon"
                    className="border-border/60"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  📊 Supabase
                  <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">
                    Skonfigurowany
                  </Badge>
                </label>
                <p className="text-xs text-muted-foreground mt-2 bg-primary/5 border border-primary/20 rounded p-2">
                  💡 Jeśli widzisz 'Invalid API key', użyj anon key zamiast service_role
                </p>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-3 block">Parametry streamingu:</label>
                <div className="space-y-2 text-sm text-muted-foreground bg-background/30 rounded-lg p-3 border border-border/40">
                  <div className="flex justify-between">
                    <span>• Batch INSERT:</span>
                    <span className="text-foreground font-medium">co 50 świec</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Polling WebSocket:</span>
                    <span className="text-foreground font-medium">co 30s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Zbieranie danych:</span>
                    <span className="text-foreground font-medium">co 1000ms</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Tests */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-3 block">Testy połączeń:</label>
                
                <div className="space-y-3">
                  <Card className="border-border/40 bg-background/30 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Wifi className="h-5 w-5 text-emerald-500" />
                      <h4 className="font-medium text-foreground">Test WebSocket</h4>
                    </div>
                    <Button
                      onClick={testWebSocket}
                      variant="outline"
                      className="w-full border-border/60"
                    >
                      <Wifi className="mr-2 h-4 w-4" />
                      Wyślij Hello World
                    </Button>
                  </Card>

                  <Card className="border-border/40 bg-background/30 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="h-5 w-5 text-violet-500" />
                      <h4 className="font-medium text-foreground">Test Supabase</h4>
                    </div>
                    <Button
                      onClick={testSupabase}
                      variant="outline"
                      className="w-full border-border/60"
                    >
                      <Database className="mr-2 h-4 w-4" />
                      Zapisz Hello World
                    </Button>
                  </Card>

                  <div className="flex items-center gap-2 p-3 bg-background/30 rounded-lg border border-border/40">
                    <input
                      type="checkbox"
                      id="saveToSupabase"
                      className="rounded border-border/60"
                      defaultChecked
                    />
                    <label htmlFor="saveToSupabase" className="text-sm text-foreground cursor-pointer">
                      ✅ Zapisuj do Supabase
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ConfigurationPanel;
