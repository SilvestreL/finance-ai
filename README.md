# 📊 Finance AI

Finance AI é um sistema de gestão financeira inteligente que ajuda usuários a controlar suas finanças pessoais, acompanhar transações e gerar relatórios analíticos. O projeto está desenvolvido com **Next.js**, **PostgreSQL (Neon)** e **Prisma ORM**.

## 🚀 Recursos
- 📌 Cadastro e gerenciamento de transações financeiras
- 📊 Visualização de relatórios dinâmicos
- 🔄 Integração com banco de dados PostgreSQL (Neon)
- 🌐 Interface responsiva desenvolvida em Next.js
- 🔧 API backend para gerenciamento dos dados financeiros

## 🛠️ Tecnologias Utilizadas
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** API Next.js, Prisma ORM
- **Banco de Dados:** PostgreSQL (Neon)
- **Deploy:** Vercel
- **Autenticação:** NextAuth.js (se aplicável)

## ⚙️ Configuração do Projeto

### 1️⃣ **Clonar o Repositório**
```sh
git clone https://github.com/SilvestreL/finance-ai.git
cd finance-ai
```

### 2️⃣ **Instalar Dependências**
```sh
npm install
```

### 3️⃣ **Configurar Variáveis de Ambiente**
Crie um arquivo `.env.local` na raiz do projeto e adicione:
```env
DATABASE_URL="postgresql://usuario:senha@ep-seu-host.ap-south-1.aws.neon.tech/neon?sslmode=require"
```

### 4️⃣ **Rodar as Migrações do Prisma**
```sh
npx prisma migrate deploy
```

### 5️⃣ **Iniciar o Servidor**
```sh
npm run dev
```
A aplicação rodará em `http://localhost:3000`.

## 🚀 Deploy na Vercel com Neon
1. **Criar uma conta no [Neon](https://neon.tech/)** e copiar a `DATABASE_URL`
2. **Subir o projeto no GitHub** (`git push origin main`)
3. **Fazer deploy na [Vercel](https://vercel.com/)**
4. **Adicionar `DATABASE_URL` nas variáveis de ambiente da Vercel**
5. **Rodar `npx prisma migrate deploy` na Vercel (se necessário)**

## 🤝 Contribuição
Contribuições são bem-vindas! Para contribuir:
1. **Fork** o repositório
2. Crie uma **branch** (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Minha feature'`)
4. Envie um **PR (Pull Request)**

## 📜 Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Agora o **Finance AI** está documentado e pronto para colaborações e deploy! 🚀

