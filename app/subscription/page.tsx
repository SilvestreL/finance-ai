import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./_actions/create-checktou/_components/acquire-plan-button";

const Subscription = async () => {
  const { userId } = await auth();
  if (!userId) return redirect("/login");

  return (
    <>
      <Navbar />;
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinaturas</h1>
        <div className="flex gap-6">
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="text-center text-2xl font-semibold">
                Plano Básico
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">R$</span>
                <span className="font-semibold">0</span>
                <div className="text-2xl text-muted-foreground">/mës </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Apenas 10 transaçoes por mes 7/10</p>
              </div>
              <div className="flex items-center gap-2">
                <XIcon />
                <p>Relatórios de IA</p>
              </div>
            </CardContent>
          </Card>

          {/* card 2 */}
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="text-center text-2xl font-semibold">
                Plano Premium
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">R$</span>
                <span className="font-semibold">19</span>
                <div className="text-2xl text-muted-foreground">/mës </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Transaçoes ilimitadas</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon />
                <p>Relatórios de IA</p>
              </div>
              <AcquirePlanButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Subscription;
