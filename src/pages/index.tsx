import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/layout/layout";
import Seo from "@/components/seo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <Layout>
      <Seo templateTitle="Home" siteName="Ocean Starter Template" />
      <section className="w-screen min-h-screen flex flex-col items-center justify-center gap-4 px-32 py-12">
        <Card className="w-3/4 min-h-[70vh] bg-ocean bg-cover flex flex-col items-center justify-center">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-ocean-light-10">
              <Image
                src="/images/logo-text.png"
                alt="Ocean Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "200px", height: "auto" }}
              />
            </CardTitle>
            <CardDescription className="text-xl text-ocean-light-10 font-semibold ml-2">
              Starter Template
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <Link href="/components">
              <Button variant="outline">
                <Eye className="mr-2" /> See Components
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
