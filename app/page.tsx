import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs/server";
import Navbar from "./_components/navbar";
import SumaryCards from "./{home}/_components/sumary-cards";
import TimeSelect from "./{home}/_components/time-select";
import TransactionsPieChart from "./{home}/_components/transactions-pie-chart";
import getDashBoard from "./_data/get-dashboard";
import ExpensesPerCategory from "./{home}/_components/expenses-per-category";
import LastTransactions from "./{home}/_components/last-transactions";
import { isMatch } from "date-fns";
import { canUserAddTransaction } from "./_data/can-user-add-transaction";
import AiReportButton from "./{home}/_components/ai-report-button";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }
  const dashboard = await getDashBoard(month);
  const userCanAddTransaction = await canUserAddTransaction();
  const user = await clerkClient.users.getUser(userId);
  return (
    <>
      <Navbar />
      <div className="flex h-full flex-col space-y-6 overflow-hidden p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <AiReportButton
                month={month}
                hasPremiumPlan={
                  user.publicMetadata.subscriptionPlan === "premium"
                }
              />
              <TimeSelect />
            </div>
          </div>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SumaryCards
              month={month}
              {...dashboard}
              userCanAddTransaction={userCanAddTransaction}
            />
            <div className="grid h-full grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default Home;
