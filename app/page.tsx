import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Navbar from "./_components/navbar";
import SumaryCards from "./{home}/_components/sumary-cards";
import TimeSelect from "./{home}/_components/time-select";
import TransactionsPieChart from "./{home}/_components/transactions-pie-chart";
import getDashBoard from "./_data/get-dashboard";
import ExpensesPerCategory from "./{home}/_components/expenses-per-category";
import LastTransactions from "./{home}/_components/last-transactions";

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

  const monthIsInvalid = !month || !/^(0[1-9]|1[0-2])$/.test(month);
  if (monthIsInvalid) {
    redirect(`?month=01`);
  }
  const dashboard = await getDashBoard(month);
  return (
    <>
      <Navbar />
      <div className="flex h-full flex-col space-y-6 overflow-hidden p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <TimeSelect />
          </div>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SumaryCards month={month} {...dashboard} />
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
