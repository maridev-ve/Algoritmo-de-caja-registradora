# Tareas pendientes – Caja registradora

## Hecho
- [x] `fondoCaja` en `data.js` con `valor` y `cantidad` (en céntimos)
- [x] `pagoCliente` en `data.js` (ahora: un billete de 20 €)
- [x] Función `calculoTotal(desglose)` → `fondoCaja` da 23427

## Siguiente
1. [X] Importar también `pagoCliente` en `script.js` y comprobar con `console.log` que su total da **2000**.
2. [X] Crear una variable con el **precio en céntimos** (ej: 12,35 € → 1235).
3. [X] Calcular la **diferencia**: total del pago − precio (usa `calculoTotal`, no vuelvas a sumar).
4. [X] Decidir el caso con **`if / else if / else`** (solo puede pasar uno):
   - diferencia < 0 → "No llega el dinero"
   - diferencia = 0 → "Pago justo"
   - diferencia > 0 → "Hay que devolver X €"
5. [X] Mostrar en euros dividiendo entre 100 **solo al mostrar**; los cálculos siempre en céntimos.
6. [X] Probar con 3 precios: mayor que 2000, igual a 2000 y menor que 2000.

## Desglose del cambio (hecho)
- [x] Calcular el desglose óptimo del cambio (de la pieza más grande a la más pequeña).
- [x] Avisar cuando la caja no puede dar el cambio ("Fondos insuficientes").
- [x] Actualizar la caja (sumar el pago, restar el cambio) y mostrar el estado final.

## Tarea extra: mostrar el resultado en la página (opcional)
La lógica no cambia; solo cambia por dónde entran y salen los datos.

1. [ ] En `index.html`, añadir un sitio donde escribir los mensajes (por ejemplo un párrafo o una lista vacía).
2. [ ] Mostrar en la página **un** mensaje que ahora sale con `console.log` (empieza por "Pago completo"). Concepto: manipular el DOM.
3. [ ] Mostrar el desglose del cambio en la página, una línea por pieza.
4. [ ] Mostrar el estado final de la caja en la página.
5. [ ] Añadir una casilla para escribir el precio y un botón que arranque el cálculo, en vez de cambiar `precioProducto` a mano. Concepto: eventos.

Ojo: cada vez que se pulse el botón la caja ya estará modificada por la venta anterior. Piensa si eso es lo que quieres (una caja que va cambiando cliente a cliente) o si prefieres empezar de cero cada vez.
