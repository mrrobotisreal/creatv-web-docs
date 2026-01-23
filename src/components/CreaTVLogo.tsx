import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import studioLogo from "@/assets/studio_logo.png";

interface CreaTVLogoProps {
  showStudio?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  linkTo?: string;
}

export const CreaTVLogo = ({ showStudio = false, size = "md", linkTo = "/" }: CreaTVLogoProps) => {
  const sizeClasses = {
    sm: { logo: "h-6 w-6", text: "text-base", studioText: "text-sm" },
    md: { logo: "h-8 w-8", text: "text-xl", studioText: "text-lg" },
    lg: { logo: "h-10 w-10", text: "text-2xl", studioText: "text-xl" },
    xl: { logo: "h-14 w-14", text: "text-4xl", studioText: "text-3xl" },
  };

  const logoSrc = showStudio ? studioLogo : logo;
  const classes = sizeClasses[size];

  return (
    <Link to={linkTo} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
      <img src={logoSrc} alt="CreaTV Logo" className={classes.logo} />
      <div className="flex items-center gap-1">
        <span className={`creatv-crea ${classes.text} font-semibold`}>Crea</span>
        <span className={`creatv-tv ${classes.text} font-semibold`}>TV</span>
        {showStudio && (
          <span className={`creatv-studio ${classes.studioText} font-semibold ml-1 hidden sm:inline`}>
            Studio
          </span>
        )}
      </div>
    </Link>
  );
};
