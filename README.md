# Finance AI - Documentação Oficial
**Um sistema financeiro inteligente com integração de IA, autenticação robusta e pagamentos via Stripe.**

## Imagens do projeto
<div style="
    display: flex; 
    flex-wrap: wrap; 
    gap: 15px; 
    justify-content: center; 
    align-items: center;
    max-width: 100%;
    margin: auto;
">
  <img src="https://github.com/SilvestreL/finance-ai/blob/main/public/telaInicial.png?raw=true" 
       alt="Tela Inicial" width="300" style="border-radius: 8px; flex-grow: 1;">

  <img src="https://github.com/SilvestreL/finance-ai/blob/main/public/transacoes.png?raw=true" 
       alt="Transactions" width="300" style="border-radius: 8px; flex-grow: 1;">

  <img src="https://github.com/SilvestreL/finance-ai/blob/main/public/planos.png?raw=true" 
       alt="Subscribe" width="300" style="border-radius: 8px; flex-grow: 1;">

  <img src="https://github.com/SilvestreL/finance-ai/blob/main/public/stripe.png?raw=true" 
       alt="Stripe" width="300" style="border-radius: 8px; flex-grow: 1;">

  <img src="https://github.com/SilvestreL/finance-ai/blob/main/public/Relatorio.IA.png?raw=true" 
       alt="Relatório IA" width="300" style="border-radius: 8px; flex-grow: 1;">

  <img src="https://github.com/SilvestreL/finance-ai/blob/main/public/criarTransacao.png?raw=true" 
       alt="Add transaction" width="300" style="border-radius: 8px; flex-grow: 1;">
</div>


---

## 🚀 Visão Geral

O **Finance AI** é um sistema financeiro moderno que combina **inteligência artificial**, **gestão de transações**, **autenticação segura** e **pagamentos recorrentes**. Ele foi desenvolvido com **Next.js (App Router)** e integra tecnologias como **Stripe, Clerk, Prisma, Docker, Webhooks, e Zod** para garantir uma experiência fluida e segura.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia                  | Descrição                                                          |
| --------------------------- | ------------------------------------------------------------------ |
| **Next.js 14 (App Router)** | Framework full-stack do React para SSR e otimização de performance |
| **Next Auth & Clerk**       | Gerenciamento de autenticação de usuários e permissões             |
| **Prisma ORM**              | Manipulação de banco de dados com TypeScript e PostgreSQL          |
| **PostgreSQL**              | Banco de dados relacional escalável                                |
| **Stripe**                  | Pagamentos online e assinatura recorrente                          |
| **Zod**                     | Validação de dados tipados para segurança nas requisições          |
| **ShadCN/UI**               | Componentes UI acessíveis e estilizados com Tailwind               |
| **Docker**                  | Gerenciamento de ambientes e banco de dados via containers         |
| **Webhooks**                | Comunicação assíncrona entre serviços externos                     |
| **Tailwind CSS**            | Estilização moderna e responsiva                                   |
| **Vercel**                  | Hospedagem otimizada para aplicações Next.js                       |

---

## 🛠️ Configuração do Ambiente

### 1️⃣ Clonar o repositório

```sh
git clone http://github.com/SilvestreL/finance-ai
cd finance-ai
```

### 2️⃣ Criar e configurar o arquivo `.env.local`

```env
# Banco de Dados
DATABASE_URL="postgresql://postgres:password@localhost:5433/finance-ai"

# Stripe
STRIPE_SECRET_KEY="sk_live_xxx"
STRIPE_WEBHOOK_SECRET="whsec_xxx"

# Clerk
NEXT_PUBLIC_CLERK_FRONTEND_API="clerk.xxx"
CLERK_SECRET_KEY="sk_xxx"

# Configuração do NextAuth
NEXTAUTH_SECRET="your_secret_key"

# URL da aplicação
APP_URL="https://your-deployed-app.vercel.app"
```

### 3️⃣ Rodar o banco de dados via Docker

```sh
docker compose up -d
```

### 4️⃣ Aplicar as migrações do Prisma

```sh
npx prisma migrate deploy
```

### 5️⃣ Iniciar a aplicação

```sh
npm run dev
```

---

## 🔑 Autenticação com Clerk e NextAuth

```tsx
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export function middleware(req) {
  const { userId } = auth();
  if (!userId) return NextResponse.redirect("/login");
  return NextResponse.next();
}
```

---

## 💰 Pagamentos e Assinaturas com Stripe

```tsx
const session = await stripe.checkout.sessions.create({
  success_url: `${process.env.APP_URL}/success`,
  cancel_url: `${process.env.APP_URL}/cancel`,
  line_items: [{ price: "price_xxx", quantity: 1 }],
  mode: "subscription",
});
```

---

## 🔄 Webhooks

```tsx
import { buffer } from "micro";
import Stripe from "stripe";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    console.log("Pagamento confirmado:", event.data.object);
  }

  res.json({ received: true });
}
```

---

## 🗄️ Banco de Dados com Prisma e PostgreSQL

```prisma
model Transaction {
  id        String   @id @default(uuid())
  userId    String
  amount    Decimal
  type      String
  createdAt DateTime @default(now())
}
```

```tsx
const transactions = await prisma.transaction.findMany({
  where: { userId: session.userId },
  orderBy: { createdAt: "desc" },
});
```

---

## 🎨 UI Moderna com ShadCN e Tailwind

```tsx
import { Button } from "@/components/ui/button";

<Button variant="ghost" onClick={handleClick}>
  Gerar Relatório
</Button>;
```

---

## 📊 Relatórios de IA com OpenAI

```tsx
const response = await fetch("https://api.openai.com/v1/completions", {
  method: "POST",
  headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
  body: JSON.stringify({
    model: "gpt-4",
    prompt: `Analise estas transações e sugira melhorias: ${JSON.stringify(transactions)}`,
  }),
});
const data = await response.json();
console.log("Sugestões da IA:", data.choices[0].text);
```

---

## 🚀 Conclusão

O **Finance AI** combina tecnologias modernas como **Next.js, Prisma, Stripe, Clerk, Webhooks e OpenAI** para criar um sistema financeiro inteligente, escalável e seguro.

🔹 **Principais diferenciais:**

- **Autenticação segura com Clerk**
- **Pagamentos recorrentes via Stripe**
- **Banco de dados com Prisma e PostgreSQL**
- **Relatórios automáticos com OpenAI**
- **Interface moderna com ShadCN e Tailwind**

🎯 **Ideal para demonstrar em entrevistas e mostrar domínio de tecnologias avançadas.**

---

🔗 **Repositório:** [Finance AI - GitHub](http://github.com/SilvestreL/finance-ai)
