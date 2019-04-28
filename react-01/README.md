# Criando rotas com React
Utilizando React, React-Router e testes unitário, você irá criar uma interface para listagem, filtro e visualização de receitas

## Tópicos
Com esse desafio, você aprenderá:

- React
- ES6
- Javascript
- Testes unitários
- Criação de rotas
- Rotas dinâmicas

## Requisitos
Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

## Detalhes
Dentro da pasta `src`, você encontrará a estrutura básica do projeto React, todos arquivos necessários já estão criados assim como a estrutura em relação a `HTML` e `CSS`. Sua missão será criar a lógica dos componentes para deixá-lo dinâmico.

Dentro da pasta `sample_data`, você terá uma listagem de receitas que deverá ser impressa na tela.

**DICA:** Aproveite o código desenvolvido no desafio anterior para facilitar a implementação

### Tarefas
1. No endpoint `/`, Renderizar dinâmicamente o componente `RecipeItems` para todos os elementos dentro dos dados de amostra;
2. No endpoint `/:searchString` deverá executar o filtro das receitas baseada no parametro passado, ex.: `/queijo` deverá trazer apenas receitas que tem queijo no nome ou nos ingredientes;
3. No endpoint `/:searchString` o parametro inserido deverá ser mostrado no componente `Navbar` como filtro da busca, ex.: O usuário acessa `/queijo`, no `Navbar input` deverá mostrar `queijo`;
4. Ao digitar um texto no `input` dentro do componente de filtro do `Navbar` a url deverá ser atualizada, ex.: Caso o usuário digite `queijo` no `input` a url deverá ser `/queijo` (a mudança deve ser feita a cada tecla digitada);
5. O filtro deverá ser `case insensitive`;
6. Quando o usuário clicar em uma receita deverá ser redirecionado para `/recipe/:slugify(recipe.title)`, o método slugify está dentro do módulo `src/helpers.js`, ex.: Usuário clica na receita `Torta de laranja` e deverá ser redirecionado para `/recipe/torta-de-laranja`.

**Dicas:**
- O App nesse momento não precisa mais do `state`, pois a rota poderá controlar o estado da busca
- `withRouter` do React-Router pode ser útil [Doc](https://reacttraining.com/react-router/web/api/withRouter)
- Pode utilizar o `exact` para rotas que se sobrescrevem [Doc](https://reacttraining.com/react-router/web/api/Route/exact-bool)

### Exemplo
![](https://thumbs.gfycat.com/ClassicDifficultAnnelid-small.gif)

### Atenção
- NÃO MUDE o nome dos componentes, eles são utilizados para a realização dos testes.
- Os testes do exercício anterior não serão validados novamente

## Rodando a aplicação
Na primeira execução rodar o comando:
```
npm install
```
Para rodar a aplicação:
```
npm start
```
