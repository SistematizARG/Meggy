# Engineering Gates

**Ubicación:** `04-ENGINEERING/18-Engineering-Gates.md`

---

# Estado

**Estado:** Aprobado

**Versión:** 1.0

**Última actualización:** Junio 2026

**Responsable:** SistematizArg Engineering Team

**Última revisión:** Junio 2026

**Próxima revisión:** Anual o cuando el proceso de desarrollo cambie significativamente.

---

# Dependencias

## Foundation

* 00-FOUNDATION/03-Engineering-Principles.md

## Engineering

* 00-Engineering-Handbook.md
* 02-Development-Workflow.md
* 16-Definition-of-Done.md

---

# Documentos relacionados

* 05-Architecture-Decision-Records.md
* 09-Testing-Strategy.md
* 10-Code-Review-Process.md
* 11-Documentation-Driven-Development.md
* 12-Release-Management.md
* 17-AI-Assisted-Development.md

---

# Resumen Ejecutivo

Los Engineering Gates definen los puntos oficiales de control del ciclo de desarrollo.

Cada Gate representa un conjunto de criterios obligatorios que deberán cumplirse antes de permitir que una funcionalidad avance a la siguiente etapa.

Su objetivo es garantizar calidad, trazabilidad y coherencia durante todo el proceso de ingeniería.

---

# Objetivo

Establecer un sistema uniforme de validación para todas las iniciativas de desarrollo dentro de SistematizArg.

---

# Alcance

Aplica a:

* nuevas funcionalidades;
* correcciones;
* refactorizaciones;
* componentes de infraestructura;
* módulos de IA;
* servicios internos;
* librerías compartidas.

---

# Principios

## Ninguna etapa se omite

Toda funcionalidad deberá atravesar los Gates definidos en este documento.

---

## La aprobación es objetiva

Cada Gate posee criterios verificables.

No dependerá únicamente del criterio individual de un desarrollador.

---

## La calidad es progresiva

Cada Gate reduce el riesgo antes de avanzar hacia producción.

---

# Flujo General

```text
Idea
 │
 ▼
Gate 0
 │
 ▼
Gate 1
 │
 ▼
Gate 2
 │
 ▼
Gate 3
 │
 ▼
Gate 4
 │
 ▼
Gate 5
 │
 ▼
Gate 6
 │
 ▼
Operación
```

---

# Gate 0 — Blueprint Approval

## Objetivo

Validar que el problema y la solución estén correctamente definidos.

## Criterios

* necesidad identificada;
* alcance definido;
* Blueprint actualizado;
* alineación con Foundation;
* alineación con Product Vision.

## Resultado

Se autoriza el diseño técnico.

---

# Gate 1 — Technical Design Approval

## Objetivo

Validar la solución técnica.

## Criterios

* arquitectura definida;
* interfaces documentadas;
* eventos identificados;
* modelos de datos definidos;
* riesgos conocidos;
* ADR creado cuando corresponda.

## Resultado

Se autoriza la implementación.

---

# Gate 2 — Implementation Complete

## Objetivo

Confirmar que la implementación está completa.

## Criterios

* código compilable;
* estándares respetados;
* sin errores críticos;
* cobertura mínima alcanzada;
* documentación técnica inicial.

## Resultado

Se autoriza el testing.

---

# Gate 3 — Quality Validation

## Objetivo

Validar el comportamiento.

## Criterios

* pruebas unitarias;
* integración;
* seguridad;
* rendimiento (cuando aplique);
* regresión sin errores.

## Resultado

Se autoriza la revisión técnica.

---

# Gate 4 — Engineering Review

## Objetivo

Validar la calidad de ingeniería.

## Criterios

* Code Review aprobado;
* arquitectura respetada;
* deuda técnica documentada;
* documentación actualizada;
* riesgos aceptados.

## Resultado

Se autoriza la integración.

---

# Gate 5 — Release Approval

## Objetivo

Autorizar el despliegue.

## Criterios

* pipeline exitoso;
* artefactos generados;
* versión asignada;
* plan de rollback definido;
* monitoreo preparado.

## Resultado

Se autoriza el despliegue.

---

# Gate 6 — Operational Validation

## Objetivo

Confirmar estabilidad en producción.

## Criterios

* métricas normales;
* logs sin errores críticos;
* alertas controladas;
* rendimiento esperado;
* retroalimentación inicial analizada.

## Resultado

La funcionalidad se considera operativa.

---

# Gate Ownership

Cada Gate posee un responsable principal:

| Gate   | Responsable            |
| ------ | ---------------------- |
| Gate 0 | Product + Arquitectura |
| Gate 1 | Arquitectura           |
| Gate 2 | Desarrollo             |
| Gate 3 | QA                     |
| Gate 4 | Tech Lead              |
| Gate 5 | DevOps                 |
| Gate 6 | Operaciones            |

---

# Participación de Hugi

Hugi puede asistir en:

* revisión documental;
* análisis de riesgos;
* generación de pruebas;
* detección de inconsistencias;
* análisis post-release.

Hugi no puede aprobar ningún Gate.

La aprobación corresponde exclusivamente al proceso de gobernanza técnica.

---

# Trazabilidad

Cada Gate deberá registrar:

* fecha;
* responsable;
* resultado;
* observaciones;
* evidencia.

Toda aprobación deberá poder auditarse.

---

# Excepciones

Solo podrán omitirse Gates mediante una excepción documentada y aprobada por la dirección técnica.

Las excepciones deberán quedar registradas mediante un ADR.

---

# Riesgos

Omitir los Gates puede provocar:

* pérdida de calidad;
* errores en producción;
* arquitectura inconsistente;
* deuda técnica;
* ausencia de trazabilidad.

---

# Conclusiones

Los Engineering Gates constituyen el mecanismo oficial de control de calidad y gobernanza del desarrollo en SistematizArg.

Su cumplimiento garantiza que toda funcionalidad avance de forma ordenada, verificable y alineada con la arquitectura del sistema.

---

# Referencias

* 04-ENGINEERING/
* 05-ARCHITECTURE/
* 06-DEVELOPMENT/
* 08-SECURITY/
