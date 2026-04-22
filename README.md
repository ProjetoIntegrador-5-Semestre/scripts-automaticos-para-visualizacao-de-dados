# Projeto Faculdade - Visualizacao de Dados SAP

Estrutura inicial simples e multiplataforma para:

- Frontend em React (Vite)
- Backend em Python (FastAPI)
- Base pronta para integrar chat com IA

## Estrutura

```text
.
|-- backend/
|   |-- app/
|   |   |-- __init__.py
|   |   `-- main.py
|   |-- .env.example
|   |-- README.md
|   `-- requirements.txt
|-- frontend/
|   |-- src/
|   `-- package.json
`-- README.md
```

## Como rodar

### 1) Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend padrao em `http://localhost:5173`.

### 2) Backend (Python)

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Backend padrao em `http://127.0.0.1:8000`.

## Endpoints iniciais

- `GET /health` para checar se a API subiu
- `POST /api/chat` para validar fluxo de chat (resposta simples)

Quando voce colar o codigo do Figma no frontend, ajustamos os componentes e conectamos no endpoint de chat.
