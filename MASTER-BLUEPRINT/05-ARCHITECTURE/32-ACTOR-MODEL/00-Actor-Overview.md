# Actor Overview

Ubicación:
05-ARCHITECTURE/32-ACTOR-MODEL/00-Actor-Overview.md

---

# Estado

Estado: Aprobado

Versión: 1.0

Última actualización: Junio 2026

Responsable:
SistematizArg Architecture Team

Última revisión:
Anual

---

# Dependencias

## Foundation

- Engineering Principles
- Security Principles
- Company Philosophy

## Architecture

- Kernel Specification
- Execution Context
- Event Bus
- Capability Framework
- Security Architecture

---

# Documentos relacionados

- Authentication Capability
- Authorization Capability
- Audit Capability
- AI Capability
- Plugin System Architecture

---

# Resumen Ejecutivo

El Actor Model define el concepto universal de identidad dentro de SistematizArg.

Un Actor representa cualquier entidad capaz de ejecutar acciones dentro del ecosistema.

La plataforma no distingue entre usuarios humanos, procesos automáticos, plugins o agentes de inteligencia artificial desde el punto de vista del Kernel.

Todos son tratados como Actores con un contexto, permisos y responsabilidades claramente definidos.

---

# Objetivos

El Actor Model tiene como objetivos:

- Unificar el modelo de identidad.
- Simplificar la autorización.
- Estandarizar la auditoría.
- Desacoplar la identidad del tipo de entidad.
- Permitir la incorporación de nuevos tipos de actores sin modificar el Kernel.

---

# Definición

Un Actor es una entidad identificable capaz de iniciar, ejecutar o solicitar operaciones dentro del sistema.

Todo Actor posee una identidad única y un contexto de ejecución.

---

# Principios

## Identidad única

Cada Actor dispone de un identificador global e inmutable.

---

## Contexto explícito

Toda acción se ejecuta dentro de un Execution Context.

---

## Mínimo privilegio

Cada Actor posee únicamente los permisos estrictamente necesarios.

---

## Auditoría obligatoria

Toda acción relevante realizada por un Actor deberá registrarse.

---

## Independencia del tipo

El Kernel no diferencia el origen del Actor.

Las reglas se aplican de forma uniforme.

---

# Clasificación de Actores

## Human Actor

Representa a una persona.

Ejemplos:

- Administrador
- Editor
- Cliente
- Empleado
- Operador

---

## Service Actor

Representa procesos automáticos.

Ejemplos:

- Scheduler
- Queue Worker
- Cron
- Background Jobs

---

## System Actor

Representa componentes internos del Kernel.

Ejemplos:

- Runtime Manager
- Event Bus
- Configuration Manager
- Policy Engine

---

## AI Actor

Representa agentes de inteligencia artificial.

Ejemplo principal:

Hugi

Otros agentes especializados podrán añadirse en el futuro.

---

## Plugin Actor

Representa plugins instalados.

Cada plugin posee identidad propia.

---

## External Actor

Representa integraciones externas.

Ejemplos:

- APIs
- Webhooks
- Servicios de terceros
- Integraciones empresariales

---

# Arquitectura Conceptual

```text
                     Actor
                       │
     ┌─────────────────┼─────────────────┐
     │                 │                 │
 Human          Non-Human          External
     │                 │                 │
 Users      Services / AI / Plugins     APIs
```

---

# Identidad

Todo Actor posee:

- Actor ID
- Actor Type
- Nombre
- Tenant Context
- Workspace Context
- Estado
- Permisos
- Roles
- Capacidades autorizadas
- Metadata

---

# Estados

Un Actor puede encontrarse en:

- Created
- Active
- Suspended
- Revoked
- Archived

---

# Contexto de Ejecución

Todo Actor opera dentro de un Execution Context.

El Contexto incluye:

- Tenant
- Workspace
- Session
- Trace ID
- Correlation ID
- Locale
- Timezone
- Feature Flags
- Security Context

---

# Autenticación

No todos los Actores requieren autenticación interactiva.

Ejemplos:

Human Actor → Login

Plugin Actor → Firma digital

Service Actor → Credenciales internas

AI Actor → Token del Kernel

External Actor → API Key / OAuth

---

# Autorización

Todos los Actores utilizan el mismo motor de autorización.

Las decisiones se basan en:

- Roles
- Permisos
- Policies
- Contexto
- Estado del Actor

---

# Eventos

Ejemplos:

ActorCreated

ActorActivated

ActorSuspended

ActorRevoked

ActorAuthenticated

ActorAuthorizationFailed

ActorPermissionGranted

ActorPermissionRevoked

---

# Observabilidad

Cada Actor genera:

- Logs
- Métricas
- Eventos
- Auditoría
- Trazas distribuidas

---

# Seguridad

Todo Actor debe:

- ser identificable;
- respetar el principio de mínimo privilegio;
- operar dentro de un contexto válido;
- cumplir las políticas de seguridad.

---

# Hugi como Actor

Hugi es un AI Actor de primer nivel.

No posee privilegios especiales.

Interactúa con el sistema utilizando las mismas interfaces que cualquier otro Actor.

Sus acciones son completamente auditables.

---

# Extensibilidad

El modelo permite incorporar nuevos tipos de Actores sin modificar el Kernel.

Ejemplos futuros:

- Robots físicos
- Agentes IoT
- Agentes distribuidos
- Federaciones externas
- Agentes autónomos supervisados

---

# Anti-patrones

❌ Código que asume que toda acción proviene de un usuario.

❌ Permisos implícitos por tipo de Actor.

❌ Actores sin identidad persistente.

❌ Acciones sin contexto.

❌ Actores sin auditoría.

---

# Riesgos

No disponer de un modelo unificado de Actores provoca:

- duplicación de lógica;
- inconsistencias de seguridad;
- auditorías incompletas;
- mayor complejidad en el Runtime.

---

# Conclusiones

El Actor Model establece un lenguaje común para todo el ecosistema de SistematizArg.

Al abstraer la identidad en el concepto de Actor, la plataforma consigue un modelo uniforme para autenticación, autorización, auditoría, observabilidad y ejecución, facilitando su evolución futura sin aumentar la complejidad del Kernel.

---

03-System-Actor.md

04-AI-Actor.md
