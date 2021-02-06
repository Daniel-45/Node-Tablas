## Tablas Multiplicar

Aplicación de consola creada con Node.js para generar archivos de tablas de multiplicar.

En el directorio del proyecto, ejecutar el comando: ```npm install```

Generar la tabla de multiplicar de un número y que se guarde un fichero .txt con la tabla generada en el directorio files.

En el directorio del proyecto ejecutar:

node app -b numero

Esto solo genera el fichero .txt con la tabla del número y lo guarda en el directorio **files**

Ejemplo: ```node app -b 8```

node app -b numero -l

Esto genera el fichero .txt con la tabla del número, lo guarda en el directorio **files** y muestra la salida por consola.

Ejemplo: ```node app -b 8 -l```

Para mostrar la ayuda por consola ejecutar el comando ```node app --help```

```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Es el número de la tabla de multiplicar    [número] [requerido]
  -l, --listar   Muestra la tabla en consola
                                         [booleano] [requerido] [defecto: false]
```

