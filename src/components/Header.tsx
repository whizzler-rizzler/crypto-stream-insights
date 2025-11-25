import { BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
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
      </div>
    </header>
  );
};

export default Header;
