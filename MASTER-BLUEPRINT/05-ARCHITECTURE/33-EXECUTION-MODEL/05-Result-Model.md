# Result Model

Ubicación:
05-ARCHITECTURE/33-EXECUTION-MODEL/05-Result-Model.md

---

# Estado

Estado: Aprobado  
Versión: 1.0  
Última actualización: Junio 2026  
Responsable: SistematizArg Architecture Team  
Última revisión: Anual  

---

# Resumen Ejecutivo

El Result Model define la estructura estándar de salida de cualquier Command dentro del Execution Operating System (EOS).

Todo lo que ocurre en el sistema produce un Result observable, trazable y estructurado.

El Result es el contrato final de una Execution.

---

# Principios

## 1. Toda Execution produce un Result

No existen ejecuciones sin resultado.

---

## 2. El Result es estructurado

No puede ser texto libre sin formato.

---

## 3. El Result es trazable

Debe poder relacionarse con Actor, Intent y Command.

---

## 4. El Result es inmutable

Una vez emitido no puede modificarse.

---

# Definición

Un Result es la representación formal del resultado de la ejecución de un Command dentro del sistema.

---

# Tipos de Result

## 1. Success Result

La ejecución fue completada correctamente.

---

## 2. Failure Result

La ejecución falló de forma definitiva.

---

## 3. Partial Result

La ejecución fue parcialmente exitosa.

---

## 4. Retry Result

La ejecución falló pero será reintentada.

---

## 5. Deferred Result

La ejecución fue postergada.

---

## 6. Validation Error Result

Error en validación del Command o Intent.

---

## 7. Security Error Result

Error por políticas o permisos.

---

## 8. Business Error Result

Error de lógica de negocio del Module o Capability.

---

## 9. System Error Result

Error interno del Kernel o Runtime.

---

# Estructura del Result

```text id="1kz8df"
Result
│
├── Result ID
├── Command ID
├── Intent ID
├── Actor ID
├── Status
├── Code
├── Message
├── Data
├── Errors
├── Metadata
└── Timestamp

Estados del Result
1. Generated

El resultado es creado por el sistema.

2. Emitted

El resultado es publicado al Event Bus.

3. Persisted

El resultado es almacenado en audit/log storage.

4. Observed

El resultado es consumido por sistemas de observabilidad.

Flujo del Result
Command Execution
      ↓
Capability / Module / Plugin
      ↓
Result Generation
      ↓
Event Bus
      ↓
Audit System
      ↓
Observability Layer
Relación con otros modelos
Command Model

Todo Result proviene de un Command.

Execution Model

El Result cierra el ciclo de una Execution.

Actor Model

El Result siempre está asociado a un Actor.

Event Bus

El Result se publica como evento.

Audit System

El Result se almacena para trazabilidad.

Observability

El Result alimenta métricas y trazas.

Reglas
Todo Command debe producir un Result.
Todo Result debe ser estructurado.
Todo Result debe ser trazable.
Todo Result debe ser emitido al Event Bus.
Todo Result debe ser persistido en auditoría.
Anti-patrones

❌ Resultados sin estructura
❌ Resultados sin referencia a Command
❌ Resultados mutables
❌ Resultados no observables
❌ resultados sin persistencia

Observabilidad

Cada Result genera:

ExecutionSuccess
ExecutionFailure
ExecutionPartial
ExecutionRetry
ExecutionDeferred
Seguridad

El Result puede contener información sensible.

Debe ser filtrado según:

permisos del Actor
contexto del Tenant
políticas de seguridad
Ejemplo conceptual
Command: CreateUserCommand

↓

Result:
{
  status: SUCCESS,
  code: 200,
  message: "User created",
  data: { userId: "123" }
}
Conclusión

El Result Model es la capa final de la Execution dentro del EOS.

Representa la salida formal, estructurada y observable de toda operación del sistema.



