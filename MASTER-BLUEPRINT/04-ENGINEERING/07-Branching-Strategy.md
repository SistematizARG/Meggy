# Branching Strategy

Ubicación: 04-ENGINEERING/07-Branching-Strategy.md

---

# Estado

Estado: Aprobado

Versión: 1.0

Última actualización: Junio 2026

Responsable: SistematizArg Engineering Team

Última revisión: Semestral o ante cambios en CI/CD

---

# Dependencias

## Engineering

- Engineering Handbook
- Development Workflow
- Versioning Strategy
- Coding Standards

---

# Documentos relacionados

- Release Management
- Code Review Process
- Testing Strategy
- CI/CD Pipeline (futuro)

---

# Resumen Ejecutivo

Este documento define la estrategia oficial de branching utilizada en el repositorio de SistematizArg.

Su objetivo es garantizar un flujo de desarrollo estable, predecible y escalable para equipos humanos y agentes de IA.

---

# Objetivo

Establecer un modelo de branching que permita:

- desarrollo paralelo seguro
- integración continua estable
- releases controladas
- trazabilidad completa de cambios

---

# Modelo adoptado

Se adopta un modelo basado en:

> Trunk-Based Development con ramas de soporte controladas

---

# Rama principal

## main

La rama `main` representa:

- estado estable del sistema
- código listo para producción
- versión siempre deployable

No se permite código roto en `main`.

---

# Rama de desarrollo

## develop (opcional según fase del proyecto)

Puede utilizarse en fases tempranas.

En fases maduras puede eliminarse en favor de trunk-based puro.

---

# Ramas de funcionalidad

## feature/*

Se utilizan para desarrollo de nuevas funcionalidades.

Formato:
feature/<scope>-<description>

Ejemplos:

- feature/auth-user-login
- feature/marketplace-product-catalog
- feature/kernel-event-routing

---

# Ramas de bugfix

## bugfix/*

Correcciones no críticas.

Formato:
bugfix/<description>


---

# Ramas hotfix

## hotfix/*

Correcciones críticas en producción.

Formato:
hotfix/<incident-id>-<description>


---

# Ramas de release

## release/*

Preparación de versiones.

Formato:
release/v<version>


Ejemplo:

- release/v1.2.0

---

# Flujo de trabajo

```text id="flow001"
feature branch
      ↓
pull request
      ↓
code review
      ↓
CI checks
      ↓
merge to main
      ↓
release pipeline
      ↓
production deployment













