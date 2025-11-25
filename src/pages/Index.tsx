import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Database, BarChart3, Bell, Building2, Coins } from "lucide-react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import ConfigurationPanel from "@/components/ConfigurationPanel";
import StreamingPanel from "@/components/StreamingPanel";
import DebugPanel from "@/components/DebugPanel";
import ExportPanel from "@/components/ExportPanel";
import ArchivePanel from "@/components/ArchivePanel";
import SystemHealthPanel from "@/components/SystemHealthPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Configuration */}
        <ConfigurationPanel />

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <StatsCard title="📨 Otrzymane" value="0" icon={Activity} iconColor="text-blue-500" />
          <StatsCard title="💾 Zapisane OHLCV" value="0" icon={Database} iconColor="text-violet-500" />
          <StatsCard title="🔔 Alerty" value="0" icon={Bell} iconColor="text-amber-500" />
          <StatsCard title="🏛️ Giełdy" value="0" icon={Building2} iconColor="text-emerald-500" />
          <StatsCard title="💱 Symbole" value="0" icon={Coins} iconColor="text-cyan-500" />
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
