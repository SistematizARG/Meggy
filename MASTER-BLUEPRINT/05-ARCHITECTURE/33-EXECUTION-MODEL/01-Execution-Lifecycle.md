# Execution Lifecycle

Ubicación:
05-ARCHITECTURE/33-EXECUTION-MODEL/01-Execution-Lifecycle.md

---

# Estado

Estado: Aprobado  
Versión: 1.0  
Última actualización: Junio 2026  
Responsable: SistematizArg Architecture Team  
Última revisión: Anual  

---

# Resumen Ejecutivo

El Execution Lifecycle define el ciclo de vida completo de una ejecución dentro del Execution Operating System (EOS).

Toda acción en el sistema atraviesa un conjunto de estados bien definidos, controlados por el Kernel, el Policy Engine y el Runtime.

Este modelo garantiza consistencia, trazabilidad y control total sobre cada operación.

---

# Principios

## 1. Toda Execution tiene estado

No existen ejecuciones “instantáneas” sin representación de estado.

---

## 2. El estado es inmutable por etapa

Cada transición genera un nuevo estado observable.

---

## 3. El Kernel controla las transiciones

Ningún módulo o capability puede alterar el ciclo libremente.

---

## 4. Cada transición es auditable

Todo cambio de estado genera eventos.

---

# Estados del Execution Lifecycle

## 1. Created

La ejecución es creada a partir de un Intent.

- aún no validada
- sin permisos evaluados
- sin ejecución iniciada

---

## 2. Validated

El sistema valida:

- formato del Intent
- estructura del Command
- contexto mínimo requerido

---

## 3. Authorized

El Permission Engine determina si el Actor puede ejecutar la acción.

---

## 4. Scheduled (opcional)

La ejecución se agenda para futuro.

- cron jobs
- workflows diferidos
- colas

---

## 5. Running

La ejecución está activa.

- el Kernel está procesando el Command
- se invocan Capabilities o Modules

---

## 6. Waiting

La ejecución está pausada temporalmente.

Motivos:

- dependencia externa
- IO
- eventos pendientes

---

## 7. Retrying

La ejecución falló pero será reintentada.

- backoff
- políticas de retry

---

## 8. Completed

La ejecución terminó con éxito.

- resultado disponible
- eventos emitidos

---

## 9. Failed

La ejecución terminó con error no recuperable.

- error registrado
- auditoría completa

---

## 10. Cancelled

La ejecución fue cancelada antes de completarse.

- por el Actor
- por el sistema
- por políticas

---

## 11. Archived

La ejecución es cerrada y almacenada para histórico.

- optimización de almacenamiento
- auditoría histórica

---

# Diagrama del Lifecycle

```text
Created
   ↓
Validated
   ↓
Authorized
   ↓
Scheduled (optional)
   ↓
Running
   ↓
   ├── Waiting
   ├── Retrying
   ↓
Completed / Failed / Cancelled
   ↓
Archived



Reglas de Transición
Permitidas
Created → Validated
Validated → Authorized
Authorized → Running
Running → Completed
Running → Failed
Running → Cancelled
Running → Waiting → Running
Failed → Retrying → Running
Completed → Archived
Failed → Archived
Cancelled → Archived
No permitidas
Saltar estados intermedios
Ejecutar sin autorización
Completar sin Running
Archivar sin finalización
Timeouts

Cada estado puede tener:

timeout máximo
retry policy
fallback behavior
Retry Model

El estado Retrying sigue reglas:

exponential backoff
max retries configurables
failure classification
Cancelación

Una Execution puede ser cancelada si:

aún no está Completed
policy lo permite
Actor o sistema lo solicita
Relación con otros modelos
Actor Model

Define quién ejecuta la transición.

Execution Context

Define el entorno en el que ocurre cada estado.

Policy Engine

Define si la transición es válida.

Event Bus

Cada transición genera eventos.

Observability

Cada estado es observable en tiempo real.

Eventos del Lifecycle
ExecutionCreated
ExecutionValidated
ExecutionAuthorized
ExecutionScheduled
ExecutionStarted
ExecutionWaiting
ExecutionRetrying
ExecutionCompleted
ExecutionFailed
ExecutionCancelled
ExecutionArchived
Métricas
tiempo por estado
tasa de éxito
tasa de fallo
retries promedio
latencia de ejecución
throughput
Anti-patrones

❌ ejecuciones sin estado
❌ saltar autorización
❌ mutar estados directamente
❌ ejecución sin trazabilidad
❌ lógica de negocio en el lifecycle

Conclusión

El Execution Lifecycle es el mecanismo central que permite controlar el comportamiento del sistema de forma determinista, auditable y extensible.

Define con precisión cómo “vive” una ejecución dentro del EOS.



