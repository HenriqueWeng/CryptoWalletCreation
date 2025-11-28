# 🪙 Bitcoin Testnet Wallet Generator

<div align="center">

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Bitcoin](https://img.shields.io/badge/Bitcoin-000000?style=for-the-badge&logo=bitcoin&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

<br />

Aplicação desenvolvida em **Node.js** para gerar carteiras HD (Hierarchical Deterministic) compatíveis com a **Bitcoin Testnet**. O projeto implementa padrões modernos da indústria, focando em endereços **Native Segwit (Bech32)**.

---

## 🚀 Funcionalidades

- **Geração de Mnemonic Seed (BIP-39):** Criação de frase de recuperação de 12 palavras.
- **Padrão Moderno (BIP-84):** Derivação de chaves focada em endereços Segwit nativos.
- **Economia:** Gera endereços de teste (`tb1...`), que possuem taxas de transação menores.
- **Interoperabilidade:** Totalmente compatível para importação e testes no software **Electrum Wallet**.

---

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza as bibliotecas padrão do ecossistema Bitcoin em JavaScript:

| Biblioteca | Função |
| :--- | :--- |
| `bitcoinjs-lib` | Manipulação principal de transações, redes e endereços Bitcoin. |
| `bip39` | Geração de entropia e conversão para frase mnemônica. |
| `bip32` | Derivação de chaves hierárquicas (HD Wallets). |
| `tiny-secp256k1` | Criptografia de Curva Elíptica (dependência essencial do bip32). |

---

## 📦 Instalação e Uso

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 1. Instalação
Clone o repositório (ou baixe os arquivos) e instale as dependências:

```bash
# Instalar dependências necessárias
npm install bitcoinjs-lib bip39 bip32 tiny-secp256k1
```

### 2. Execução
Para gerar uma nova carteira, execute o arquivo principal no terminal:

```bash
node index.js
```

### 3. Exemplo de Saída
O console retornará os dados sensíveis da carteira gerada:

```text
--- Carteira Moderna (Segwit) ---
Endereço:  tb1q5tz8q5rsg3v4s8y2l3t2qmfvcdmqdypnnlyulw
Chave privada (WIF): cPUhY57dEV8wXPd4bEDX1g39KWgaoFKGjYNaTmTjLgppo27ZB9os
Seed: army van defense carry jealous true garbage claim echo media make crunch
```

---

## 🔌 Guia de Integração: Electrum Wallet

Para validar a carteira gerada, você pode importá-la no software Electrum rodando na rede de testes (Testnet).

(Caso voce nao tenha o elctrum basta baixar atraves do site: [Electrum](https://electrum.org/#download)



### Passo 1: Configurar o Electrum para Testnet (Windows)
O Electrum roda na rede principal (Mainnet) por padrão. Para mudar:

1.  Clique com o botão direito no ícone/atalho do Electrum.
2.  Selecione **Propriedades**.
3.  No campo **Destino** (Target), adicione um espaço e o texto `--testnet` ao final do caminho.
    * *Exemplo:* `"C:\Program Files\Electrum\electrum.exe" --testnet`
4.  Salve e execute o programa. Você verá a janela como na imagem abaixo:

<div align="center">
  <img width="537" height="470" alt="image" src="https://github.com/user-attachments/assets/0da4e0a5-87d0-4ba4-bf3b-724926b3f9c1" />
</div>

### Passo 2: Importar a Carteira

1.  No Electrum, vá em **Arquivo > Novo/Restaurar**.
2.  Dê um nome ao arquivo da carteira e avance.
3.  Escolha a opção **"Importar endereços ou chaves privadas"**.
4.  Cole a chave WIF gerada pelo seu script.

> **⚠️ Importante:** Para que o Electrum reconheça o formato Segwit Nativo (`tb1...`), você deve adicionar o prefixo `p2wpkh:` antes da chave.

**Exemplo de como colar no Electrum:**
```text
p2wpkh:cPUhY57dEV8wXPd4bEDX1g39KWgaoFKGjYNaTmTjLgppo27ZB9os
```

Isso garante que o endereço gerado no Electrum seja idêntico ao gerado pelo seu código Node.js.

---

## ⚠️ Aviso de Segurança e Responsabilidade

> **Este código foi desenvolvido estritamente para fins educacionais.**

1.  **Rede de Testes:** As chaves geradas destinam-se à **Bitcoin Testnet**.
2.  **Não use na Mainnet:** A entropia (aleatoriedade) gerada pode não ser segura o suficiente para proteger fundos reais. Nunca utilize estas chaves para guardar Bitcoin real.
3.  **Segurança Local:** As chaves são exibidas no console; em um ambiente de produção real, cuidados adicionais com a memória e exibição de dados seriam necessários.

---

## 👨‍💻 Autor

**Henrique Weng**

Desenvolvido durante estudos sobre Blockchain, Criptografia e Bitcoin Scripting.
