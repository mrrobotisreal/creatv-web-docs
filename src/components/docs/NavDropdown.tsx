import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  label: string;
  href: string;
  disabled?: boolean;
  comingSoon?: boolean;
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  isActive?: boolean;
}

export const NavDropdown = ({ label, items, isActive }: NavDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
            isActive ? "text-primary" : "text-foreground"
          }`}
        >
          {label}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48 bg-popover z-50">
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild disabled={item.disabled}>
            {item.comingSoon ? (
              <span className="flex items-center justify-between w-full text-muted-foreground cursor-not-allowed">
                {item.label}
                <span className="text-xs bg-muted px-1.5 py-0.5 rounded">Soon</span>
              </span>
            ) : (
              <Link to={item.href} className="w-full">
                {item.label}
              </Link>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
