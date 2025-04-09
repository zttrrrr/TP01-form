1.Validación del Nombre Completo:

Se utiliza trim() para eliminar espacios innecesarios al inicio y al final.

Se verifica que el texto ingresado tenga al menos 3 caracteres.

Si la condición no se cumple, se llama a mostrarError() para mostrar el mensaje de error y cambiar el borde del campo a rojo.

Si se cumple la condición, se llama a mostrarExito() para limpiar el mensaje de error y cambiar el borde a verde.

2. Validación del Correo Electrónico:

Se usa una expresión regular /^[^\s@]+@[^\s@]+\.[^\s@]+$/ para validar que el correo tenga un formato correcto.

La expresión verifica:

Que haya caracteres antes del @.

Que el @ esté presente y separado del dominio.

Que después del @ haya un dominio válido con un ..

Si la validación falla, se muestra un mensaje de error y se cambia el borde a rojo.

Si el correo es válido, se muestra un mensaje de éxito y se cambia el borde a verde.

3. Validación de la Contraseña:

Se usa una expresión regular /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ para verificar:

(?=.*[A-Za-z]) al menos una letra.

(?=.*\d) al menos un número.

{8,} un mínimo de 8 caracteres.

Si la contraseña no cumple con los requisitos, se muestra un mensaje de error.

Si la contraseña es válida, se cambia el borde a verde.

4. Validación de Confirmación de Contraseña:

Se compara directamente confirmarContrasena.value con contrasena.value.

Si los valores no coinciden, se muestra un mensaje de error y se cambia el borde a rojo.

Si las contraseñas coinciden, se borra el mensaje de error y se cambia el borde a verde.

5. Mensajes de Validación:

Se utilizan eventListeners en cada campo para ejecutar la validación mientras el usuario escribe.

La función mostrarError() se encarga de cambiar el borde del campo a rojo y mostrar el mensaje correspondiente en un span asociado.

La función mostrarExito() borra el mensaje de error y cambia el borde del campo a verde.


La interfaz es un formulario hecho en base a uno hecho el año pasado adaptado a este contexto, agregue un "div" para mas prolijidad.

el style es simple pero prolijo, use un hover y un focus para dar mas dinamismo, los colores los elegi al azar, esto ya quelo unico que buscaba era que se pueda distinguir cada campo del form.

Problemas con los que me encontre: no se enviaba el formulario, no validaba bien los campos, no mostraba rojo y verde dependiendo si el registro era correcto o no.

el mas simple de los problemas fue el style, que lo logre a base de prueba y error, los otros dos problemas que tuve los solucione con el correcto uso de los llamados (por ejemplo habia nombre que no eran congruentes)
y tambien con el correcto uso de eventListener y de evento.preventDefault()