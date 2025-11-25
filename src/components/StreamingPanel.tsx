import { Card } from "@/components/ui/card";

const StreamingPanel = () => {
  return (
    <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
        <p className="text-sm text-muted-foreground">
          Panel streamingu - używaj przycisków Start/Stop w nagłówku oraz testów w Konfiguracji
        </p>
      </div>
    </Card>
  );
};

export default StreamingPanel;
