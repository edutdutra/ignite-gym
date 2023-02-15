# Ignite Gym

Aplicativo mobile feito com react native

Principais Features: 
- Sistema de login com autenticação JWT e utilizando refresh token quando expirado.
- Tela home com a lista dos exercícios disponiveis para fazer
- Ao apertar em alguns dos exercícios ele abre uma tela com mais detalhes do exercício
- Tela de histórico para visualizar quando e quais exercícios foram feitos
- Tela de perfil para alterar dados do usuário, como por exemplo, foto de perfil, nome e senha

Recursos Utilizados:
- Utilizado componentes para estilização da lib: native-base
- Utilizado 2 métodos de navegação: bottom-tabs e stack
- Utilizado validação de formulários com react-hook-form e yup
- Utilizado axios para requisições da API
- Utilizado @react-native-async-storage/async-storage para manipulação de dados no Storage
- Utilizado Context API do próprio React para compartilhamento de dados globalmente entre componentes
- API utilizada: https://github.com/rodrigorgtic/ignitegym-api