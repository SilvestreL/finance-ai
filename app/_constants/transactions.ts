import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentaçao",
  HEALTH: "Saúde",
  HOUSING: "Habitaçao",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTIONS_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferencia Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const TRANSACTIONS_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Receita",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTIONS_PAYMENT_METHOD_LABELS[
        TransactionPaymentMethod.BANK_TRANSFER
      ],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label:
      TRANSACTIONS_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTIONS_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTIONS_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTIONS_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTIONS_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTIONS_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
  },
];
