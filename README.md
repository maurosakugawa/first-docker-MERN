# first-docker-MERN
[![Badge](https://img.shields.io/badge/npm-v6.14.5-%9fb945)](https://www.npmjs.com/package/npm/v/6.14.5) [ ![Badge](https://img.shields.io/badge/Node.js-v12.16.3-%9fb945)](https://nodejs.org/dist/v12.16.3/docs/api/) [![Badge](https://img.shields.io/badge/Docker-v19.03.13-%9fb945)](https://docs.docker.com/engine/install/)

Este é meu primeiro MERN, é composto de três contêineres docker, um para o banco, um para o backend e outro para frontend. É um app simples que permite fazer CRUD em uma tabela de filmes em um banco não relacional. É composto de um formulário com três entradas, nome do filme, nota média dos espectadores e horários de exibição.

# Conteúdo

1. [Tecnologias](#tecnologias)
2. [Para rodar este projeto após cloná-lo](#para-rodar)
    1. [Instalar o docker engine](#instalar-o-docker)
       1. [No caso foi utilizado o ambiente Linux/Ubuntu](#no-caso-foi)
    2. [No diretório backend importar](#no-diretorio-backend)
    3. [No diretório frontend importar](#no-diretorio-frontend)
3. [Após as importações](#apos-as-importacoes)
    1. [No diretório raiz rodar no terminal](#no-diretorio-raiz)
    2. [Entrar no diretório frontend rodar no terminal](#entrar-no-diretorio-frontend)

## Tecnologias <a name="tecnologias"></a>
* Docker
* Docker Compose
* Mongodb
* Node.js
* NPM
* React-js
* Javascript
* CSS
* HTML


## Para rodar este projeto após cloná-lo <a name="para-rodar></a>

### Instalar o docker engine <a name="instalar-o-docker"></a>

* Estou seguindo as orientações do site oficial docker
* Caso esteja em ambiente [Linux/Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
* Como requisitos de sistema faz-se necessário que seu sistema operacional (SO) seja Ubuntu 16.04 ou superior.
* Caso esteja em ambiente [Windows](https://docs.docker.com/docker-for-windows/install/)

#### No caso foi utilizado o ambiente Linux/Ubuntu. <a name="no-caso-foi"></a>

* Caso você possua alguma versão antiga instalada é necessário desinstalar a versão com esse comando:
```
sh
sudo apt-get remove docker docker-engine docker.io containerd runc
```
* Atualizando o repositório do SO:
```
sh
sudo apt update && sudo apt upgrade -y
```
* Instalando as dependências:
```
sh
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```
* Baixando e adicionando as apt-key (chaves apt)
```
sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
* Verificando a autenticidade das chaves, tem que exibir a mesma saída abaixo:
```
sh
sudo apt-key fingerprint 0EBFCD88
```
```
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S
```
* Adicionando o repositório da última versão estável do docker, supondo que sua arquitetura do SO seja amd de 64 bits:
 - Comando específico para o Ubuntu 18.04 ou Linux Mint Tessa (Para o Linux Mint você precisará da versão de referência do Ubuntu)
```
sh
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
```
 - Para as versões Ubuntu, você pode substituir o comando específico por um comando genérico
```
sh
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
* Atualizando novamente o repositório do SO:
```
sh
sudo apt update && sudo apt  -y
```
* (Opcional) Se quiser saber qual a versão candidata a instalação ou confirmar que está instalando do repositório oficial docker rodar este comando:
```
sh
apt-cache policy docker-ce
```
```
Provável saída em seu terminal.
docker-ce:
  Instalado: (nenhum)
  Candidato: 5:19.03.13~3-0~ubuntu-bionic
  Tabela de versão:
     5:19.03.13~3-0~ubuntu-bionic 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
     5:19.03.12~3-0~ubuntu-bionic 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
     5:19.03.11~3-0~ubuntu-bionic 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
....
```
* Instalando Docker
```
sh
sudo apt-get install docker-ce docker-ce-cli containerd.io
```
* Testando se o docker está instalado:
```
sh
sudo systemctl status docker
```
```
Saída aproximada no terminal:
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: e
   Active: active (running) since Wed 2020-10-07 17:19:33 -03; 2min 53s ago
     Docs: https://docs.docker.com
 Main PID: 27238 (dockerd)
    Tasks: 20
```
### Instalando o docker-compose, lembrando que o docker engine é pré-requisito para o docker compose:

* Baixando o docker-compose do github para o seu diretório "/usr/local/bin/"
```
sh
sudo curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

* Atribuindo permissão de execução para sua pasta:
```
sh
sudo chmod +x /usr/local/bin/docker-compose
```
### Criando grupos de usuários docker para que não seja necessário utilizar o "sudo" em seus comandos docker.
```
sh
sudo groupadd docker
```
### Adicionando seu usuário ao grupo.
```
sh
sudo usermod -aG docker $USER
```
## Após instalar o docker engine e o docker compose.

### No diretório backend importar <a name="no-diretorio-backend"></a>
* express
* mongoose
* nodemon
* body-parser 
* cors

### No diretório frontend importar <a name="no-diretorio-frontend"></a>
* Axios
* Bootstrap
* StyledComponents
* react-table-6 (Isto é importante, a versão deve ser a 6)
* react-router-dom

## Após as importações <a name="apos-as-importacoes"></a>

### No diretório raiz rodar no terminal <a name="no-diretorio-raiz"></a>

* docker compose build
* docker compose up -d

### Entrar no diretório frontend rodar no terminal <a name="entrar-no-diretorio-frontend"></a>

* yarn start ou npm start

