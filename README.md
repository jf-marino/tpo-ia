# TPO Inteligencia Artificial

Para buildear el proyecto primero instalar Node >= 8.12.0

## Usando NVM

NVM es el Node Version Manager y puede instalar multiples versiones de Node en el mismo sistema. Instalarlo desde [aca para MacOs o Linux](https://github.com/creationix/nvm), o de [aca para Windows](https://github.com/coreybutler/nvm-windows).

Una vez instalado desde la Terminal o Git Bash en Windows ejecutar:

```bash
$ nvm install v8.12.0
...
$ nvm use v8.12.0
...
$ node --version
v8.12.0
```

## Build

Una vez que Node esta instalado entrar al root del proyecto (donde esta este README.md) y ejecutar el siguiente comando para instalar las dependencias del proyecto:

```bash
$ npm install
```

Esta operacion puede tardar un rato. Una vez finalizada se debe ejecutar el siguiente comando (tambien parado el el la carpeta root) para generar la aplicación de escritorio del proyecto:

```bash
$ npm run electron:package
```

El proceso de build puede tardar un rato tambien. Una vez finalizada deberiamos encontrar en el proyecto una carpeta `/dist` donde deberá estar la aplicacion generada. 

**En el caso de MacOs la aplicacion se encontrará en `/dist/mac/tpo-ia.app` (En Windows deberia ser análogo a esto)**.