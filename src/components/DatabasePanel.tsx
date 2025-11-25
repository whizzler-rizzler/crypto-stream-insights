import { Database, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DatabasePanel = () => {
  // Mock data for demonstration
  const mockData = [
    { exchange: "Lighter", symbol: "VVV", open: "1.037000", high: "1.037000", low: "1.037000", close: "1.037000", volume: "1.03M", change: "0.00%", ticks: "1", time: "25.11.2025, 13:12:18" },
    { exchange: "Lighter", symbol: "FARTCOIN", open: "0.297850", high: "0.297850", low: "0.297850", close: "0.297850", volume: "28.50M", change: "0.00%", ticks: "1", time: "25.11.2025, 13:12:18" },
    { exchange: "Lighter", symbol: "S", open: "0.109780", high: "0.109780", low: "0.109780", close: "0.109780", volume: "6.23M", change: "-", ticks: "1", time: "25.11.2025, 13:12:18" },
    { exchange: "Lighter", symbol: "ETHFI", open: "0.740450", high: "0.740450", low: "0.740450", close: "0.740450", volume: "3.70M", change: "0.00%", ticks: "1", time: "25.11.2025, 13:12:18" },
    { exchange: "Lighter", symbol: "XAG", open: "51.281000", high: "51.281000", low: "51.281000", close: "51.281000", volume: "22.27M", change: "0.00%", ticks: "1", time: "25.11.2025, 13:12:18" },
    { exchange: "Lighter", symbol: "TIA", open: "0.619710", high: "0.619710", low: "0.619710", close: "0.619710", volume: "12.77M", change: "0.00%", ticks: "1", time: "25.11.2025, 13:12:18" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
          <p className="text-sm text-muted-foreground mb-2">Wszystkie rekordy</p>
          <p className="text-3xl font-bold text-foreground">39 198</p>
        </Card>
        <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
          <p className="text-sm text-muted-foreground mb-2">Lighter</p>
          <p className="text-3xl font-bold text-foreground">15 080</p>
        </Card>
        <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
          <p className="text-sm text-muted-foreground mb-2">Extended</p>
          <p className="text-3xl font-bold text-foreground">14 815</p>
        </Card>
        <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
          <p className="text-sm text-muted-foreground mb-2">Paradex</p>
          <p className="text-3xl font-bold text-foreground">9303</p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Filtry</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Giełda</label>
            <Select defaultValue="wszystkie">
              <SelectTrigger className="bg-background/50 border-border/40">
                <SelectValue placeholder="Wybierz giełdę" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wszystkie">Wszystkie</SelectItem>
                <SelectItem value="lighter">Lighter</SelectItem>
                <SelectItem value="extended">Extended</SelectItem>
                <SelectItem value="paradex">Paradex</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Symbol</label>
            <Input 
              placeholder="np. BTC, ETH" 
              className="bg-background/50 border-border/40"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Od daty</label>
            <Input 
              type="text"
              placeholder="dd.mm.rrrr --:--" 
              className="bg-background/50 border-border/40"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Do daty</label>
            <Input 
              type="text"
              placeholder="dd.mm.rrrr --:--" 
              className="bg-background/50 border-border/40"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Database className="h-4 w-4" />
          <span>Domyślnie: ostatnie 24 godziny</span>
        </div>
      </Card>

      {/* Database Table */}
      <Card className="border-border/40 bg-card/50 backdrop-blur-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-muted-foreground">
            Stronicowanie
            <p className="text-foreground mt-1">Rekordy: 39 198 (strona 1 / 784)</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-border/60">
              Poprzednia
            </Button>
            <Button variant="outline" size="sm" className="border-border/60">
              Następna
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-border/40 bg-background/30 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/40 hover:bg-transparent">
                <TableHead className="text-muted-foreground font-medium">Exchange</TableHead>
                <TableHead className="text-muted-foreground font-medium">Symbol</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Open</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">High</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Low</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Close</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Volumen</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Zmiana %</TableHead>
                <TableHead className="text-muted-foreground font-medium text-center">Ticki</TableHead>
                <TableHead className="text-muted-foreground font-medium">Czas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((row, index) => (
                <TableRow key={index} className="border-border/40 hover:bg-background/50">
                  <TableCell className="text-foreground">{row.exchange}</TableCell>
                  <TableCell className="text-cyan-400 font-medium">{row.symbol}</TableCell>
                  <TableCell className="text-muted-foreground text-right font-mono text-sm">{row.open}</TableCell>
                  <TableCell className="text-emerald-400 text-right font-mono text-sm">{row.high}</TableCell>
                  <TableCell className="text-rose-400 text-right font-mono text-sm">{row.low}</TableCell>
                  <TableCell className="text-foreground text-right font-mono text-sm font-semibold">{row.close}</TableCell>
                  <TableCell className="text-foreground text-right">{row.volume}</TableCell>
                  <TableCell className="text-emerald-400 text-right">{row.change}</TableCell>
                  <TableCell className="text-foreground text-center">{row.ticks}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default DatabasePanel;
