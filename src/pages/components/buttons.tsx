import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Buttons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-x-2 gap-y-4">
        {/* //NOTE - Primary */}
        <div className="space-y-2">
          <p className="text-xl">Primary</p>
          <div className="flex items-center gap-2">
            <Button variant="default">Default</Button>
            <Button variant="default" disabled>
              Default
            </Button>
            <Button variant="default" shape="rounded">
              Default
            </Button>
            <Button variant="default" size="icon">
              <Plus />
            </Button>
            <Button variant="default" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="default">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Outline</Button>
            <Button variant="outline" disabled>
              Outline
            </Button>
            <Button variant="outline" shape="rounded">
              Outline
            </Button>
            <Button variant="outline" size="icon">
              <Plus />
            </Button>
            <Button variant="outline" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="outline">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost" disabled>
              Ghost
            </Button>
            <Button variant="ghost" shape="rounded">
              Ghost
            </Button>
            <Button variant="ghost" size="icon">
              <Plus />
            </Button>
            <Button variant="ghost" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="ghost">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="link">Link</Button>
            <Button variant="link" disabled>
              Link
            </Button>
            <Button variant="link" shape="rounded">
              Link
            </Button>
            <Button variant="link" size="icon">
              <Plus />
            </Button>
            <Button variant="link" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="link">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
        </div>

        {/* //NOTE - Secondary */}
        <div className="space-y-2">
          <p className="text-xl">Secondary</p>
          <div className="flex items-center gap-2">
            <Button variant="default" color="secondary">
              Default
            </Button>
            <Button variant="default" color="secondary" disabled>
              Default
            </Button>
            <Button variant="default" color="secondary" shape="rounded">
              Default
            </Button>
            <Button variant="default" color="secondary" size="icon">
              <Plus />
            </Button>
            <Button variant="default" color="secondary" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="default" color="secondary">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" color="secondary">
              Outline
            </Button>
            <Button variant="outline" color="secondary" disabled>
              Outline
            </Button>
            <Button variant="outline" color="secondary" shape="rounded">
              Outline
            </Button>
            <Button variant="outline" color="secondary" size="icon">
              <Plus />
            </Button>
            <Button variant="outline" color="secondary" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="outline" color="secondary">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" color="secondary">
              Ghost
            </Button>
            <Button variant="ghost" color="secondary" disabled>
              Ghost
            </Button>
            <Button variant="ghost" color="secondary" shape="rounded">
              Ghost
            </Button>
            <Button variant="ghost" color="secondary" size="icon">
              <Plus />
            </Button>
            <Button variant="ghost" color="secondary" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="ghost" color="secondary">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="link" color="secondary">
              Link
            </Button>
            <Button variant="link" color="secondary" disabled>
              Link
            </Button>
            <Button variant="link" color="secondary" shape="rounded">
              Link
            </Button>
            <Button variant="link" color="secondary" size="icon">
              <Plus />
            </Button>
            <Button variant="link" color="secondary" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="link" color="secondary">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
        </div>

        {/* //NOTE - Success */}
        <div className="space-y-2">
          <p className="text-xl">Success</p>
          <div className="flex items-center gap-2">
            <Button variant="default" color="success">
              Default
            </Button>
            <Button variant="default" color="success" disabled>
              Default
            </Button>
            <Button variant="default" color="success" shape="rounded">
              Default
            </Button>
            <Button variant="default" color="success" size="icon">
              <Plus />
            </Button>
            <Button variant="default" color="success" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="default" color="success">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" color="success">
              Outline
            </Button>
            <Button variant="outline" color="success" disabled>
              Outline
            </Button>
            <Button variant="outline" color="success" shape="rounded">
              Outline
            </Button>
            <Button variant="outline" color="success" size="icon">
              <Plus />
            </Button>
            <Button variant="outline" color="success" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="outline" color="success">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" color="success">
              Ghost
            </Button>
            <Button variant="ghost" color="success" disabled>
              Ghost
            </Button>
            <Button variant="ghost" color="success" shape="rounded">
              Ghost
            </Button>
            <Button variant="ghost" color="success" size="icon">
              <Plus />
            </Button>
            <Button variant="ghost" color="success" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="ghost" color="success">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="link" color="success">
              Link
            </Button>
            <Button variant="link" color="success" disabled>
              Link
            </Button>
            <Button variant="link" color="success" shape="rounded">
              Link
            </Button>
            <Button variant="link" color="success" size="icon">
              <Plus />
            </Button>
            <Button variant="link" color="success" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="link" color="success">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
        </div>

        {/* //NOTE - Danger */}
        <div className="space-y-2">
          <p className="text-xl">Danger</p>
          <div className="flex items-center gap-2">
            <Button variant="default" color="danger">
              Default
            </Button>
            <Button variant="default" color="danger" disabled>
              Default
            </Button>
            <Button variant="default" color="danger" shape="rounded">
              Default
            </Button>
            <Button variant="default" color="danger" size="icon">
              <Plus />
            </Button>
            <Button variant="default" color="danger" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="default" color="danger">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" color="danger">
              Outline
            </Button>
            <Button variant="outline" color="danger" disabled>
              Outline
            </Button>
            <Button variant="outline" color="danger" shape="rounded">
              Outline
            </Button>
            <Button variant="outline" color="danger" size="icon">
              <Plus />
            </Button>
            <Button variant="outline" color="danger" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="outline" color="danger">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" color="danger">
              Ghost
            </Button>
            <Button variant="ghost" color="danger" disabled>
              Ghost
            </Button>
            <Button variant="ghost" color="danger" shape="rounded">
              Ghost
            </Button>
            <Button variant="ghost" color="danger" size="icon">
              <Plus />
            </Button>
            <Button variant="ghost" color="danger" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="ghost" color="danger">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="link" color="danger">
              Link
            </Button>
            <Button variant="link" color="danger" disabled>
              Link
            </Button>
            <Button variant="link" color="danger" shape="rounded">
              Link
            </Button>
            <Button variant="link" color="danger" size="icon">
              <Plus />
            </Button>
            <Button variant="link" color="danger" size="icon" disabled>
              <Minus />
            </Button>
            <Button variant="link" color="danger">
              <ChevronLeft className="mr-1" />
              Default
              <ChevronRight className="ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Buttons;
