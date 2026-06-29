# Development Workflow

**Ubicación:** `04-ENGINEERING/02-Development-Workflow.md`

---

# Estado

**Estado:** Aprobado

**Versión:** 1.0

**Última actualización:** Junio 2026

**Responsable:** SistematizArg Engineering Team

**Última revisión:** Junio 2026

**Próxima revisión:** Cuando el proceso de desarrollo requiera modificaciones significativas.

---

# Dependencias

## Foundation

* 00-FOUNDATION/03-Engineering-Principles.md

## Engineering

* 00-Engineering-Handbook.md
* 01-Monorepo-Strategy.md

---

# Documentos relacionados

* 03-Coding-Standards.md
* 05-Architecture-Decision-Records.md
* 09-Testing-Strategy.md
* 10-Code-Review-Process.md
* 11-Documentation-Driven-Development.md
* 16-Definition-of-Done.md
* 17-AI-Assisted-Development.md

---

# Resumen Ejecutivo

Este documento define el flujo oficial para desarrollar cualquier funcionalidad dentro de SistematizArg.

El objetivo es garantizar que todas las implementaciones sigan un proceso consistente, documentado, verificable y alineado con la arquitectura del sistema.

El desarrollo no comienza escribiendo código. Comienza comprendiendo el problema y documentando la solución.

---

# Objetivo

Establecer un proceso único para el ciclo de vida completo de una funcionalidad, desde su identificación hasta su despliegue y mantenimiento.

---

# Alcance

Aplica a:

* Nuevos módulos.
* Mejoras funcionales.
* Corrección de errores.
* Refactorizaciones.
* Automatizaciones.
* Componentes de IA.
* Infraestructura como código.

---

# Principios del Workflow

## Documentación primero

Toda funcionalidad deberá estar respaldada por documentación antes de iniciar su implementación.

---

## Arquitectura antes que implementación

Las decisiones estructurales deberán tomarse antes de escribir código.

---

## Desarrollo incremental

El sistema evolucionará mediante pequeñas entregas funcionales y verificables.

---

## Vertical Slice Development

Cada funcionalidad deberá desarrollarse de forma completa.

Una entrega incluye:

* interfaz;
* lógica;
* persistencia;
* seguridad;
* pruebas;
* documentación.

No se desarrollarán capas aisladas sin una necesidad claramente justificada.

---

# Ciclo de vida de una funcionalidad

```text
Idea
  ↓
Análisis
  ↓
Blueprint
  ↓
ADR (si aplica)
  ↓
Diseño Técnico
  ↓
Planificación
  ↓
Implementación
  ↓
Testing
  ↓
Code Review
  ↓
Documentación
  ↓
Integración
  ↓
Release
  ↓
Monitoreo
```

Cada etapa tiene un propósito específico y no deberá omitirse.

---

# Etapa 1 — Identificación

Toda nueva funcionalidad comienza con la identificación de una necesidad.

El objetivo es responder:

* ¿Qué problema resuelve?
* ¿Quién la necesita?
* ¿Qué valor aporta?
* ¿Está alineada con la visión del producto?

---

# Etapa 2 — Análisis

Antes de diseñar la solución se analizará:

* impacto técnico;
* impacto funcional;
* impacto en seguridad;
* impacto en rendimiento;
* impacto en mantenibilidad.

---

# Etapa 3 — Blueprint

Si la funcionalidad modifica el comportamiento esperado del sistema, deberá reflejarse primero en el Master Blueprint.

La documentación constituye la fuente oficial de diseño.

---

# Etapa 4 — Architecture Decision Record (ADR)

Cuando la funcionalidad implique una decisión arquitectónica relevante, deberá registrarse mediante un ADR.

Ejemplos:

* incorporación de una nueva tecnología;
* cambio de patrón arquitectónico;
* modificación de una interfaz pública;
* adopción de una dependencia crítica.

---

# Etapa 5 — Diseño Técnico

El diseño técnico deberá definir, como mínimo:

* componentes involucrados;
* interfaces;
* eventos;
* modelos de datos;
* reglas de negocio;
* riesgos conocidos.

---

# Etapa 6 — Planificación

Antes de implementar se deberá dividir el trabajo en tareas pequeñas, independientes y verificables.

Cada tarea deberá tener un objetivo claro y un criterio de finalización.

---

# Etapa 7 — Implementación

La implementación deberá respetar:

* Coding Standards;
* Naming Conventions;
* Architecture Principles;
* Security Guidelines.

No se permitirá introducir cambios fuera del alcance definido sin una revisión adicional.

---

# Etapa 8 — Testing

Toda funcionalidad deberá incluir las pruebas correspondientes.

Según el caso:

* unitarias;
* integración;
* end-to-end;
* rendimiento;
* seguridad.

No se considerará terminada una implementación sin evidencia de validación.

---

# Etapa 9 — Code Review

Todo cambio deberá ser revisado antes de integrarse.

La revisión verificará:

* calidad del código;
* coherencia con la arquitectura;
* cobertura de pruebas;
* impacto en el sistema;
* cumplimiento de estándares.

---

# Etapa 10 — Documentación

La documentación deberá actualizarse junto con el código.

Esto incluye:

* Blueprint;
* ADR;
* comentarios públicos;
* diagramas;
* manuales técnicos.

La documentación nunca deberá quedar pendiente para una etapa posterior.

---

# Etapa 11 — Integración

Una vez aprobada la revisión técnica:

* se integra la funcionalidad;
* se ejecutan validaciones automáticas;
* se verifica la estabilidad del sistema.

---

# Etapa 12 — Release

La publicación deberá seguir el proceso definido en Release Management.

Todo despliegue deberá ser:

* reproducible;
* reversible;
* trazable.

---

# Etapa 13 — Monitoreo

Después del despliegue se deberá observar:

* comportamiento;
* métricas;
* errores;
* rendimiento;
* eventos relevantes.

El desarrollo finaliza únicamente cuando la funcionalidad demuestra estabilidad en operación.

---

# Participación de Agentes de IA

Los agentes de IA podrán asistir en:

* análisis;
* generación de código;
* documentación;
* pruebas;
* revisiones preliminares;
* refactorizaciones.

Sin embargo:

* no aprueban cambios;
* no sustituyen revisiones humanas;
* no modifican la arquitectura sin autorización.

---

# Gestión de Cambios

Toda modificación deberá ser:

* identificable;
* documentada;
* revisable;
* reversible.

La trazabilidad es un requisito obligatorio del proceso.

---

# Criterios de Finalización

Una funcionalidad se considera finalizada únicamente cuando:

* cumple los requisitos definidos;
* supera todas las pruebas;
* es aprobada en revisión;
* actualiza la documentación;
* puede desplegarse sin afectar la estabilidad del sistema.

---

# Riesgos

Omitir etapas del workflow puede provocar:

* deuda técnica;
* inconsistencias arquitectónicas;
* errores en producción;
* documentación desactualizada;
* pérdida de trazabilidad.

---

# Conclusiones

El Development Workflow constituye el proceso oficial para construir software dentro de SistematizArg.

Su propósito es garantizar que cada cambio sea comprensible, verificable y sostenible, preservando la calidad del sistema a medida que evoluciona.

---

# Referencias

* 00-FOUNDATION/
* 04-ENGINEERING/
* 05-ARCHITECTURE/
* 06-DEVELOPMENT/
* 08-SECURITY/
