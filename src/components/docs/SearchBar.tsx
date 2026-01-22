import { useState } from "react";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-muted-foreground hover:bg-secondary/80 transition-colors w-full max-w-xs lg:max-w-sm">
          <Search className="h-4 w-4" />
          <span className="text-sm flex-1 text-left">Search</span>
          <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] p-0 bg-popover">
        <div className="p-4">
          <div className="flex items-center gap-2 border-b pb-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 text-base"
              autoFocus
            />
          </div>
          <div className="py-6 text-center text-muted-foreground">
            {query ? (
              <p className="text-sm">No results found for "{query}"</p>
            ) : (
              <p className="text-sm">Start typing to search the documentation</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
