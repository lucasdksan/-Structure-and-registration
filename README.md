# -Structure-and-registration :floppy_disk:

## Explicação:

Este projeto se concentra na simulação de um sistema de registro e verificação de usuário.
Foi feito inteiramente em Node js e usando a linguagem JavaScript, além disso, o banco de dados utilizado foi o Mongo DB.
Outro ponto sobre esse trabalho é relacionar projetos com o usuário registrado. Como o sistema tem essas funções, é natural ter a função de recuperação/troca_de_senha mandando e-mail para o usuário.

## Estrutura:

Esse projeto possui uma divisão de pasta padrão:

* [ ] app
* [ ] config
* [ ] database
* [ ] modules
* [ ] resources
* [ ] index.js

### APP:

É a pasta que contém os arquivos responsáveis por organizar as informações no banco de dados e por estruturá-lo. Além disso, contém os comandos que estão vinculados às rotas quando há troca de informações.
Essa pasta contém três pastas: 
  * controllers "Contém as regras de negócios do sistema"
  * middlawer   "Arquivo sobre a estrutura de verificação de token"
  * modules     "Estrura das tabelas do banco de dados da aplicação."
 
### Config:

  Contém os arquivos JSON sobre a "chave" para o token e as informações para conectar com o mailtrap.
 
### Database:

  Possui o arquivo que faz a conexão ao banco de dados.
  
### Modules:

  Tem o arquivo que faz a conexão com o sistema do mailtrap. Esse arquivo representa a conexão padrão para poder enviar o email de recuperação de senha.
  
### Resources:
  
  Contém o arquivo em HTML que possui o token para recuperar a senha.
  
### index.js:

  Arquivo principal das rotas do sistema.
