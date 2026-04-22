from __future__ import annotations

import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

load_dotenv()

app = FastAPI(
    title="API - Visualizacao de Dados SAP",
    version="0.1.0",
    description="Backend simples para integrar dados SAP e IA no chat.",
)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
def chat(payload: ChatRequest) -> ChatResponse:
    # Resposta inicial para validar o fluxo frontend->backend.
    # Troque esta parte pela chamada ao provedor de IA depois.
    model_name = os.getenv("MODEL_NAME", "gpt-4o-mini")
    text = payload.message.strip()
    if not text:
        return ChatResponse(reply="Envie uma mensagem para iniciar o chat.")

    return ChatResponse(reply=f"[modelo {model_name}] Recebido: {text}")
