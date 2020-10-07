# first-docker-MERN
This is my first MERN project, it is made in docker environment with React JS, Mongodb, Node JS. Is a very simple movie list app.

## Para rodar este projeto após cloná-lo 

### Instalar o docker engine

* Estou seguindo as orientações do site oficial docker
* Caso esteja em ambiente Linux/Ubuntu: https://docs.docker.com/engine/install/ubuntu/
* Como requisitos de sistema faz-se necessário que seu sistema operacional (SO) seja Ubuntu 16.04 ou superior.
* Caso esteja em ambiente Windows: https://docs.docker.com/docker-for-windows/install/ 


#### No caso foi utilizado o ambiente Linux/Ubuntu.

* Caso você possua alguma versão antiga instalada é necessário desinstalar a versão com esse comando:
$ sudo apt-get remove docker docker-engine docker.io containerd runc

* Atualizando o repositório do SO:
$ sudo apt update && sudo apt upgrade -y

* Instalando as dependências:
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

* Baixando e adicionando as apt-key (chaves apt)
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

* Verificando a autenticidade das chaves, tem que exibir a mesma saída abaixo:
$ sudo apt-key fingerprint 0EBFCD88

pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S

* Adicionando o repositório da última versão estável do docker, supondo que sua arquitetura do SO seja amd de 64 bits:
** Comando específico para o Ubuntu 18.04 ou Linux Mint Tessa (Para o Linux Mint você precisará da versão de referência do Ubuntu)
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

** Para as versões Ubuntu, você pode substituir o comando específico por um comando genérico
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

* Atualizando novamente o repositório do SO:
$ sudo apt update && sudo apt  -y

* (Opcional) Se quiser saber qual a versão candidata a instalação ou confirmar que está instalando do repositório oficial docker rodar este comando:
$ apt-cache policy docker-ce
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

* Instalando Docker
$ sudo apt-get install docker-ce docker-ce-cli containerd.io

* Testando se o docker está instalado:
$ sudo systemctl status docker
Saída aproximada no terminal:
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: e
   Active: active (running) since Wed 2020-10-07 17:19:33 -03; 2min 53s ago
     Docs: https://docs.docker.com
 Main PID: 27238 (dockerd)
    Tasks: 20

### Instalando o docker-compose, lembrando que o docker engine é pré-requisito para o docker compose:

* Baixando o docker-compose do github para o seu diretório "/usr/local/bin/"
$ `sudo curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose`

* Atribuindo permissão de execução para sua pasta:
$ sudo chmod +x /usr/local/bin/docker-compose

### Criando grupos de usuários docker para que não seja necessário utilizar o "sudo" em seus comandos docker.
$ sudo groupadd docker

### Adicionando seu usuário ao grupo.
$ sudo usermod -aG docker $USER

## Após instalar o docker engine e o docker compose.

### No diretório backend importar
* express
* mongoose
* nodemon
* body-parser 
* cors

### No diretório frontend importar
* Axios
* Bootstrap
* StyledComponents
* react-table-6 (Isto é importante, a versão deve ser a 6)
* react-router-dom

## Após as importações

### No diretório raíz rodar no terminal

* docker compose build
* docker compose up -d

### no diretório frontend rodar no terminal

yarn start ou npm start

