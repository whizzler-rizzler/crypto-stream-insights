import { Archive, Clock, AlertCircle, CheckCircle, Folder } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ArchivePanel = () => {
  return (
    <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Archive className="h-5 w-5 text-amber-500" />
        <h3 className="font-semibold text-foreground">Automatyczna archiwizacja danych</h3>
      </div>

      <div className="space-y-6">
        {/* Info Box */}
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-sm text-muted-foreground mb-3">
            Archiwizacja: Automatycznie eksportuj stare rekordy do CSV i usuń je z bazy danych.
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground ml-4">
            <li>• Uruchamia się co 24 godziny o północy</li>
            <li>• Zachowuje ostatnie <span className="font-semibold text-foreground">3 dni</span> w bazie</li>
            <li>• Starsze dane archiwizuje w pliku <code className="text-primary">archive_*</code> w folderze <code className="text-primary">archives/</code></li>
          </ul>
        </div>

        {/* Scheduler Status */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-rose-500" />
            <h4 className="font-semibold text-foreground">Status automatycznego schedulera</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="p-4 rounded-lg bg-background/50 border border-border/40">
              <p className="text-xs text-muted-foreground mb-1">Status</p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">
                  Aktywny
                </Badge>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/40">
              <p className="text-xs text-muted-foreground mb-1">Ostatni refresh</p>
              <p className="text-sm font-semibold text-foreground">Nigdy</p>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/40">
              <p className="text-xs text-muted-foreground mb-1">Następny refresh</p>
              <p className="text-sm font-semibold text-foreground">2025-11-26T17:29</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 border-border/60">
              <Clock className="mr-2 h-4 w-4" />
              Uruchom scheduler
            </Button>
            <Button variant="outline" className="flex-1 border-border/60">
              <AlertCircle className="mr-2 h-4 w-4" />
              Wyłącz scheduler
            </Button>
          </div>
        </div>

        {/* Archived Files */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Folder className="h-5 w-5 text-amber-500" />
            <h4 className="font-semibold text-foreground">Archiwizowane pliki</h4>
          </div>
          
          <div className="p-4 rounded-lg bg-background/50 border border-border/40">
            <p className="text-sm text-muted-foreground">
              Folder <code className="text-primary">archives/</code> zostanie utworzony przy pierwszej archiwizacji.
            </p>
          </div>
        </div>

        {/* Archive Info */}
        <div className="p-4 rounded-lg bg-muted/30 border border-border/40">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Moduł archiwizacji: <span className="text-emerald-500">Aktywny</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Dane starsze niż 3 dni zostaną automatycznie usunięte z bazy przy następnej archiwizacji
              </p>
            </div>
          </div>
        </div>

        {/* Archive Logs */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-foreground">Logi archiwizacji</h4>
          </div>
          
          <div className="p-4 rounded-lg bg-background/50 border border-border/40 max-h-64 overflow-y-auto">
            <div className="space-y-2 font-mono text-xs">
              <div className="flex gap-3 text-muted-foreground">
                <span className="text-emerald-500">✓</span>
                <span className="text-muted-foreground/60">2025-11-24 00:00:15</span>
                <span>Archiwizacja zakończona: 1,234 rekordów przeniesiono do archive_20251124.csv</span>
              </div>
              <div className="flex gap-3 text-muted-foreground">
                <span className="text-emerald-500">✓</span>
                <span className="text-muted-foreground/60">2025-11-23 00:00:12</span>
                <span>Archiwizacja zakończona: 2,156 rekordów przeniesiono do archive_20251123.csv</span>
              </div>
              <div className="flex gap-3 text-muted-foreground">
                <span className="text-emerald-500">✓</span>
                <span className="text-muted-foreground/60">2025-11-22 00:00:18</span>
                <span>Archiwizacja zakończona: 1,987 rekordów przeniesiono do archive_20251122.csv</span>
              </div>
              <div className="flex gap-3 text-muted-foreground">
                <span className="text-primary">ℹ</span>
                <span className="text-muted-foreground/60">2025-11-21 00:00:10</span>
                <span>Brak danych do archiwizacji</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArchivePanel;
