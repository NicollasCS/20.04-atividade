## Projeto: Sistema de Gestão "Lanches & Cia"

**1. Contextualização**
- *A lanchonete Lanches & Cia está em expansão e enfrenta dificuldades para gerenciar seus pedidos manuais. Atualmente, a perda de comandas de papel e a demora no fechamento de contas têm gerado insatisfação nos clientes. Para resolver isso, é necessária a criação de um sistema centralizado que integre o atendimento, a cozinha e o caixa.*

**2. Objetivo**
- *Desenvolver uma aplicação funcional que permita o controle total do fluxo de pedidos, desde a entrada do cliente até a emissão do pagamento final.*

**3. Requisitos Funcionais** *(O que o sistema deve fazer)*
- *Gestão de Cardápio:*
  - *Cadastrar itens.*
  - *Editar itens.*
  - *Excluir itens.*
  - *(Nome, Categoria, Descrição e Preço).*

- *Marcar itens como "Indisponível" caso os ingredientes acabem.*

- *Controle de Pedidos:*
  - *Registrar pedidos vinculados a uma mesa ou ao nome de um cliente (para retirada).*
  - *Adicionar observações por item (ex: "Sem cebola").*

- *Módulo de Produção (Cozinha):*
  - *Visualizar uma fila de pedidos pendentes em ordem cronológica.*
  - *Alterar o status do pedido para "Em Preparo" ou "Pronto".*

- *Caixa e Pagamento:*
  - *Calcular o valor total do pedido automaticamente (valor dos produtos + 27%).*
  - *Gerar um resumo da conta e permitir o fechamento com diferentes métodos de pagamento (Dinheiro, Cartão, PIX).*

**4. Requisitos Não Funcionais** *(Qualidade e Performance)*
- *Interface: Deve ser intuitiva e adaptada para uso em tablets ou monitores touch screen.*

- *Persistência: Todos os dados devem ser armazenados em um banco de dados (relacional ou não relacional).*

- *Segurança: O sistema deve exigir login para diferenciar o acesso do Atendente, Cozinheiro e Gerente.*