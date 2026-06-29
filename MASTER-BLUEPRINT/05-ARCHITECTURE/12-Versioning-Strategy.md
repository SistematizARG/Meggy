# Versioning Strategy

Ubicación:
05-ARCHITECTURE/12-Versioning-Strategy.md

---

# Estado

Estado: Aprobado

Versión: 1.0

Última actualización: Junio 2026

Responsable:
SistematizArg Architecture Team

---

# Resumen Ejecutivo

Este documento define la estrategia oficial de versionado de todo el ecosistema SistematizArg.

El objetivo no es únicamente controlar versiones de software, sino garantizar la evolución coordinada del Kernel, Event Bus, módulos, APIs, Builders, infraestructura y documentación sin comprometer la estabilidad del sistema.

La estrategia está basada en Semantic Versioning extendido con compatibilidad arquitectónica.

---

# Objetivos

La estrategia de versionado debe garantizar:

- Evolución continua
- Compatibilidad entre componentes
- Releases predecibles
- Rollback seguro
- Migraciones controladas
- Auditoría histórica
- Trazabilidad

---

# Principios

## Compatibilidad primero

Toda nueva versión debe intentar mantener compatibilidad hacia atrás.

---

## Versionar todo

Todo componente posee versión propia.

No únicamente el código fuente.

---

## El Kernel gobierna la compatibilidad

Ningún componente puede ejecutarse sobre un Kernel incompatible.

---

## Los eventos también tienen versión

Los contratos del Event Bus forman parte del sistema de versionado.

---

## Las migraciones son explícitas

Nunca existen cambios implícitos de estructura.

---

# Semantic Versioning

Formato oficial

MAJOR.MINOR.PATCH

Ejemplo

3.4.12

---

## MAJOR

Se incrementa cuando:

- cambia el Kernel
- cambia la arquitectura
- rompe compatibilidad
- cambia el modelo de eventos
- cambia el modelo de seguridad

Ejemplo

1.x.x → 2.0.0

---

## MINOR

Se incrementa cuando:

- nuevos módulos
- nuevas funcionalidades
- nuevos endpoints
- nuevas capacidades del Builder
- nuevas automatizaciones

Compatible hacia atrás.

---

## PATCH

Se incrementa cuando:

- correcciones
- optimizaciones
- mejoras internas
- bugs
- documentación

Nunca rompe compatibilidad.

---

# Componentes Versionados

## Core Kernel

Ejemplo

Kernel 2.3.1

---

## Runtime

Runtime 1.8.0

---

## Event Bus

Event Bus 2.1.0

---

## API

API 3.0.5

---

## Builder

Builder 1.12.0

---

## Automation Engine

Automation 2.0.0

---

## Hosting Layer

Hosting 1.4.3

---

## Billing

Billing 1.1.7

---

## Hugi

Hugi 0.9.0 Beta

---

## SDK

SDK TS 1.2.0

SDK Python 1.0.0

---

## CLI

CLI 1.0.0

---

# Versionado de APIs

Cada endpoint pertenece a una versión.

Ejemplo

/api/v1/

/api/v2/

Nunca se modifican endpoints existentes de forma incompatible.

---

# Versionado del Event Bus

Cada tipo de evento posee versión.

Ejemplo

CustomerCreated v1

CustomerCreated v2

InvoicePaid v1

WorkflowExecuted v3

---

# Versionado de Schemas

Todos los contratos poseen versión.

Ejemplo

JSON Schema

OpenAPI

GraphQL

Internal Contracts

---

# Versionado de Base de Datos

Cada migración tiene:

- ID único
- Fecha
- Responsable
- Compatibilidad
- Rollback

Ejemplo

2026_001_CreateUsers

2026_002_AddOrganizations

---

# Versionado de Builders

Cada Builder mantiene:

- versión
- changelog
- compatibilidad mínima

---

# Versionado de Templates

Los templates son independientes del Builder.

Cada template posee:

Template ID

Versión

Dependencias

Compatibilidad

---

# Versionado de Automatizaciones

Cada workflow tiene:

Workflow Version

Execution Version

Migration History

Rollback Version

---

# Versionado de Plugins

Todo plugin declara:

Plugin Version

Kernel Compatibility

API Compatibility

SDK Compatibility

Builder Compatibility

---

# Versionado de Documentación

Toda documentación posee:

Versión

Fecha

Autor

Estado

Historial

---

# Matriz de Compatibilidad

| Componente | Compatible con |
|------------|----------------|
| Kernel | Runtime |
| Runtime | Event Bus |
| Event Bus | APIs |
| APIs | Builder |
| Builder | Templates |
| Templates | Modules |
| Modules | Plugins |

---

# Ciclo de Vida de Versiones

## Experimental

Uso interno.

---

## Alpha

Desarrollo activo.

---

## Beta

Disponible para pruebas.

---

## Release Candidate

Candidato a producción.

---

## Stable

Uso oficial.

---

## LTS

Soporte extendido.

---

## Deprecated

Será eliminado.

---

## Archived

Fuera de soporte.

---

# Política de Compatibilidad

El sistema garantiza:

PATCH

100%

MINOR

100%

MAJOR

Migración obligatoria

---

# Gestión de Migraciones

Toda migración requiere:

Blueprint

ADR

Testing

Rollback

Documentación

---

# Changelog

Cada release incluye:

Features

Fixes

Breaking Changes

Security

Performance

Migration Notes

Known Issues

---

# Integración con el Kernel

El Kernel valida:

- compatibilidad
- versiones mínimas
- contratos
- eventos

Ningún módulo incompatible puede cargarse.

---

# Integración con Event Bus

Los eventos poseen:

Event ID

Event Version

Schema Version

Producer Version

Consumer Version

---

# Integración con Hugi

Hugi conoce:

Versiones instaladas

Cambios recientes

Migraciones

Breaking changes

Puede sugerir migraciones.

Nunca ejecutarlas.

---

# Anti-patrones

Modificar APIs existentes

❌

Modificar eventos existentes

❌

No versionar schemas

❌

Actualizar producción sin migraciones

❌

Romper compatibilidad silenciosamente

❌

---

# Riesgos

Sin una estrategia de versionado:

- incompatibilidades
- corrupción del Event Bus
- módulos rotos
- despliegues fallidos
- deuda técnica creciente

---

# Conclusiones

La estrategia de versionado garantiza que SistematizArg pueda evolucionar durante años manteniendo estabilidad, compatibilidad y trazabilidad.

Todo el ecosistema evoluciona de manera coordinada bajo el control del Kernel.

---

# Próximo Documento

13-Technology Stack Specification.md









