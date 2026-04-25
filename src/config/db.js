const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'lanchonete_db',
})

async function initDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS cardapio (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      categoria TEXT NOT NULL,
      descricao TEXT NOT NULL DEFAULT '',
      preco NUMERIC NOT NULL,
      disponivel BOOLEAN NOT NULL DEFAULT true,
      criado_em TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `)

  await pool.query(`
    CREATE TABLE IF NOT EXISTS pedidos (
      id SERIAL PRIMARY KEY,
      mesa TEXT,
      cliente TEXT,
      itens JSONB NOT NULL DEFAULT '[]',
      observacao TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'Pendente',
      metodo_pagamento TEXT,
      total NUMERIC NOT NULL DEFAULT 0,
      criado_em TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `)
}

module.exports = {
  query: (text, params) => pool.query(text, params),
  initDatabase,
  pool,
}
