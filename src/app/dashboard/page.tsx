"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Input } from "@/src/components/ui/input";
import {
  RefreshCw,
  Plus,
  Settings,
  LogOut,
  Menu,
  Search,
  ChevronDown,
  CodeXml,
  HomeIcon as House,
  Cloud,
  BookText,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { RepositoryList } from "@/src/components/custom/repositories";
import Image from "next/image";

export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#FAFAFA] flex h-screen flex-col">
      <header className="border-b p-4 md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full gap-3">
            <div className="flex justify-start items-center gap-2">
              <Image
                src={"/assets/logo.svg"}
                alt="logo"
                height={25}
                width={25}
              />
              <h1 className="text-xl">CodeAnt AI</h1>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                  <Menu size={40} />
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex flex-col space-y-2 md:space-y-0 items-start md:items-center justify-between">
                      <span>CodeAnt AI</span>
                      <Button variant="outline" size="sm">
                        <span className="mr-2">UtkarshDhairyaPanwar</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-4 space-y-2">
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg bg-[#1570EF] px-3 py-2 text-white"
                  >
                    <House className="h-4 w-4" />
                    Repository
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
                  >
                    <CodeXml className="h-4 w-4" />
                    AI Code Review
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
                  >
                    <Cloud className="h-4 w-4" />
                    Cloud Security
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
                  >
                    <BookText className="h-4 w-4" />
                    How to Use
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
                  >
                    <Phone className="h-4 w-4" />
                    Support
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="hidden w-64 border-r bg-background p-4 md:fixed md:block md:h-screen">
        <div className="space-y-4 mb-6">
          <div className="flex justify-start items-center gap-2">
            <Image src={"/assets/logo.svg"} alt="logo" height={25} width={25} />
            <h1 className="text-xl">CodeAnt AI</h1>
          </div>
          <Button variant="outline" size="lg" className="w-full">
            <span className="mr-2">UtkarshDhairyaPanwar</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-[#1570EF] px-3 py-2 text-white"
          >
            <House className="h-4 w-4" />
            Repository
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
          >
            <CodeXml className="h-4 w-4" />
            AI Code Review
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
          >
            <Cloud className="h-4 w-4" />
            Cloud Security
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
          >
            <BookText className="h-4 w-4" />
            How to Use
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
        <div className="fixed bottom-4 space-y-2">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
          >
            <Phone className="h-4 w-4" />
            Support
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-secondary"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </div>
      </div>

      <div className="bg-[#FFFFFF] m-4 border rounded-xl md:ml-[17rem] md:flex-1">
        <header className="border-b p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Repositories</h2>
                <p className="text-sm text-muted-foreground">
                  33 total repositories
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4" />
                  Refresh All
                </Button>
                <Button size="sm" className="bg-[#1570EF]">
                  <Plus className="h-4 w-4" />
                  Add Repository
                </Button>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 md:w-1/4"
              />
            </div>
          </div>
        </header>

        <ScrollArea className="h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)]">
          <div className="p-4">
            <RepositoryList searchQuery={searchQuery} />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
