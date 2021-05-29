# Teste Allied

## Sobre

Teste Allied se trata de uma aplicação web que possibilita a simulação de compra de pacotes de internet, com a escolha de plataforma e plano desejado, ao final um pequeno formulário que contém validação e para ver se tudo deu certo basta acessar o console que apresentará todas as informações preenchiadas e selecionadas.

### Instalação

- Clone o projeto.
- Execute o comando no terminal "yarn install" ou "yarn".
- Execute o comando "yarn dev".

## Organização do projeto

### Components

> Pasta responsável por guardar todos os componentes globais para que haja um reaproveitamento de código.

### Constants

> Pasta responsável por guardar arquivos de constantes, no projeto foi usado o exemplo de salvar as cores principais do projeto.

### Context

> Pasta responsável por guardar arquivos de gerenciamento de estado global, através do context api do React.

### Models

> Pasta responsável por guardar arquivos com interfaces das respostas de API e funções responsáveis pelo modelamento dos objetos na respostas.

### Pages

> Pasta responsável por guardar as páginas do projeto.

### Public

> Pasta responsável por guardar os assets do projeto, criada automáticamente pelo Next.

### Services

> Pasta responsável por guardar as requisições feitas nas APIs.

### Style

> Pasta responsável por guardar o estilo global do projeto, criada pelo Next.

## Techs

### Framework

- React
- Next

### Style

- styled-components
- @material-ui/core
- react-icons

### Bibliotecas/Funcionalidades para guardar dados

- context-api

### Controle de formulário

- formik
- yup
- react-input-mask

### Outros

- typescript
- eslint
- prettier
