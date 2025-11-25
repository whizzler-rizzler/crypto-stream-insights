import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, Database, BarChart3, Bell, Building2, Coins, Filter } from "lucide-react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import ConfigurationPanel from "@/components/ConfigurationPanel";
import StreamingPanel from "@/components/StreamingPanel";
import DebugPanel from "@/components/DebugPanel";
import ExportPanel from "@/components/ExportPanel";
import ArchivePanel from "@/components/ArchivePanel";
import SystemHealthPanel from "@/components/SystemHealthPanel";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Configuration */}
        <ConfigurationPanel />

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatsCard title="📨 Otrzymane" value="0" icon={Activity} iconColor="text-blue-500" />
          <StatsCard title="💾 Zapisane OHLCV" value="0" icon={Database} iconColor="text-violet-500" />
          <StatsCard title="🔔 Alerty" value="0" icon={Bell} iconColor="text-amber-500" />
          <StatsCard title="🏛️ Giełdy" value="0" icon={Building2} iconColor="text-emerald-500" />
          <StatsCard title="💱 Symbole" value="0" icon={Coins} iconColor="text-cyan-500" />
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="h-full border border-border/40 bg-card/50 backdrop-blur-sm rounded-lg p-4 flex flex-col justify-center">
              <p className="text-xs text-muted-foreground mb-2">Status</p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">
                  Stream...
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold text-foreground">Filtry danych</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Giełda
              </label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-background/50 border-border/60">
                  <SelectValue placeholder="Wybierz giełdę" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Wszystkie</SelectItem>
                  <SelectItem value="binance">Binance</SelectItem>
                  <SelectItem value="coinbase">Coinbase</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Coins className="h-4 w-4" />
                Symbol
              </label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-background/50 border-border/60">
                  <SelectValue placeholder="Wybierz symbol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Wszystkie</SelectItem>
                  <SelectItem value="btc">BTC/USD</SelectItem>
                  <SelectItem value="eth">ETH/USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="streaming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-card/50 backdrop-blur-sm border border-border/40">
            <TabsTrigger value="streaming" className="data-[state=active]:bg-primary/10">
              <Activity className="h-4 w-4 mr-2" />
              Streaming
            </TabsTrigger>
            <TabsTrigger value="database" className="data-[state=active]:bg-primary/10">
              <Database className="h-4 w-4 mr-2" />
              Baza danych
            </TabsTrigger>
            <TabsTrigger value="charts" className="data-[state=active]:bg-primary/10">
              <BarChart3 className="h-4 w-4 mr-2" />
              Wykresy
            </TabsTrigger>
            <TabsTrigger value="alerts" className="data-[state=active]:bg-primary/10">
              <Bell className="h-4 w-4 mr-2" />
              Alerty
            </TabsTrigger>
            <TabsTrigger value="export" className="data-[state=active]:bg-primary/10">
              📤 Eksport
            </TabsTrigger>
            <TabsTrigger value="archive" className="data-[state=active]:bg-primary/10">
              🗄️ Archiwizacja
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="streaming" className="space-y-6">
              <StreamingPanel />
              <DebugPanel />
              <SystemHealthPanel />
            </TabsContent>

            <TabsContent value="database">
              <div className="text-center py-12 text-muted-foreground">
                Widok bazy danych - w przygotowaniu
              </div>
            </TabsContent>

            <TabsContent value="charts">
              <div className="text-center py-12 text-muted-foreground">
                Wykresy - w przygotowaniu
              </div>
            </TabsContent>

            <TabsContent value="alerts">
              <div className="text-center py-12 text-muted-foreground">
                System alertów - w przygotowaniu
              </div>
            </TabsContent>

            <TabsContent value="export">
              <ExportPanel />
            </TabsContent>

            <TabsContent value="archive">
              <ArchivePanel />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
