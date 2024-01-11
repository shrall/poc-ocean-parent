import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import Seo from "@/components/seo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Avatars from "./avatars";
import Badges from "./badges";
import Buttons from "./buttons";
import Skeletons from "./skeletons";

export default function Components() {
  return (
    <main className="w-screen min-h-screen flex flex-col px-32 py-12 gap-4">
      <Seo templateTitle="Components" siteName="Ocean Starter Template" />
      <Link href="/">
        <Button variant="link" className="mr-auto">
          <ArrowLeft className="size-5 mr-2" /> Go Back
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Components</CardTitle>
          <CardDescription>
            A list of components that are used in Ocean.
          </CardDescription>
        </CardHeader>
      </Card>
      {/* //NOTE - Avatars */}
      <Avatars />
      {/* //NOTE - Badges */}
      <Badges />
      {/* //NOTE - Buttons */}
      <Buttons />
      {/* //NOTE - Skeletons */}
      <Skeletons />
    </main>
  );
}
