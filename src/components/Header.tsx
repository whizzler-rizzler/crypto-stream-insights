import { useState } from "react";
import { BarChart3, Play, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Header = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingStatus, setStreamingStatus] = useState("Nieaktywny");

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
    <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Crypto Data Stream</h1>
              <p className="text-sm text-muted-foreground">
                Aplikacja do streamowania danych kryptowalutowych przez WebSocket i zapisywania do Supabase
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">Stream</p>
              <div className="flex items-center gap-2">
                {isStreaming ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">
                      Aktywny
                    </Badge>
                  </>
                ) : (
                  <Badge variant="outline" className="text-muted-foreground border-border/60">
                    Nieaktywny
                  </Badge>
                )}
              </div>
            </div>

            <Button
              onClick={toggleStreaming}
              variant={isStreaming ? "destructive" : "default"}
              size="lg"
            >
              {isStreaming ? (
                <>
                  <Square className="mr-2 h-5 w-5" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Start
                </>
              )}
            </Button>
          </div>
        </div>

        {isStreaming && (
          <div className="mt-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-xs text-foreground">{streamingStatus}</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
