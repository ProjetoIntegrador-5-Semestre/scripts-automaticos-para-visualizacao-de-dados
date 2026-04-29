# 🚀 Como Rodar a Aplicação

## Desktop (Local)

### 1️⃣ Backend (Python + FastAPI)

```bash
cd backend
pip install -r requirements.txt
c:/python314/python.exe -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

✅ Backend: **http://localhost:8000**  
📖 Docs: **http://localhost:8000/docs**

### 2️⃣ Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

✅ App: **http://localhost:5173**

---

## 📱 Mobile (Como App Na Home Screen)

### ✨ PWA - App Instalável

A aplicação é um **PWA (Progressive Web App)** — funciona como app nativo na home screen!

### 1️⃣ Rode o frontend modo dev

```bash
cd frontend
npm run dev
```

### 2️⃣ Acesse pelo celular (mesma rede Wi-Fi)

**Encontre o IP da sua máquina:**

```powershell
ipconfig
```

Procure por **IPv4 Address** (ex: `192.168.1.42`)

**No celular, abra o navegador e acesse:**

```
http://192.168.1.42:5173
```

### 3️⃣ Instale como App

#### **Android:**

1. Abra o URL no Chrome/Firefox
2. Clique no menu ⋮ (3 pontos)
3. Selecione "Instalar app" ou "Adicionar à tela inicial"
4. Confirme

#### **iOS (Safari):**

1. Abra o URL em Safari
2. Clique no ícone de compartilhamento (caixinha com seta)
3. Selecione "Adicionar à Home"
4. Confirme

### ✅ Pronto!

- ✨ App aparece na home screen com ícone
- 🚀 Abre em fullscreen (sem barra de endereço)
- 🔌 Funciona offline (com cache básico)
- 🎯 Atalhos rápidos (Ex: abrir direto no Chat)

---

## 📦 Build para Produção

```bash
cd frontend
npm run build
# Gera pasta `dist/` pronta para deploy
```

---

## ⚙️ Troubleshooting

### "Cannot find module ui"

✅ Já corrigido — removemos os 40+ componentes UI inutilizados.

### PWA não aparece opção de instalar?

- Certifique-se de que está acessando via **http** (não localhost, use IP LAN)
- Recarregue a página (`F5`)
- Se ainda não aparecer, confira o console do navegador (DevTools)

### Frontend não conecta ao backend no celular

- Certifique-se de que está rodando: `npm run dev` (sem `--host`, usa IP automaticamente)
- Verifique se celular e PC **estão na mesma rede Wi-Fi**
- Confirme o IP correto via `ipconfig`
- Se precisar chamar backend do celular, use a mesma abordagem com IP:
  ```javascript
  const res = await fetch("http://192.168.1.42:8000/api/chat", {
    /* ... */
  });
  ```

---

## 📋 Estrutura Atual

```
.
├── backend/         # Python + FastAPI
│   ├── app/main.py  # Endpoints da API
│   └── requirements.txt
├── frontend/        # React + Vite
│   ├── src/
│   │   ├── app/     # Componentes principais
│   │   └── styles/  # Tailwind + CSS
│   └── package.json
└── README.md
```

---

## ✨ Stack Final (Simplificado)

| Camada            | Tecnologia                                     |
| ----------------- | ---------------------------------------------- |
| **Frontend**      | React 19 + TypeScript + Vite + Tailwind        |
| **Backend**       | Python 3.14 + FastAPI                          |
| **UI Components** | Tailwind + Lucide Icons (sem biblioteca extra) |
| **Gráficos**      | Recharts                                       |
| **Roteamento**    | React Router v7                                |

✅ **Sem 40+ componentes UI desnecessários!**
