# Daily Code Challenges

Repositorio personal de retos diarios de ingeniería de software enfocados en mantener y profundizar habilidades fundamentales y avanzadas:
algoritmos, patrones de diseño, concurrencia, asincronía y toma de decisiones técnicas.

El objetivo no es solo “resolver problemas”, sino entrenar criterio de ingeniería, comparar modelos de ejecución y documentar decisiones.

## Objetivos del repositorio

- Mantener las skills de software activas y afiladas
- Practicar algoritmos y estructuras de datos
- Profundizar en patrones de diseño
- Comparar enfoques de concurrencia y asincronía
- Mejorar claridad, legibilidad y razonamiento técnico
- Documentar trade-offs y decisiones

## Enfoque

Cada reto se resuelve en dos lenguajes con modelos de ejecución distintos:

### 🐍 Python

- Multithreading
- Multiprocessing
- Async / Await
- Uso explícito de primitivas de sincronización

### 🟨 JavaScript (Node.js)

- Event Loop
- Promesas
- async / await
- Control manual de concurrencia
- Esto permite comparar:
- Thread-based vs Event-loop-based
- IO-bound vs CPU-bound
- Simplicidad vs control fino

## Estructura del repositorio

```bash
.
├── day-001/
│   ├── README.md          # Descripción del reto
│   ├── python/
│   │   ├── main.py
│   │   ├── requirements.txt
│   │   └── README.md      # Notas de diseño
│   └── js/
│       ├── index.js
│       ├── package.json
│       └── README.md      # Notas de diseño
├── day-002/
├── ...
└── generate_day.py        # Script generador de retos

```

## Nota final

Este repositorio es un espacio de entrenamiento técnico, no un catálogo de soluciones perfectas.
Los errores, refactors y mejoras forman parte del proceso.
