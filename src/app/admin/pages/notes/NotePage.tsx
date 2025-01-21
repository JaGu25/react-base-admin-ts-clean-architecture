import TableNotes from "@/app/admin/pages/notes/components/TableNotes";
import { Button } from "@/shared/components/shadcn/button";
import { Card, CardContent } from "@/shared/components/shadcn/card";
import { Plus } from "lucide-react";

const NotePage = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">Notas</h2>
          <Button>
            <Plus /> Agregar
          </Button>
        </div>
        <TableNotes />
      </CardContent>
    </Card>
  );
};

export default NotePage;
