
[![Build Status](https://travis-ci.com/matheusalxds/clean-react.svg?branch=master)](https://travis-ci.com/matheusalxds/clean-react)
[![Coverage Status](https://coveralls.io/repos/github/matheusalxds/clean-react/badge.svg?branch=master)](https://coveralls.io/github/matheusalxds/clean-react?branch=master)

[Imagem Clean Architecture](https://www.google.com/search?q=clean+architecture+Part+2+-+The+clean&tbm=isch&ved=2ahUKEwjsoJPvx6HxAhViNTUKHaJpC-4Q2-cCegQIABAA&oq=clean+architecture+Part+2+-+The+clean&gs_lcp=CgNpbWcQAzoECCMQJzoCCAA6BAgAEB46BggAEAgQHjoECAAQGDoECAAQE1DOogVYlMQFYNfFBWgAcAB4AIABfIgB7Q2SAQQxNC40mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=RcTMYKzqO-Lq1AGi063wDg&bih=858&biw=1732&hl=pt-BR#imgrc=tK8ptl3NaVeogM&imgdii=ClaRdnmXuC1bmM)

### Sobre Arquitetura Limpa
Infra é responsável por conter a implementação de pacotes de terceiros. Se fosse utilizado
alguma lib para validar o email, não poderíamos fazer isso na camada de `validation`, mas 
sim na camada de `infra`.

## Test double
### HttpClientSpy
  Test double é um tipo de mock, onde ele coloca um valor fake e ele cria valores auxiliares
para fazermos parações. Então é isso que o Spy faz, captura valores para poder comparar, e 
ele também coloca valores fake.

## SOLID
### I - Interface Segregation Principle
  Você deve criar interfaces segregadas, interfaces pequenas que fazem apenas uma coisa.

## Expressões regulares
### Arquivo Jest
  No arquivo jest em `moduleNameMapper` temos a seguinte expressão:
  ````
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
  ````
Porém o que cada parte quer dizer?
````
(.*)    => Tudo que está dentro de parenteses será capturado
$1      => É o resultado da caputura de (.*) 

````
### Arquivo tsconfig
  No arquivo do tsconfig, ele faz uso do `baseUrl` para conseguir modularizar os `paths`, ou seja,
ele utiliza o `baseUrl` como ponto de saída dos imports.
```
"baseUrl": "src",
"paths": {
  "@/*": ["*"]
},
```

### Arquivo webpack
```
resolve: {
 ...,
 alias: {
    '@': path.join(__diname, 'src') => especifica para o webpack como encontrar os arquivos que
 }                                     tem o @
}
```

### Validations
Detalhes específicos do validador, vem no construtor, por exemplo: O tamanho do MinLength, se 
fosse para comparar dois campos como ComparePassword, o campo de validação deverá vir no
construtor.

### Npm-check
Auxilia na hora de verificar atualizações referentes aos packages utilizados no projeto.
````
-s = skip nas bibliotecas que diz que não estamos utilizando através de imports, mas estão
sendo utilizados
-u = Abre em modo iterativo, mostra quais queremos atualizar
````

### Cypress
Responsável pelos teste E2E.

Para utilizar Cypress com Typescript, precisamos instalar um plugin, podemos encontrar o exemplo
[aqui](https://docs.cypress.io/guides/tooling/typescript-support#Set-up-your-dev-environment).

Para configurar o eslint + cypress, você pode encontrar as informações
[aqui](https://github.com/cypress-io/eslint-plugin-cypress#readme).

Para configurar o webpack preprocessor, você pode encontrar as informações
[aqui](https://github.com/cypress-io/cypress/tree/master/npm/webpack-preprocessor#readme).

[Mais informações aqui](https://docs.cypress.io/guides/references/configuration#cypress-json).
