import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Icon, { IconType } from "../ui/icon";

interface Page {
  name: string;
  icon?: IconType;
  path: string;
  link?: string;
  children?: Page[];
}

const pages: Page[] = [
  {
    name: "Home",
    icon: "home",
    path: "",
    link: "/",
  },
  {
    name: "Business Dashboard",
    icon: "dashboard",
    path: "business-dashboard",
    children: [
      {
        name: "Overview",
        path: "overview",
        link: "/business-dashboard/overview",
      },
      {
        name: "Report",
        path: "report",
        link: "/business-dashboard/report",
      },
    ],
  },
];

function Sidebar() {
  const router = useRouter();
  const pathParts = router.pathname.split("/");
  const mainPath = pathParts[1];
  const subPath = pathParts[2];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState(mainPath);
  const [activeSubPage, setActiveSubPage] = useState(subPath);

  useEffect(() => {
    setIsSidebarOpen(true);
  }, [activePage]);

  return (
    <div
      className={cn(
        isSidebarOpen ? "w-1/6" : "w-[4%]",
        "bg-ocean-primary-10 flex flex-col gap-y-8 py-7 h-screen transition-all",
      )}
    >
      <Image
        src={isSidebarOpen ? "/images/logo-text.png" : "/images/logo-icon.png"}
        alt="Ocean Logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: isSidebarOpen ? "100px" : "32px", height: "auto" }}
        className={cn(isSidebarOpen ? "ml-4" : "mx-auto")}
      />
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            {page.children ? (
              <Collapsible open={activePage == page.path}>
                <CollapsibleTrigger className="w-full">
                  <div
                    className={cn(
                      "flex items-center text-ocean-light-10 font-semibold px-5 py-4 opacity-50",
                      activePage == page.path &&
                        "bg-ocean-primary-30 border-l-4 border-ocean-yellow opacity-100",
                      isSidebarOpen ? "px-5" : "px-2",
                    )}
                    onClick={() => setActivePage(page.path)}
                  >
                    {page.icon && (
                      <Icon
                        icon={page.icon}
                        fill="ocean-light-10"
                        className={cn(isSidebarOpen && "mr-2")}
                      />
                    )}
                    {isSidebarOpen && (
                      <>
                        <span className="text-sm truncate">{page.name}</span>
                        <ChevronDown className="size-4 ml-auto" />
                      </>
                    )}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {isSidebarOpen &&
                    page.children.map(
                      (child) =>
                        child.link && (
                          <Link key={child.name} href={child.link}>
                            <div
                              onClick={() => setActiveSubPage(child.name)}
                              className={cn(
                                "flex items-center text-ocean-light-10 font-semibold py-4 opacity-50",
                                activeSubPage == child.path && "opacity-100",
                                isSidebarOpen ? "px-5" : "px-2",
                              )}
                            >
                              <span className="text-sm truncate">
                                {child.name}
                              </span>
                            </div>
                          </Link>
                        ),
                    )}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              page.link && (
                <Link href={page.link}>
                  <div
                    onClick={() => {
                      setActivePage(page.path);
                      setActiveSubPage("");
                    }}
                    className={cn(
                      "flex items-center text-ocean-light-10 font-semibold py-4 opacity-50",
                      activePage == page.path &&
                        "bg-ocean-primary-30 border-l-4 border-l- border-ocean-yellow opacity-100",
                      isSidebarOpen
                        ? "px-5 justify-start"
                        : "px-2 justify-center",
                    )}
                  >
                    {page.icon && (
                      <Icon
                        icon={page.icon}
                        fill="ocean-light-10"
                        className={cn(isSidebarOpen && "mr-2")}
                      />
                    )}
                    {isSidebarOpen && (
                      <span className="text-sm truncate">{page.name}</span>
                    )}
                  </div>
                </Link>
              )
            )}
          </li>
        ))}
      </ul>
      <Button
        variant="link"
        className="rounded-none text-ocean-light-10 justify-start opacity-50 hover:opacity-100 font-semibold mt-auto"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <>
            <Icon
              icon="chevron-left"
              fill="ocean-light-10"
              className={cn(isSidebarOpen && "mr-2")}
            />
            <span className="text-sm">Hide Menu</span>
          </>
        ) : (
          <>
            <Icon icon="chevron-right" fill="ocean-light-10" />
          </>
        )}
      </Button>
    </div>
  );
}

export default Sidebar;
