# Coding Standards

Ubicación: 04-ENGINEERING/03-Coding-Standards.md

---

# Estado

Estado: Aprobado

Versión: 1.0

Última actualización: Junio 2026

Responsable: SistematizArg Engineering Team

Última revisión: Junio 2026

Próxima revisión: Semestral

---

# Dependencias

## Foundation

- 03-Engineering-Principles.md

## Engineering

- Engineering Handbook
- Development Workflow

---

# Documentos relacionados

- Naming Conventions
- Definition of Done
- Code Review Process
- AI Assisted Development

---

# Resumen Ejecutivo

Este documento define los estándares oficiales de codificación utilizados en todos los proyectos desarrollados por SistematizArg.

Su objetivo es garantizar consistencia, mantenibilidad, legibilidad y calidad independientemente del lenguaje o del desarrollador.

Los estándares aquí definidos son obligatorios para todas las contribuciones al repositorio oficial.

---

# Objetivo

Establecer un conjunto uniforme de reglas para escribir código que facilite su comprensión, evolución y mantenimiento a largo plazo.

---

# Alcance

Aplica a:

- TypeScript
- Python
- Astro
- Componentes UI
- Backend
- Scripts
- Automatizaciones
- Infraestructura como código
- Código generado con IA

---

# Principios

## Legibilidad

El código se escribe para ser leído.

La claridad tiene prioridad sobre la brevedad.

---

## Consistencia

Una solución consistente es preferible a múltiples estilos equivalentes.

---

## Simplicidad

Se elegirá la solución más simple que cumpla correctamente los requisitos funcionales y no funcionales.

---

## Modularidad

Cada módulo deberá tener una única responsabilidad claramente definida.

---

## Explicitud

El comportamiento del código deberá ser evidente sin necesidad de inferencias innecesarias.

---

## Mantenibilidad

Todo cambio deberá facilitar el mantenimiento futuro del sistema.

---

# Reglas Generales

## Funciones

Las funciones deberán:

- realizar una única tarea;
- tener nombres descriptivos;
- minimizar efectos secundarios;
- recibir el menor número posible de parámetros;
- devolver resultados previsibles.

---

## Clases

Las clases deberán existir únicamente cuando aporten una ventaja clara respecto a funciones o composición.

Se favorecerá la composición sobre la herencia.

---

## Componentes

Cada componente deberá representar una única responsabilidad funcional.

Los componentes excesivamente grandes deberán dividirse.

---

## Tipado

Todo el código TypeScript deberá utilizar tipado estricto.

No se permitirá el uso de `any`, salvo excepciones justificadas y documentadas.

---

## Manejo de errores

Los errores deberán tratarse explícitamente.

No se permitirá ignorar excepciones silenciosamente.

---

## Logging

Los mensajes de log deberán:

- aportar contexto;
- evitar información sensible;
- ser útiles para diagnóstico.

---

## Comentarios

Los comentarios deberán explicar el **por qué**, no el **qué**.

El código deberá ser suficientemente claro para describir su funcionamiento.

---

## Dependencias

Solo se incorporarán dependencias cuando exista una necesidad demostrable.

Antes de añadir una nueva librería deberá verificarse si el problema ya puede resolverse con componentes existentes.

---

# Código generado por IA

Todo código generado por herramientas de IA deberá:

- revisarse manualmente;
- respetar estos estándares;
- incluir pruebas cuando corresponda;
- mantener la coherencia arquitectónica.

La generación automática no exime de responsabilidad técnica.

---

# Calidad

Todo código deberá ser:

- compilable;
- testeable;
- documentado;
- observable;
- seguro;
- mantenible.

---

# Prohibiciones

No se permitirá:

- código duplicado;
- funciones excesivamente largas;
- dependencias circulares;
- lógica de negocio en la interfaz;
- secretos en el código;
- código comentado como mecanismo de versionado;
- uso indiscriminado de `TODO` sin seguimiento.

---

# Criterios de Cumplimiento

Una contribución cumple este estándar cuando:

- supera las revisiones automáticas;
- respeta las convenciones del proyecto;
- mantiene la coherencia arquitectónica;
- es aprobada durante el Code Review.

---

# Riesgos

El incumplimiento de estos estándares puede producir:

- incremento de deuda técnica;
- pérdida de mantenibilidad;
- inconsistencias;
- mayor complejidad operativa.

---

# Conclusiones

Los Coding Standards constituyen la base de calidad del código desarrollado en SistematizArg.

Todo cambio deberá cumplir estas reglas antes de integrarse al repositorio principal.

---

# Referencias

- Engineering Handbook
- Development Workflow
- Code Review Process
- Definition of Done
