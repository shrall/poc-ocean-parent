import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Badges() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Badges</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-x-2 gap-y-4">
        <div className="flex items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default Badges;
