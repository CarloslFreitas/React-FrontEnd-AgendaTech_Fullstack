# Descrição
Uma aplicação construida em ReactJs e estilizado em Styled-Components e bem componentizado, com a proposta de realizar cadastros de N usuários no qual os mesmo possam se cadastrar e fazer o login para acessarem sua Agenda Tech, onde poderão salvar N contatos, editar e excluir a vontade, além de ter a possibilidade de exportar a lista de Contatos em PDF caso necessário. Possui proteção de rotas para garantir que certas paginas e interações ocorram apenas se estiver logado além de possui o AutoLogin, que salva o estado do usuário como logado enquanto permanecer logado sem ter saido da conta.

Será possível também editar as informações do Perfil do usuário além de poder deletar a própria conta caso queira.

## Instalação
Utilize o comando abaixo para a instalação dos pacotes de dependências necessárias para a correta inicialização do projeto
```bash
$ npm install
```

## Iniciando a Aplicação
Após a instalação das dependências, utilize o comando seguinte para iniciar a aplicação localmente.
```bash
$ npm run dev
```
Obs: A rota padrão disponibilizada pelo React da aplicação quando rodado localmente é: `http://localhost:5173`

## Layout e Features
Layout simples e bonito visando o minimo sem poluição visual, possui leves animações e loadings personalisados.


## Login Page
Foi utilizado a biblioteca Zod para a validação dos formulários existentes na aplicação para garantir que os dados sejam enviados corretamente.

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/047d5cdb-f7ac-424c-a7a4-f6532fcabff0)

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/755c39f4-c5e5-401f-a4e1-23df48a59c91)

Possui também a biblioteca Toastify para entregar melhor visualização das respostas de interação do usuário e a aplicação, retornando caixas de dialogos orientando e alertando de forma dinâmica os erros e acertos.

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/fe7a5409-3c8b-44b9-8021-dca883ad8746)

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/8e309861-8713-4316-a14f-8a7d5285701c)

## Register Page
Assim como o Login page, também foi utilizado o Zod para a validação dos dados informado pelo usuário.

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/a9c01d5d-bea2-401b-9cba-a26720f588d7)

## Home Page
Apresenta um layout simplista e bonito com algumas animações leves. 

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/7a1c29e1-7837-430b-ade2-749f706fde3f)

Possui a lista de contato onde será visualizado todos os contatos registrado pelo usuário. Possui 5 Modais no total os quais servem para Visualizar os Dados do Perfil, Editar os Dados do Perfil, Exibir a Lista de contato para a exportação, Criação de Contatos e Edição dos Contatos.

Obs: Para abrir o modal de edição/exclusão de contatos, basta clica em 1 dos itens de contato da lista.

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/80608a23-9c05-4bda-a65c-2a7f57a8ef3b)
![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/495edf47-f15c-4e7a-affb-187b73770ae9)

É possível atravez desse modal exportar em PDF todos os contatos registrado na conta, basta clicar no botão 'exportar contatos' e escolher o local para salvar o arquivo.

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/a4d4ebcc-20af-43f5-980c-d70b2867c8fb)
![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/bfd0ee67-1762-43b5-ba87-af21fc4e5716)

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/84218be9-d064-4975-8337-445a47454d85)
![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/5f824321-cbf4-48e5-9ef2-8a8a3c609810)
![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_frontend_CarloslFreitas/assets/37638947/8ced3c22-5115-48bd-9ee8-202bab8c9cc2)






# M6-Fullstack-Tech_frontend_CarloslFreitas
