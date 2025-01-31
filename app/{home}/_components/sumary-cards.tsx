import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  Wallet2Icon,
} from "lucide-react";
import SumaryCard from "./sumary-card";

interface SumaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction?: boolean;
}

const SumaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  userCanAddTransaction,
}: SumaryCards) => {
  return (
    <div className="space-y-6">
      {/* sALDO CARD - PRINCIPAL  */}
      <SumaryCard
        icon={<Wallet2Icon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
        userCanAddTransaction={userCanAddTransaction}
      />
      <div />

      <div className="grid grid-cols-3 gap-6">
        {/* INVESTIDO CARD */}
        <SumaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={investmentsTotal}
          size="small"
        />

        {/* RECEITA CARDS */}
        <SumaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
          size="small"
        />

        {/* DESPESA CARDS */}
        <SumaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesa"
          amount={expensesTotal}
          size="small"
        />
      </div>
    </div>
  );
};

export default SumaryCards;
