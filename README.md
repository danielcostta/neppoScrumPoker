Neppo Scrum Poker
=====================

### Usando este projeto

Certifique-se que você tenha instalado o [NodeJs](https://nodejs.org/en/download/) em sua máquina.

Você precisará do Ionic CLI com suporte para aplicativos v2:
```bash
$ npm install -g ionic && npm install -g cordova
```

Clone o projeto para sua máquina:
```bash
$ git clone <LINK DO REPOSITÓRIO>
```

Após ter o projeto em sua máquina, execute o comando abaixo no terminal para poder instalar as dependências necessárias:
```bash
$ npm install
```

Para ver a versão do Ionic e demais pacotes, execute:
```bash
$ ionic info
```
Obs.: Se você rodar esse comando dentro da pasta do aplicativo ele irá te informar a versão que esta sendo usada no aplicativo;

Para rodar o servidor e testar a aplicação, execute:
```bash
$ ionic serve --lab
```

Para depurar a aplicação você pode utilizar o Google Chrome, [veja neste tutorial](http://www.devmedia.com.br/depurando-javascript-com-google-chrome/28367).

Para testar a aplicação em seu celular, configure seu computador seguindo o tutorial da documentação do Cordova:
-[Android](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)
-[IOS](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/)

Adicione a plataforma:
```bash
$ ionic platform add android
```

Após conectar o celular ao computador, execute o comando abaixo:
```bash
$ cordova run android --device
```
Obs.: Para executar seu aplicativo, tudo o que você precisa fazer é [ativar a depuração USB e o Modo de desenvolvedor](https://developer.android.com/studio/run/device.html#developer-device-options) em seu dispositivo Android.

Para debuggar a aplicação que esta rodando em seu celular, veja este [tutorial](https://www.codeproject.com/Tips/1030830/Debug-Ionic-Android-Application-On-Mobile-Devices) de como fazer.

Mais informações podem ser encontradas na página do [Ionic](http://ionicframework.com/docs/v2/getting-started/).

# Comandos Git

Visualizar histórico de commits:
```bash
$ git log
```

Visualizar status do repositório local (arquivos alterados ou adicionados):
```bash
$ git status
```

#### Adicionar arquivos para ser commitados:
Adiciona todos os arquivos
```bash
$ git add -A
```
Adiciona todos os arquivos novos ou editados, exceto os deletados
```bash
$ git add .
```
Adiciona todos os arquivos modificados e excluidos, exceto os novos
```bash
$ git add -u
```
Adiciona apenas um determinado arquivo
```bash
$ git add NOME_ARQUIVO
```

#### Commit
Ao commitar você escreve uma descrição sobre o que foi feito ali. Assim essa modificação não fica perdida e todo mundo sabe do que se trata aquela mudança. Você documenta essa mudança. É mais ou menos isso que é o commit.
```bash
$ git commit -m "Resolvendo bug da modal sobreposta na página de pagamentos."
```

Se você fizer um git log no projeto, você consegue visualizar uma lista de todos os commits enviados para o projeto, seus commits e commits de outros integrantes.

##### Git Amend
Modifica a mensagem do commit mais recente, ou seja, o último commit feito por você no projeto. Além de você mudar a mensagem do commit, você consegue adicionar arquivos que você se esqueceu ou retirar arquivos comitados por engano. O git cria um commit totalmente novo e corrigido.
```bash
$ git commit --amend
```

#### Pull
Não é só você que está fazendo modificações nos arquivos, mas também sua equipe. Por isso é importante que você deixe o projeto sempre atualizado. Para isso você precisa trazer as modificações que eles fizeram e commitaram para o seu repositório local. Você vai usar o comando pull para trazer essas modificações:
```bash
$ git pull origin NOME_BRANCH
```

#### Push
Você modificou os arquivos, commitou descrevendo o que fez exatamente naquela modificação e agora precisa enviar tudo isso para o servidor. O comando git push empurra as suas modificações para o servidor, incluido-as no histórico do projeto. Quando os outros integrantes da equipe fizerem um git pull, essas modificações serão baixadas e incluídas no repositório local da pessoa.
```bash
$ git push
```

O Git Push só pode ser feito se você executou o git pull antes. Isso é uma forma de você ter o seu repositório atualizado e também para evitar possíveis conflitos no projeto. Quando você faz o pull, se der algum conflito de código, você deverá resolve-los para depois enviar o novo código novamente.

#### Branch e Checkout
O nome do branch padrão no Git é master. Como você inicialmente fez commits, você tem um branch principal (master branch) que aponta para o último commit que você fez. Cada vez que você faz um commit ele avança automaticamente.

Para criar um novo branch digite o comando abaixo, isso irpa cria um branch para o mesmo commit em que você está no momento.
```bash
$ git branch NOME_BRANCH
```

Para mudar para um branch existente, você executa o comando git checkout, isto move o HEAD (head é o branch que você esta) para apontar para o branch requerido.
```bash
$ git checkout NOME_BRANCH
```

Para mais detalhes acesse este [link](https://git-scm.com/book/pt-br/v1/Ramifica%C3%A7%C3%A3o-Branching-no-Git-O-que-%C3%A9-um-Branch).

#### Voltando um arquivo para o estado original
Imagine agora que você fez diversas alterações em um arquivo, porém, por qualquer motivo, você se arrependeu de fazê-las (lembrando que você apenas fez as alterações, mas não as commitou). Para você fazer o conteúdo do arquivo voltar ao estado original, digite:
```bash
$ git checkout -- exemplo.php
```
Rodando esse comando, todos as alterações realizadas serão perdidas e o arquivo voltará exatamente como estava antes.

#### Merge
Pega todos os commits que tem em um brach e joga pro head, ele faz a união de um branch com o MASTER.
```bash
$ git merge master
```
Obs.: Certifique-se que vocês está no branch que realmente quer unir com o master. Para ir ao branch que deseja basta digitar:
```bash
$ git checkout NOME_BRANCH
```

## FAQ
-Commit:
São comentários que você faz para cada atualização em um arquivo.

-Branch:
Branch é um caminho que você cria, onde todas as alterações nos arquivos que são feitos quando você está em um determinado branch, não são modificadas nos demais branchs. Esses arquivos modificados ficam apenas no branch ao qual você vez os commits.

-Head:
Denominado HEAD o branch ao qual você está no atualmente.

-Master:
Master é o branch principal do projeto.

-Merge:
Um merge une vários commits em um unico commit e não exclui os commits unidos. Utilizado quando vamos unir um branch a outro.

-Rebase:
Um rebase une vários commits em um unico commit e exclui os commits unidos.
