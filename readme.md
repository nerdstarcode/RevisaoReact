# Projeto com React
O primeiro passo é criar o projeto, pode-se utilizar o comando:
```bash
  npx create-react-app my-app
```
Porém é uma forma muito pesada e cheia de diversas dependencias, há uma outra forma que vem ganhando força na hora de se criar um projeto em react que é o Vite.

## [Vite](https://vitejs.dev/guide/)
Uma forma de criar um projeto em react de um jeito mais limpo, mais leve e mais eficiente.
```bash
  npm create vite@latest [nomeDoProjeto]
```
| JavaScript| TypeScript | 
| :---------| :--------- | 
| `vanilla` | `vanilla`  |
| `vue`     | `vue-ts`   |
| `react`   | `react-ts` |
| `preact`  | `preact-ts`|
| `lit`     | `lit-ts`   |
| `svelte`  | `svelte-ts`|

### Passos seguintes
Primeiro:
```bash
  cd [nomeDoProjeto]
```
Segundo:
```bash
  npm install
```
E por ultimo para rodar:
```bash
  npm run dev
```


## JSX
Sintax que o react usa para criar interfaces de forma declarativa, o retorno só pode retornar um único elemento, não sendo proibido mais elementos dentro desse único, um exemplo é:
```jsx
function Test() {
  return (
    <>
      <h1>Eu sou um elemento</h1>
      <h2>Eu sou um outro elemento</h2>
    </>
  )
} 
```
No caso anterior os elementos estão envelopados por um fragment, um elemento do react que serve justamente para ajudar nesse requerimento.

Mas também é possível usar outros como `<section>` ou `<div>` ou qualquer outra tag no lugar do fragment, o importante é retornar um elemento, idependente de quantos outros se encontrem dentro dele.

Dentro deste arquivo normalmente se encontra:
- Uma função;

      Onde o retorno da função é um conteúdo html.

Ao importar a função do arquivo jsx você pode usar como se fosse uma tag no HTML


## Estrutura de um projeto React
- [Package.json](https://github.com/nerdstarcode/RevisaoReact/commit/76fbf8b33d32589ffc72b2a36c0c7f8f2ba3c896#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519)

      scripts, dependencias
- [.gitignore](https://github.com/nerdstarcode/RevisaoReact/commit/76fbf8b33d32589ffc72b2a36c0c7f8f2ba3c896#diff-bc37d034bad564583790a46f19d807abfe519c5671395fd494d8cce506c42947)

      o que será ignorado das pastas do projeto na hora de subir para com o git
- [vite.config.js](https://github.com/nerdstarcode/RevisaoReact/commit/76fbf8b33d32589ffc72b2a36c0c7f8f2ba3c896#diff-58e6f63d87181b1c6a8cb6e5f1691df04aa32854456efcd52ca71c8541375d26)

      um arquivo de configuração do vite
- src/
  - [main.jsx](https://github.com/nerdstarcode/RevisaoReact/commit/76fbf8b33d32589ffc72b2a36c0c7f8f2ba3c896#diff-752aae33033979082689dba3e7f51955013615f0535c21ac94265e067da311ed)

        Responsável por inicializar a aplicação.
  - [App.jsx](https://github.com/nerdstarcode/RevisaoReact/commit/76fbf8b33d32589ffc72b2a36c0c7f8f2ba3c896#diff-60f5dcfc15327d5dd812d9df394c217efbedb4aa33dca782ed69d39dce811972)

        Onde tem a interface já criada, pode-se colocar o conteúdo que se desejar, 
        é o centro de chamada de todos os componentes criados.

### [Estrutura "padrão" da src](https://github.com/nerdstarcode/RevisaoReact/tree/master/src)
- [pages](https://github.com/nerdstarcode/RevisaoReact/tree/master/src/pages)

      Onde se localiza todas as páginas da aplicação
      
  - Como exemplo a [Home](https://github.com/nerdstarcode/RevisaoReact/tree/master/src/pages/Home)
      
        Onde se encontra um arquivo index.jsx e sua estilização