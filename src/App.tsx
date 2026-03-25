import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import CartoonPage from "@/pages/CartoonPage";
import TvPage from "@/pages/TvPage";
import Navigation from "@/components/Navigation";

export type Page = "home" | "cartoons" | "tv";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background star-bg font-nunito">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>
          {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
          {currentPage === "cartoons" && <CartoonPage />}
          {currentPage === "tv" && <TvPage />}
        </main>
      </div>
    </TooltipProvider>
  );
}
