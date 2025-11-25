import { Download, FileText, FileJson, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ExportPanel = () => {
  const handleExportCSV = () => {
    toast.info("Eksport CSV: Brak danych do eksportu");
  };

  const handleExportJSON = () => {
    toast.info("Eksport JSON: Brak danych do eksportu");
  };

  return (
    <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Download className="h-5 w-5 text-blue-500" />
        <h3 className="font-semibold text-foreground">Eksport danych</h3>
      </div>

      <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <div className="flex items-start gap-2">
          <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            Dostępnych rekordów do eksportu: <span className="font-semibold text-foreground">0</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Eksport do CSV</h4>
          <Button
            onClick={handleExportCSV}
            variant="outline"
            disabled
            className="w-full border-border/60"
          >
            <FileText className="mr-2 h-4 w-4" />
            Brak danych do eksportu
          </Button>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Eksport do JSON</h4>
          <Button
            onClick={handleExportJSON}
            variant="outline"
            disabled
            className="w-full border-border/60"
          >
            <FileJson className="mr-2 h-4 w-4" />
            Brak danych do eksportu
          </Button>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/40">
        <h4 className="text-sm font-medium text-foreground mb-2">Podgląd danych</h4>
        <p className="text-xs text-muted-foreground">
          Uruchom streaming, aby zebrać dane do eksportu
        </p>
      </div>
    </Card>
  );
};

export default ExportPanel;
