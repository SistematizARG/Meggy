# Intent Model

Ubicación:
05-ARCHITECTURE/33-EXECUTION-MODEL/03-Intent-Model.md

---

# Estado

Estado: Aprobado  
Versión: 1.0  
Última actualización: Junio 2026  
Responsable: SistematizArg Architecture Team  
Última revisión: Anual  

---

# Resumen Ejecutivo

El Intent Model define la capa semántica inicial de toda ejecución dentro del Execution Operating System (EOS).

Un Intent representa la intención declarativa de realizar una acción antes de que esta sea transformada en comandos ejecutables.

Es el punto de entrada conceptual de todo el sistema.

---

# Principios

## 1. Todo comienza con un Intent

No existe Execution sin Intent previo.

---

## 2. El Intent es declarativo

Describe “qué se quiere lograr”, no “cómo se hace”.

---

## 3. El Intent es independiente de la implementación

No depende de Capabilities, Modules o Plugins.

---

## 4. El Intent es validable

Puede ser verificado antes de su ejecución.

---

# Definición

Un Intent es una representación estructurada de una intención del Actor dentro del sistema.

Ejemplo:

- “crear usuario”
- “enviar notificación”
- “ejecutar workflow”
- “procesar pago”

---

# Ciclo del Intent

```text
Actor
  ↓
Intent Creation
  ↓
Validation
  ↓
Normalization
  ↓
Command Mapping
  ↓
Execution

Estados del Intent
1. Created

El Intent es generado por el Actor.

2. Validated

Se valida sintaxis y estructura.

3. Interpreted

El Kernel interpreta la intención.

4. Mapped

Se traduce a uno o más Commands.

5. Dispatched

Se envía al Execution Engine.

Tipos de Intent
1. Direct Intent

Acción explícita.

Ejemplo:

“crear usuario”
2. Derived Intent

Generado por el sistema.

Ejemplo:

retry automático
workflow step
3. AI Intent

Generado por un AI Actor (Hugi).

4. System Intent

Generado por el Kernel o Scheduler.

Estructura del Intent
Intent
│
├── Intent ID
├── Actor ID
├── Type
├── Payload
├── Priority
├── Timestamp
├── Context Reference
└── Metadata
Payload del Intent

El payload describe la intención:

{
  "action": "create_user",
  "parameters": {
    "email": "user@domain.com",
    "role": "admin"
  }
}
Resolución del Intent

El Kernel transforma el Intent en Commands mediante:

1. Intent Parser

Interpreta semánticamente la intención.

2. Capability Resolver

Identifica qué Capability puede ejecutarlo.

3. Policy Validation

Valida si el Intent está permitido.

4. Command Generator

Genera uno o más Commands ejecutables.

Relación con otros modelos
Actor Model

El Actor es el origen del Intent.

Execution Context

El Intent se ejecuta dentro de un Contexto.

Command Model

El Intent se transforma en Commands.

Execution Model

El Intent es la entrada de la Execution.

Policy Engine

Valida si el Intent puede continuar.

Reglas
Todo Intent debe ser explícito.
Todo Intent debe ser validable.
Todo Intent debe ser trazable.
Todo Intent debe generar auditabilidad.
Anti-patrones

❌ Ejecutar acciones sin Intent
❌ Intent ambiguo o implícito
❌ Mezclar Intent con Command
❌ Saltar validación del Intent
❌ Ejecutar lógica de negocio en el Intent

Observabilidad

Cada Intent genera:

IntentCreated
IntentValidated
IntentRejected
IntentMapped
IntentExecuted
Seguridad

El Intent es el primer punto de control del sistema.

Debe ser validado contra:

permisos del Actor
políticas del sistema
contexto de ejecución
Ejemplo conceptual
Actor: User
Intent: create_user
Payload: { email, role }

↓

Command: CreateUserCommand
Capability: Identity Capability
Conclusión

El Intent Model es la capa semántica inicial del EOS.

Representa la intención pura del Actor antes de ser transformada en acciones ejecutables por el sistema.



