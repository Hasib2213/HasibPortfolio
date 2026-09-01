import ImageFallback from "@components/ImageFallback";
import config from "@config/config.json";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { logo, logo_white, logo_width, logo_height, logo_text, title } =
    config.site;
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Link href="/" className="navbar-brand inline-block py-1">
      {src || logo ? (
        <ImageFallback
          width={logo_width.replace("px", "") * 2}
          height={logo_height.replace("px", "") * 2}
          src={
            mounted && (theme === "dark" || resolvedTheme === "dark")
              ? logo_white
              : logo
          }
          alt={title}
          priority
          style={{
            height: logo_height.replace("px", "") + "px",
            width: logo_width.replace("px", "") + "px",
          }}
          className={"m-auto"}
        />
      ) : (
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-dark dark:text-darkmode-light flex items-center font-primary group transition-opacity hover:opacity-90">
          <span className="text-primary font-mono text-2xl font-extrabold mr-0.5">&lt;</span>
          <span>{logo_text || title}</span>
          <span className="text-primary font-mono text-2xl font-extrabold ml-0.5"> /&gt;</span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
