# Command Model

Ubicación:
05-ARCHITECTURE/33-EXECUTION-MODEL/04-Command-Model.md

---

# Estado

Estado: Aprobado  
Versión: 1.0  
Última actualización: Junio 2026  
Responsable: SistematizArg Architecture Team  
Última revisión: Anual  

---

# Resumen Ejecutivo

El Command Model define la capa ejecutable intermedia entre un Intent y una Execution dentro del Execution Operating System (EOS).

Un Command representa una instrucción concreta, estructurada y ejecutable por el Kernel hacia una Capability, Module o Plugin.

Es el puente entre la intención semántica y la ejecución real.

---

# Principios

## 1. Todo Command es ejecutable

Un Command siempre representa una acción concreta.

---

## 2. Todo Command es derivado de un Intent

No existen Commands sin Intent previo.

---

## 3. Los Commands son deterministas

Un mismo Command produce el mismo resultado bajo el mismo contexto.

---

## 4. Los Commands son inmutables

Una vez generados, no pueden modificarse.

---

# Definición

Un Command es una unidad estructurada de ejecución generada a partir de un Intent, procesada por el Kernel y enviada a una Capability, Module o Plugin para su ejecución.

---

# Flujo del Command

```text
Intent
  ↓
Intent Parser
  ↓
Command Generator
  ↓
Policy Engine
  ↓
Kernel Runtime
  ↓
Capability / Module / Plugin
  ↓
Result

Estados del Command
1. Created

Generado a partir de un Intent.

2. Validated

Verificación estructural y semántica.

3. Authorized

Aprobado por el Permission Engine.

4. Scheduled (opcional)

Asignado a ejecución futura.

5. Dispatched

Enviado al runtime.

6. Executing

En ejecución activa.

7. Completed

Ejecutado correctamente.

8. Failed

Ejecutado con error.

9. Cancelled

Cancelado antes o durante ejecución.

Estructura del Command
Command
│
├── Command ID
├── Intent ID
├── Actor ID
├── Type
├── Target Capability / Module / Plugin
├── Action
├── Parameters
├── Context Reference
├── Priority
├── Timestamp
└── Metadata
Tipos de Command
1. Capability Command

Ejecutado por una Capability.

Ejemplo:

CreateUserCommand
2. Module Command

Ejecutado por lógica de negocio.

Ejemplo:

ProcessOrderCommand
3. Plugin Command

Ejecutado por extensiones externas.

4. System Command

Generado por el Kernel.

Ejemplo:

RetryExecutionCommand
5. AI Command

Generado por Hugi u otros AI Actors.

Generación de Commands

Los Commands se generan desde Intents mediante:

1. Intent Mapping

Traducción semántica → acción concreta.

2. Capability Resolution

Selección de destino de ejecución.

3. Policy Validation

Validación de reglas del sistema.

4. Command Construction

Construcción estructurada del Command.

Relación con otros modelos
Intent Model

El Command es derivado del Intent.

Execution Model

El Command es la unidad ejecutable de una Execution.

Actor Model

Todo Command está asociado a un Actor.

Execution Context

El Command se ejecuta dentro de un Contexto.

Capability Framework

Los Commands son ejecutados por Capabilities.

Event Bus

Los Commands generan eventos de ejecución.

Reglas
Todo Command debe tener Intent origen.
Todo Command debe ser validado.
Todo Command debe ser trazable.
Todo Command debe ser ejecutado dentro de un Contexto.
Todo Command debe generar observabilidad.
Anti-patrones

❌ Commands sin Intent
❌ Commands mutables
❌ Commands sin contexto
❌ Commands ejecutados directamente sin Kernel
❌ lógica de negocio dentro del Command

Observabilidad

Cada Command genera eventos:

CommandCreated
CommandValidated
CommandAuthorized
CommandDispatched
CommandExecuted
CommandFailed
Seguridad

El Command es un punto crítico de control.

Debe ser validado contra:

permisos del Actor
políticas del sistema
contexto de ejecución
restricciones de Capability
Ejemplo conceptual
Intent: create_user

↓

Command: CreateUserCommand
Target: Identity Capability
Parameters: email, role
Conclusión

El Command Model representa la transición del mundo semántico al mundo ejecutable dentro del EOS.

Es la unidad operativa que permite al Kernel coordinar la ejecución real de acciones en el sistema.


