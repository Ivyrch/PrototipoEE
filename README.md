<br />
<p align="center">

  <h1 align="center">Projeto CRIA</h1>
 <br />
  <p align="center">
     Sumário
      <p align="center">
  <a href="#projeto"> Projeto</a> |
  <a href="#arquitetura"> Arquitetura </a> |
  <a href="#tecnologias-utilizadas"> Tecnologias utilizadas </a>     
       <br />
    <br />
  </p>
</p>

#Projeto

O projeto CRIA foi idealizado afim de tornar a vida das pessoas que vivem em lugares de dificil acesso mais fácil, modificando os critérios de localização em lugares onde a densidade geografica impossiblita que pessoas comuns tenham um simples endereço. Para quem não conhece, esses lugares são chamados de favelas ou comunidades, e dentre muitos problemas existentes nesses lugares o que chamou nossa atenção e nos levou a pensar em uma solução tecnológica, foi o fato de que as pessoas não recebem suas encomendas em suas casas, seja por morarem em lugares de dificil acesso ou por não ter uma localização oficial como um endereço postal, etc.

Pensando nisso, nosso projeto é dividido em duas partes. A primeira, é a parte logistica que é ter dentro das favelas lugares chamados de hubs logísticos que serão estabelecidos em locais sociais, como ongs e associações de moradores, e nesses hubs chegariam todos as remessas dos moradores da localidade. A segunda parte do projeto é nossa solução tecnologica, os moradores se inscreverão em nosso site CRIA, e entre os dados pessoais ele informará sua geolocalização utilizando um mapa em nosso formulário de cadastro, com esse dado, os entregadores locais conseguem realizar a entrega na porta do consumidor ou no hub mais proximo da localização informada, para a retirada opcional.

Futuramente, o projeto tem como objetivo tornar o caminho inverso possível, transformando esses hubs em locais de coleta para entregas. Para isso, existiria a possibilidade de que moradores dessas comunidades possam vender pela internet e utilizar esses hubs para enviar suas mercadorias.

A ideia é extender o conceito de última milha ao maximo de pessoas, entregando suas mercadorias com dignidade, aumentando o publico dos clientes da "Eu entrego", sua pupularidade enquanto marca e gerando empregos para pessoas da localidade.

#Arquitetura

A ideia é ter um projeto que possa utilizar as APIs que já existem, que interpretaria se a entrega é para uma dos hubs CRIA em umas dessas localidades, essa API também teria como responsabildade de receber e armazenar os dados dos moradores que se cadastrassem. No site utilizaremos a API de geolocalização do google maps e entregadores da região receberão prioridade para essas entregas. 

Esses Hubs logisticos devem ter uma interatividade automatizada com as pessoas cadastradas no CRIA assim que a remessa chegar no hub proximo ao endereço de entrega, uma mensagem chegara para pessoa, para isso seria utilizado a API whatsapp de terceiros.
