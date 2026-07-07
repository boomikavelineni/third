import React, { createContext, useContext, useState, useEffect, forwardRef } from 'react';

export interface RouterContextType {
  pathname: string;
  navigate: (path: string) => void;
  updatePathnameWithoutScroll: (path: string) => void;
  navigationType: "click" | "scroll" | "popstate";
}

export const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState(() => 
    typeof window !== "undefined" ? window.location.pathname : "/"
  );
  const [navigationType, setNavigationType] = useState<"click" | "scroll" | "popstate">("click");

  const navigate = (path: string) => {
    setNavigationType("click");
    window.history.pushState(null, "", path);
    setPathname(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const updatePathnameWithoutScroll = (path: string) => {
    if (window.location.pathname !== path) {
      setNavigationType("scroll");
      window.history.replaceState(null, "", path);
      setPathname(path);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setNavigationType("popstate");
      setPathname(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, navigate, updatePathnameWithoutScroll, navigationType }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  to: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, className, onClick, ...props }, ref) => {
    const { navigate } = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (
        !e.defaultPrevented &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        e.preventDefault();
        navigate(to);
      }
    };

    return (
      <a ref={ref} href={to} onClick={handleClick} className={className} {...props}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
