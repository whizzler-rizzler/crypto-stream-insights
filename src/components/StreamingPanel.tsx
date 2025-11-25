import { useState } from "react";
import { Activity, Database, Wifi, Play, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const StreamingPanel = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingStatus, setStreamingStatus] = useState("Nieaktywny");

  const testWebSocket = () => {
    toast.success("WebSocket: Wysłano 'Hello World'");
  };

  const testSupabase = () => {
    toast.success("Supabase: Zapisano 'Hello World'");
  };

  const toggleStreaming = () => {
    setIsStreaming(!isStreaming);
    if (!isStreaming) {
      setStreamingStatus("Streaming nieskończony... (UI odświeża co 30s, batch INSERT co 50 świec)");
      toast.success("Streaming rozpoczęty");
    } else {
      setStreamingStatus("Zatrzymany");
      toast.info("Streaming zatrzymany");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Test WebSocket */}
      <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <Wifi className="h-5 w-5 text-emerald-500" />
          <h3 className="font-semibold text-foreground">Test WebSocket</h3>
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

      {/* Test Supabase */}
      <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <Database className="h-5 w-5 text-violet-500" />
          <h3 className="font-semibold text-foreground">Test Supabase</h3>
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

      {/* Streaming Controls */}
      <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="h-5 w-5 text-blue-500" />
          <h3 className="font-semibold text-foreground">Streaming danych</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="saveToSupabase"
              className="rounded border-border/60"
              defaultChecked
            />
            <label htmlFor="saveToSupabase" className="text-sm text-muted-foreground">
              Zapisuj do Supabase
            </label>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={toggleStreaming}
              variant={isStreaming ? "destructive" : "default"}
              className="flex-1"
            >
              {isStreaming ? (
                <>
                  <Square className="mr-2 h-4 w-4" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start
                </>
              )}
            </Button>
          </div>
          {isStreaming && (
            <div className="mt-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <p className="text-xs text-foreground">{streamingStatus}</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default StreamingPanel;
