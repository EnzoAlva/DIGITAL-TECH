

# Webpack

Es un paquete de módulos principalmente para JavaScript, pero puede transformar activos front-end como HTML, CSS e imágenes si se incluyen los cargadores correspondientes. Webpack toma módulos con dependencias y genera activos estáticos que representan esos módulos.

## Software requeridos

*  [Node JS](https://nodejs.org/es/download/releases/) (sólo version 8 o 10)
*  [Git](https://git-scm.com/): para versionar el repositorio
* Instalar [Windows-Build-Tools](https://www.npmjs.com/package/windows-build-tools)

## Tecnologías
| Tecnología | Herramienta |
| --------|---------|
| **HTML** | Generado con [PUG](https://pugjs.org/) | 
| **CSS** | [SMACSS](http://smacss.com/) para organizar estilos, [SASS](http://sass-lang.com/), [PosCSS](https://postcss.org/)| 
| **Imágenes** | Compresión de imágenes [imagemin-webpack-plugin](https://www.npmjs.com/package/imagemin-webpack-plugin), [imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg), [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) |
| **JS** | Usando [Babel](https://babeljs.io/) para dar el soporte a IE cuando se use ECMAScript|

## Primeros pasos

Ejecutar `npm install` en la terminal del IDE de su preferencia, si todo esta bien, no deberia tener problema al momento de ejecutar cualquiera de los siguientes comandos:

```
npm run serve --directory=WWWWWW --project=YYYYY
npm run build --directory=WWWWWW --project=YYYYY
npm run production --directory=WWWWWW --project=YYYYY
```
* Donde `WWWWWW` es la carpeta del core business y `YYYYY` es el nombre de la capeta de la landing a trabajar-

* `npm run serve --directory=WWWWWW --project=YYYYY` Abre automaticamente la landing html en el navegador de preferencia, compilando en vivo los cambios generados en los archivos de la carpeta src (pug, scss, js, img, etc.), cuando estamos ejecutando este comando no se va generar ningun archivo en la carpeta dist (archivos finales del proyecto)

* `npm run start` Abre automaticamente la landing html en el navegador de preferencia, compilando en vivo los cambios generados en los archivos de la carpeta src (pug, scss, js, img, etc.), cuando estamos ejecutando este comando no se va generar ningun archivo en la carpeta dist (archivos finales del proyecto)
* `npm run build:dev` Genera los archivos finales del proyecto, pero sin estar optimizados, es decir, los archivos css no estan minificados, no tienen los prefijos y los archivos html no tienen el critical css
* `npm run build` Genera los archivos finales y optimizados del proyecto

Una vez lanzado el servidor web se puede acceder mediante: [http://localhost:80800](http://localhost:8080/)

## Estructura de carpetas

Las carpetas tienen la siguiente estructura:

* `src`: Contiene el código fuente para trabajar.
* `src/assets`  : Contiene los recursos multimedia (imagen, audio o vídeo) que se utilizarán en el desarrollo de las landings. Asimismo, estas carpetas estan subdividas de la siguiente forma.
	* `img`: Imágenes que se usarán al momento de desarrollar cada landing .
	* `media`: Audio y vídeo que se usarán al momento de desarrollar cada landing .
	* `sprite`: Imágenes para generar un sprite de estas. Asimismo, cada imagen debe contener su versión retina bajo el sufijo @2x.
	ejm: imagen.png / imagen@2x.png
* `src/fonts`  : Fuentes que se requieran generar, acepta los formatos: `woff, woff2, eot, ttf otf, svg`.
* `src/js`:  Contiene los archivos JS que se usen en cada landing.
* `src/pug`: Contiene el markup del landing en formato `.pug`
* `src/scss`: Contiene estilos en SASS organizado en base a  [SMACSS](http://smacss.com/book/categorizing)
* `dist`: Contiene los archivos finales de la landing.

## Flujo de trabajo Bitbucket

Para trabajar con el repositorio se requiere primero registrar la tarea como Issue en Bitbucket. Luego seguir las reglas de nomenclatura de ramas y commits.

### Nomenclatura de ramas
* Debe comenzar con el número de issue formateado a 3 digitos.
* Debe continuar con el nombre del issue formateado en URL.

Ejm: `003-landing-cyberday`

### Nomenclatura de commits
* Debe empezar con un `#` seguido del número de issue formateado a 3 digitos.
* Se debe separar el número del issue del contenido por un guión.
* Se debe incluir un resumen de los cambios hechos

Ejemplo: `git commit -m "#003 - Validación del formulario de registro"`