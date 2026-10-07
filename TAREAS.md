# Tareas pendientes – Caja registradora

## Hecho
- [x] `fondoCaja` en `data.js` con `valor` y `cantidad` (en céntimos)
- [x] `pagoCliente` en `data.js` (ahora: un billete de 20 €)
- [x] Función `calculoTotal(desglose)` → `fondoCaja` da 23427

## Siguiente
1. [ ] Importar también `pagoCliente` en `script.js` y comprobar con `console.log` que su total da **2000**.
2. [ ] Crear una variable con el **precio en céntimos** (ej: 12,35 € → 1235).
3. [ ] Calcular la **diferencia**: total del pago − precio (usa `calculoTotal`, no vuelvas a sumar).
4. [ ] Decidir el caso con **`if / else if / else`** (solo puede pasar uno):
   - diferencia < 0 → "No llega el dinero"
   - diferencia = 0 → "Pago justo"
   - diferencia > 0 → "Hay que devolver X €"
5. [ ] Mostrar en euros dividiendo entre 100 **solo al mostrar**; los cálculos siempre en céntimos.
6. [ ] Probar con 3 precios: mayor que 2000, igual a 2000 y menor que 2000.

## Más adelante
- Calcular el desglose óptimo del cambio (de la pieza más grande a la más pequeña).
- Actualizar la caja (sumar el pago, restar el cambio) y mostrar el estado final.
