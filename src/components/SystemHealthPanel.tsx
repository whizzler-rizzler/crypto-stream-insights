import { Activity, Database, HardDrive, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import StatsCard from "./StatsCard";
import { Badge } from "@/components/ui/badge";

const SystemHealthPanel = () => {
  return (
    <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="h-5 w-5 text-rose-500" />
        <h3 className="font-semibold text-foreground">Stan systemu i bazy danych</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-background/50 border border-border/40">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-blue-500" />
            <p className="text-xs text-muted-foreground">Dane zapisywane/s</p>
          </div>
          <p className="text-2xl font-bold text-foreground">0</p>
          <p className="text-xs text-muted-foreground mt-1">rekordów na sekundę</p>
        </div>

        <div className="p-4 rounded-lg bg-background/50 border border-border/40">
          <div className="flex items-center gap-2 mb-2">
            <HardDrive className="h-4 w-4 text-violet-500" />
            <p className="text-xs text-muted-foreground">Rozmiar bazy danych</p>
          </div>
          <p className="text-2xl font-bold text-foreground">0 MB</p>
          <p className="text-xs text-muted-foreground mt-1">całkowity rozmiar</p>
        </div>

        <div className="p-4 rounded-lg bg-background/50 border border-border/40">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <p className="text-xs text-muted-foreground">Błędy systemu</p>
          </div>
          <p className="text-2xl font-bold text-foreground">0</p>
          <p className="text-xs text-muted-foreground mt-1">w ostatniej sesji</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <div className="flex items-start gap-3">
            <Database className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-foreground">Status bazy danych</p>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">
                  Operacyjna
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Dane są prawidłowo zapisywane. Brak problemów z połączeniem.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-3">
            <Activity className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-foreground">Crash history aplikacji</p>
                <Badge variant="outline" className="text-primary border-primary/30">
                  0 crashów
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Aplikacja działa stabilnie. Brak problemów z ciągłością zapisywania danych.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SystemHealthPanel;
