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
