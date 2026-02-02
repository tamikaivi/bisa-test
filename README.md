# Prueba técnica 

Este proyecto está construido con **Next.js** y puede ejecutarse tanto en entorno local como usando **Docker**.

## 📦 Requisitos previos

Asegúrate de tener instalado:

- **Node.js** (versión recomendada: 20.x o superior)
- **npm** o **yarn**
- **Docker** (si deseas ejecutarlo con contenedores)

Verifica las versiones:
```bash
node -v
npm -v
docker -v
```

## 🚀 Ejecución en entorno local (sin Docker)

### 1️⃣ Instalar dependencias

Desde la raíz del proyecto ejecuta:
```bash

npm install  
```
o si usas yarn:
```bash
yarn install  
```
---
### 2️⃣ Ejecutar el proyecto en modo desarrollo
```bash

npm run dev  
```
o:
```bash
yarn dev  
```


### 3️⃣ Acceder a la aplicación

Abre tu navegador en:
```bash
http://localhost:3000  
```


## 🐳 Ejecución usando Docker

### 1️⃣ Construir la imagen Docker

Desde la raíz del proyecto (donde se encuentra el Dockerfile):
```bash
docker build -t prueba-tecnica-30-01-nextjs .
```


### 2️⃣ Ejecutar el contenedor
```bash
docker run -p 3000:3000 prueba-tecnica-30-01-nextjs
```
Esto expone el puerto 3000 del contenedor al puerto 3000 de tu máquina local.



### 3️⃣ Acceder a la aplicación

Abre tu navegador en:
```bash
http://localhost:3000  
```


## 🛑 Detener el contenedor

Si el contenedor se está ejecutando en primer plano:
```bash
CTRL + C  
```
Si se está ejecutando en segundo plano:
```bash
docker ps  
docker stop <container_id>  
```


## 📁 Scripts disponibles

- npm run dev → Ejecuta la aplicación en modo desarrollo
- npm run build → Genera el build de producción
- npm run start → Ejecuta el build de producción



## 📝 Notas

- El puerto por defecto de la aplicación es 3000

