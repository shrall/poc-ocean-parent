import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function Skeletons() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          Skeletons
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsLoading(true)}
          >
            <RefreshCw />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-x-2 gap-y-4">
        {isLoading ? (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Avatar className="size-12">
              <AvatarImage src="https://github.com/shrall.png" />
              <AvatarFallback>MO</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xl">Marshall Ovierdo Kurniawan</p>
              <p>Frontend Engineer</p>
            </div>
          </div>
        )}
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Skeletons;
