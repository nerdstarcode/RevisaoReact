# Projeto com React

## [Vite](https://vitejs.dev/guide/)
Uma forma de criar um projeto em react de um jeito mais limpo, mais leve e mais eficiente.
```
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
```
  cd [nomeDoProjeto]
```
Segundo:
```
  npm install
```
E por ultimo para rodar:
```
  npm run dev
```

## JSX
Sintax que o react usa para criar interfaces de forma declarativa

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

        Onde tem a interface já criada, pode-se colocar o conteúdo que se desejar, é o centro de chamada de todos os componentes criados.
        