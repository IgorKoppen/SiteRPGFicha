# FichaOnline-RPG-Tormenta

Bem-vindo ao projeto FichaOnline-RPG-Tormenta! Este projeto é uma aplicação web para criar e gerenciar fichas de personagens do RPG Tormenta. O foco é facilitar o gerenciamento de atributos, habilidades, perícias e equipamentos dos personagens.

## Estrutura do Projeto

### Diretórios e Arquivos

- **assets**: Contém imagens e arquivos CSS.
- **components**: Componentes reutilizáveis do projeto.
- **modulos**: Módulos JavaScript que contêm a lógica do domínio de personagens e fichas.
- **Main.js**: Arquivo principal da aplicação que gerencia a renderização e interações.

## Classes Principais

### AtributosPersonagem

Esta classe gerencia os atributos principais do personagem, como força, destreza e inteligência, permitindo o cálculo de modificadores.

### Ficha

A classe Ficha encapsula todas as informações necessárias de um personagem, incluindo nome, nível, raça, e suas composições para atributos, vida e mana.

### Pericias

Gerencia as perícias do personagem, calculando o total baseado em treino, nível e outros modificadores.

### FichaView

Cuida da renderização da ficha no HTML e interações do usuário com o formulário.

### PericiaView

Gerencia a exibição e atualização das perícias na interface.

## Funcionalidades

- **Gerenciamento de Atributos**: Insira e manipule os valores dos atributos.
- **Cálculo Automático de Modificadores**: Automaticamente calcula modificadores baseados nos valores de atributos.
- **Controle de Vida e Mana**: Gerenciamento dos pontos de vida e mana do personagem.
- **Gerenciamento de Atacques e Defesa**: Controle dos ataques, defesas e equipamentos.
- **Manuseio de Perícias**: Atualize e exiba as perícias do personagem, calculando totais baseados em treino e modificadores.

## Como Configurar

1. Clone o repositório: 
   ```sh
   git clone <URL_do_repositório>
   ```

2. Navegue para o diretório do projeto: 
   ```sh
   cd FichaOnline-RPG-Tormenta
   ```

3. Abra o arquivo `index.html` em seu navegador para testar a aplicação.

## Tecnologias Utilizadas

- HTML5 e CSS3
- JavaScript ES6+
- Módulos JavaScript
