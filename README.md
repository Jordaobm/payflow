<h1 align="center">
  <img alt="payflow" title="payflow" src="https://github.com/Jordaobm/payflow/blob/master/doc/LOGO.png" width="300px" />
</h1>

<h4 align="center"> 
	🚧  Em fase de testes 🚀 em desenvolvimento de novas features...  🚧
</h4>

<h1 align="center">
   <img alt="react" title="react" src="https://github.com/Jordaobm/payflow/blob/master/doc/react.svg" width="70px" />
   
  <a href="https://github.com/Jordaobm/payflow/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Jordaobm/payflow"></a>
  <a href="https://github.com/Jordaobm/payflow/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Jordaobm/payflow"></a>
  <a href="https://github.com/Jordaobm/payflow/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Jordaobm/payflow"></a>
  <a href="https://github.com/Jordaobm/payflow"><img alt="GitHub license" src="https://img.shields.io/github/license/Jordaobm/payflow"></a>
  <a href="https://twitter.com/JordoMass"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social"></a>
</h1>

🚀 Uma aplicação para gerenciamento de boletos e contas. 📄


### Features

- [x] Login com o Google 
- [x] Cadastro de usuário
- [x] Inserção de boletos para pagamento
- [x] Alteração do status do boleto para "PAGO" 
- [x] Exclusão do boleto 
- [x] Listagem dos boletos personalizada 
- [x] Boletos recorrentes que se auto revalidam
- [ ] Notificações ao usuário de quando um boleto esta prestes a vencer

### Demonstração de uso

🌐 Entre com sua conta Google

<h1 align="center">
  <img alt="Login" title="Login" src="https://github.com/Jordaobm/payflow/blob/master/doc/01.png" width="500px" />
</h1>

🏠 Na tela Home da aplicação serão listados os seus boletos pendentes de pagamento (caso possua algum)

<h1 align="center">
  <img alt="Home" title="Home" src="https://github.com/Jordaobm/payflow/blob/master/doc/02.png" width="500px" />
</h1>

Para adicionar um boleto, clique no icone em destaque + na barra de navegação do aplicativo e você será levado até a página de inserção 
de boletos

<h1 align="center">
  <img alt="Novo boleto" title="Novo boleto" src="https://github.com/Jordaobm/payflow/blob/master/doc/03.png" width="500px" />
</h1>

Ao adicionar, você será levado de volta à tela Home, onde será listado o boleto recém adicionado

<h1 align="center">
  <img alt="Home" title="Home" src="https://github.com/Jordaobm/payflow/blob/master/doc/04.png" width="500px" />
</h1>

Clicando no boleto, você terá acesso às opções de ação disponíveis para o boleto selecionado.

<h1 align="center">
  <img alt="Ações sobre o boleto" title="Ações sobre o boleto" src="https://github.com/Jordaobm/payflow/blob/master/doc/05.png" width="500px" />
</h1>

Quando você marcar boletos como "pagos", eles não serão mais listados em sua página home. No entanto serão listados na página de extratos, onde você
poderá conferir os boletos que já foram marcados como pagos. 

<h1 align="center">
  <img alt="Extrato" title="Extrato" src="https://github.com/Jordaobm/payflow/blob/master/doc/06.png" width="500px" />
</h1>

❌ Boletos que já vencerão ou estão no dia do vencimento e ainda não foram pagos serão destacados em vermelho.

<h1 align="center">
  <img alt="Extrato" title="Extrato" src="https://github.com/Jordaobm/payflow/blob/master/doc/07.png" width="500px" />
</h1>

✅ Caso você tenha um boleto que é recorrente, ou seja, que terá que ser pago todo mês, na inserção do boleto você poderá marcá-lo como recorrente.
Boletos recorrentes tem funcionamentos diferentes dos boletos "comuns". Boletos recorrentes serão listados na sua tela Home mesmo se já estiverem pagos,
pois a ideia é sempre lembrar o usuário de que aquele boleto está ali e que terá de ser pago novamente no próximo mês. Além disso, quando marcados como pagos, e 
o mês atual for maior que a data de vencimento, eles serão automaticamente atualizados para vencimento no mês corrente e terão seu status alterado para não pago. 
⚠️ Alerta !!! Boletos recorrentes aparecerão apenas uma vez na sua tela de extrato... sendo assim, a tela de extrato servindo apenas para listar os boletos pagos,
não servindo como base para calculos com base em boletos já pagos.

