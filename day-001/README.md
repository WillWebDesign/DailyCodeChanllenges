# Reto Diario – Día 1

## Motor de Reglas de Descuentos (Rule Engine)

### Contexto

En una plataforma de e-commerce, los descuentos no son estáticos.
Pueden cambiar según campañas, tipo de cliente o volumen de compra.

El sistema debe permitir:

- Agregar nuevas reglas sin modificar código existente
- Evaluar múltiples reglas
- Mantener el código extensible, testeable y legible

### Objetivo

Diseñar un **motor de reglas de descuento** que calcule el precio final de una orden
aplicando **una sola regla de descuento válida**.

---

### Descripción del problema

Se recibe una orden con:

- Monto total
- Tipo de cliente
- Cantidad de ítems

El sistema debe evaluar reglas de descuento y aplicar **la primera que sea válida**.

Reglas:

1. **Cliente PREMIUM** → 20% de descuento
2. **Más de 10 ítems** → 10% de descuento
3. **Monto mayor a 1000** → 5% de descuento
4. Si ninguna regla aplica → sin descuento

---

### Input

```json
{
  "amount": 1200,
  "customerType": "REGULAR",
  "items": 3
}
```

### Output

```json
{
  "originalAmount": 1200,
  "discountApplied": "AMOUNT_OVER_1000",
  "discountPercentage": 5,
  "finalAmount": 1140
}
```
