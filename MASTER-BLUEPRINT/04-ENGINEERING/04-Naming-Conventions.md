# Naming Conventions

Ubicación: 04-ENGINEERING/04-Naming-Conventions.md

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

- Engineering Principles

## Engineering

- Coding Standards
- Engineering Handbook

---

# Documentos relacionados

- Architecture Decision Records
- Development Workflow
- Code Review Process

---

# Resumen Ejecutivo

Este documento define las convenciones oficiales de nomenclatura para todo el ecosistema SistematizArg.

Su objetivo es asegurar que cualquier persona o agente de IA pueda comprender el propósito de cualquier elemento del sistema únicamente a partir de su nombre.

---

# Objetivo

Definir reglas claras y consistentes para nombrar:

- variables
- funciones
- clases
- módulos
- servicios
- eventos
- APIs
- archivos
- carpetas
- dominios del sistema

---

# Principios

## Intención explícita

Los nombres deben expresar intención, no implementación.

---

## Consistencia global

Un mismo concepto debe tener siempre el mismo nombre en todo el sistema.

---

## Evitar abreviaciones ambiguas

No se permiten abreviaciones que no sean universalmente entendibles dentro del contexto del proyecto.

---

## Contexto suficiente

Un nombre debe ser comprensible sin necesidad de consultar documentación adicional.

---

# Convenciones generales

## Idioma

Todo el sistema deberá utilizar inglés técnico como idioma base.

Excepciones:

- documentación de negocio
- nombres comerciales del producto

---

## Estilo de nombres

| Elemento | Convención |
|----------|------------|
| Variables | camelCase |
| Funciones | camelCase |
| Clases | PascalCase |
| Interfaces | PascalCase |
| Tipos | PascalCase |
| Archivos | kebab-case |
| Carpetas | kebab-case |
| Constantes | UPPER_SNAKE_CASE |

---

# Reglas por tipo de elemento

## Variables

Las variables deben representar estados o valores claros.

❌ Incorrecto:
- `data`
- `info`
- `temp`

✔ Correcto:
- `userProfile`
- `invoiceTotal`
- `activeSessions`

---

## Funciones

Las funciones deben describir acciones.

Deben comenzar con un verbo.

✔ Ejemplos:
- `createUser()`
- `calculateTotalPrice()`
- `validatePayment()`

❌ Evitar:
- `user()`
- `process()`
- `handle()`

---

## Booleanos

Los valores booleanos deben responder a una pregunta.

Deben comenzar con:

- `is`
- `has`
- `can`
- `should`

✔ Ejemplos:
- `isAuthenticated`
- `hasPermission`
- `canAccessModule`

---

## Clases

Las clases deben representar entidades o conceptos del dominio.

✔ Ejemplos:
- `User`
- `Invoice`
- `PaymentProcessor`

---

## Interfaces

Las interfaces deben describir capacidades o contratos.

✔ Ejemplos:
- `UserRepository`
- `EventHandler`
- `StorageProvider`

---

## Eventos

Los eventos deben describir hechos en pasado.

✔ Ejemplos:
- `UserCreated`
- `PaymentProcessed`
- `InvoiceGenerated`

---

## APIs

Los endpoints deben ser:

- descriptivos
- orientados a recursos
- consistentes

✔ Ejemplo:
POST /users/create
GET /users/{id}
DELETE /users/{id}


---

## Archivos

Los nombres de archivo deben:

- ser descriptivos
- reflejar su responsabilidad
- evitar redundancia

✔ Ejemplo:
- `user-service.ts`
- `payment-controller.ts`
- `event-bus.ts`

---

## Carpetas

Las carpetas representan dominios funcionales.

✔ Ejemplo:
- `auth/`
- `billing/`
- `marketplace/`
- `automation/`

---

# Reglas de dominio

## Consistencia semántica

Un mismo concepto debe mantener el mismo nombre en:

- código
- documentación
- eventos
- APIs
- base de datos

---

## Evitar duplicación semántica

No deben existir dos nombres diferentes para el mismo concepto.

---

# Eventos del sistema

Los eventos deben seguir el patrón:
<Subject><Action>

✔ Ejemplos:
- `UserRegistered`
- `PaymentConfirmed`
- `ModuleInstalled`

---

# Bases de datos

## Tablas

Singular, clara y en inglés.

✔ Ejemplos:
- `user`
- `invoice`
- `payment`

---

## Columnas

camelCase consistente.

✔ Ejemplo:
- `createdAt`
- `updatedAt`
- `userId`

---

# Prohibiciones

No se permite:

- nombres genéricos (`data`, `item`, `value`)
- abreviaciones no estándar
- duplicación semántica
- inconsistencia entre capas
- nombres que describen implementación interna en lugar de intención

---

# Código generado por IA

Todo código generado por IA deberá respetar estrictamente estas convenciones.

Los nombres incorrectos se consideran defecto crítico en revisión.

---

# Criterios de cumplimiento

Un sistema cumple estas convenciones cuando:

- todos los nombres son consistentes;
- no existen ambigüedades semánticas;
- un nuevo desarrollador puede entender el sistema solo leyendo nombres.

---

# Riesgos

El incumplimiento genera:

- pérdida de legibilidad
- aumento de deuda técnica
- dificultad de mantenimiento
- errores de interpretación
- baja escalabilidad del sistema

---

# Conclusiones

Las Naming Conventions son una parte fundamental del diseño del sistema.

Un buen nombre reduce la necesidad de documentación adicional y mejora la comprensión global del sistema.

---

# Referencias

- Coding Standards
- Development Workflow
- Event Bus Specification (futuro)


