<h1 align="center">
  <img alt="Boleto Recorrente" title="Boleto Recorrente" src="https://github.com/Jordaobm/payflow/blob/master/doc/08.png" width="500px" />
</h1>

Boletos recorrentes terão a tag "recorrente" para identificá-los

<h1 align="center">
  <img alt="Boleto Recorrente" title="Boleto Recorrente" src="https://github.com/Jordaobm/payflow/blob/master/doc/09.png" width="500px" />
</h1>

Eles permancerão na sua tela Home mesmo tendo status de pago. Aguardando o mês correr para que se auto revalidem.

<h1 align="center">
  <img alt="Boleto Recorrente" title="Boleto Recorrente" src="https://github.com/Jordaobm/payflow/blob/master/doc/10.png" width="500px" />
</h1>

Eles serão marcados em vermelho também caso tenham vencido. Nesse exemplo, a data atual é 10/07/2021, e o boleto está marcado com data de vencimento de 10/06/2021.

<h1 align="center">
  <img alt="Boleto Recorrente Vencido" title="Boleto Recorrente Vencido" src="https://github.com/Jordaobm/payflow/blob/master/doc/11.png" width="500px" />
</h1>

Perceba que ao marcar o boleto como pago, ele se auto validou, atualizando o mês para o mês atual, e novamente foi marcado como vermelho, pois está no dia de pagar. Dessa 
forma, o usuário teve que interagir duas vezes com o boleto. A primeira vez do mês anterior, e a segunda do mês atual. Boletos recorrentes serão atualizados somente se já
estiverem com status "pago", caso contrário, não serão atualizados até que o usuário "pague".

<h1 align="center">
  <img alt="Boleto Recorrente Vencido" title="Boleto Recorrente Vencido" src="https://github.com/Jordaobm/payflow/blob/master/doc/12.png" width="500px" />
</h1>

Por fim, quando pago, ele ficará opaco, como os demais

<h1 align="center">
  <img alt="Boleto Recorrente Vencido" title="Boleto Recorrente Vencido" src="https://github.com/Jordaobm/payflow/blob/master/doc/13.png" width="500px" />
</h1>



## ✅ Para rodar o projeto 

Clone o projeto em sua máquina, rode o comando ```yarn``` e em seguida ```yarn android```. Atualmente o projeto não necessita de nenhuma variável ambiente, então, é simples

## 🛠 Tecnologias

- [react-native](https://reactnative.dev)
- [react](https://pt-br.reactjs.org)
- [styled-components](https://styled-components.com)
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
- [@react-native-community/checkbox](https://github.com/react-native-checkbox/react-native-checkbox)
- [@react-native-community/masked-viewe](https://github.com/react-native-masked-view/masked-view#readme)
- [@react-native-firebase/app](https://github.com/invertase/react-native-firebase/tree/master#readme)
- [@react-native-firebase/auth](https://github.com/invertase/react-native-firebase/tree/master#readme)
- [@react-native-google-signin/google-signin](https://github.com/react-native-google-signin/google-signin)
- [@react-navigation/native](https://reactnavigation.org)
- [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator)
- [date-fns](https://date-fns.org)
- [react-native-currency-input](https://github.com/CaioQuirinoMedeiros/react-native-currency-input#readme)
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs)
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [react-native-modal](https://github.com/react-native-modal/react-native-modal)
- [react-native-radial-gradient](https://github.com/surajitsarkar19/react-native-radial-gradient#readme)
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated#readme)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context#readme)
- [react-native-screens](https://github.com/software-mansion/react-native-screens#readme)
- [react-native-text-input-mask](https://github.com/react-native-text-input-mask/react-native-text-input-mask)
- [react-native-toast-message](https://github.com/calintamas/react-native-toast-message#readme)



### Autor
---

<a href="https://github.com/Jordaobm">
 <img style="border-radius: "50px";" src="https://avatars.githubusercontent.com/u/70074016?v=4" width="100px;" alt="Jordão"/>
 <br />
 <sub><b>Jordão Beghetto Massariol</b></sub></a> <a href="https://github.com/Jordaobm" title="Jordão">🚀</a>


Feito com ❤️ por Jordão Beghetto Massariol 👋🏽 Entre em contato!

<a href="https://twitter.com/JordoMass"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social"></a>


