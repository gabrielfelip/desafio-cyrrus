# 👶 Sistema de Acompanhamento de Vacinação Infantil

Este projeto foi desenvolvido como parte de um desafio técnico utilizando **Ionic Framework com Angular**.

O objetivo da aplicação é simular uma plataforma digital para acompanhamento da jornada de vacinação infantil, substituindo a carteira física de vacinação e facilitando o controle por parte dos responsáveis.

---

## 🚀 Funcionalidades

### 👶 Gestão de Crianças
- Cadastro de crianças
- Listagem de crianças
- Remoção de registros
- Visualização individual por criança

---

### 💉 Controle de Vacinação
- Registro de vacinas por criança
- Associação de vacinas ao calendário infantil
- Marcação de vacinas aplicadas
- Status automático:
  - ✔ Aplicada
  - 🟡 Pendente
  - 🔴 Atrasada

---

### 📊 Dashboard
- Total de crianças cadastradas
- Quantidade de vacinas pendentes
- Quantidade de vacinas atrasadas

---

### 🚨 Campanhas de Vacinação
- Identificação de crianças em situação de risco
- Agrupamento por nível de criticidade
- Visualização de vacinas atrasadas e pendentes
- Ordenação por prioridade

---

### 💉 Vacinas
- Listagem de vacinas disponíveis
- Idade recomendada por vacina
- Relacionamento com histórico vacinal

---

## 🎨 Interface & UX

A interface foi construída com foco em simplicidade e clareza, utilizando uma paleta de cores obrigatória:

- Verde: `#ABC270`
- Amarelo: `#FEC868`
- Laranja/Vermelho: `#FDA769`
- Texto escuro: `#473C33`

A aplicação foi pensada para ser responsiva, funcionando em dispositivos móveis e desktop.

---

## 🧠 Decisões de Produto

- Separação clara entre crianças e histórico vacinal
- Cálculo automático de status vacinal
- Agrupamento por criticidade para campanhas
- Foco em leitura rápida da situação de cada criança
- Estrutura simples para facilitar escalabilidade

---

## 🛠️ Tecnologias Utilizadas

- Ionic Framework
- Angular
- TypeScript
- HTML / SCSS
- Arquitetura baseada em serviços

---

## 📂 Estrutura do Projeto

```bash
📦 src
 ┣ 📂 app
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 dashboard
 ┃ ┃ ┣ 📂 children
 ┃ ┃ ┣ 📂 child-detail
 ┃ ┃ ┣ 📂 vaccines
 ┃ ┃ ┗ 📂 campaigns
 ┃ ┣ 📂 services
 ┃ ┗ 📂 data
```
---
## ▶️ Como executar o projeto

```bash
npm install
ionic serve
```
---

## 📌 Observações

Este projeto foi desenvolvido com foco em:

- Organização de código
- Pensamento de produto
- Experiência do usuário
- Clareza visual
- Estrutura escalável

---

## 📈 Possíveis melhorias futuras
- Integração com Firebase
- Autenticação de usuários
- Banco de dados real
- Notificações de vacinas atrasadas
- Exportação de carteira de vacinação

---

## 👨‍💻 Autor

Desenvolvido como parte de um desafio técnico de estágio em desenvolvimento front-end.

