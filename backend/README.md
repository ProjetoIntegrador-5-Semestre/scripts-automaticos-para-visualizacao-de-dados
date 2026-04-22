# Backend (Python + FastAPI)

API simples para integrar chat com IA e dados SAP.

## Requisitos

- Python 3.10+

## Instalar dependencias

```bash
pip install -r requirements.txt
```

## Executar em desenvolvimento

```bash
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

## Endpoints iniciais

- `GET /health`
- `POST /api/chat`
