# Execution Context

Ubicación:
05-ARCHITECTURE/33-EXECUTION-MODEL/02-Execution-Context.md

---

# Estado

Estado: Aprobado  
Versión: 1.0  
Última actualización: Junio 2026  
Responsable: SistematizArg Architecture Team  
Última revisión: Anual  

---

# Resumen Ejecutivo

El Execution Context define el entorno completo en el que una Execution ocurre dentro del Execution Operating System (EOS).

Es el conjunto de información que contextualiza, condiciona y gobierna cada ejecución.

Sin Execution Context no existe ejecución válida en el sistema.

---

# Principios

## 1. Todo Execution tiene Contexto

Ninguna operación puede ejecutarse fuera de un contexto definido.

---

## 2. El Contexto es inmutable durante la Execution

Una vez iniciada la ejecución, el contexto no puede cambiar.

---

## 3. El Contexto es completo

Contiene toda la información necesaria para:

- seguridad
- autorización
- auditoría
- observabilidad
- routing

---

## 4. El Contexto es trazable

Todo Execution Context puede ser reconstruido desde logs y eventos.

---

# Definición

El Execution Context es el conjunto estructurado de datos que describe:

- quién ejecuta
- desde dónde ejecuta
- bajo qué condiciones ejecuta
- con qué permisos ejecuta
- en qué entorno ejecuta

---

# Componentes del Execution Context

## 1. Actor Context

Identidad del actor ejecutor:

- Actor ID
- Actor Type
- Roles
- Claims
- Status

---

## 2. Tenant Context

Aislamiento multi-tenant:

- Tenant ID
- Organization ID
- Billing scope
- Resource limits

---

## 3. Workspace Context

Contexto operativo:

- Workspace ID
- Project scope
- Environment (dev/staging/prod)

---

## 4. Security Context

Información de seguridad:

- authentication state
- session validity
- device trust
- IP metadata
- risk score

---

## 5. Permission Context

Permisos activos en la ejecución:

- roles efectivos
- policies aplicadas
- capability access
- scoped permissions

---

## 6. Runtime Context

Información del sistema:

- kernel version
- runtime mode
- execution mode (sync/async)
- resource allocation

---

## 7. Temporal Context

Información de tiempo:

- timestamp inicio
- timezone
- expiration window
- scheduling metadata

---

## 8. Trace Context

Trazabilidad distribuida:

- trace ID
- correlation ID
- span ID
- parent execution ID

---

## 9. Localization Context

Contexto de usuario/sistema:

- locale
- language
- region
- formatting rules

---

## 10. Feature Context

Control dinámico del sistema:

- feature flags activos
- experiment groups
- rollout percentage

---

# Estructura del Execution Context

```text
ExecutionContext
│
├── ActorContext
├── TenantContext
├── WorkspaceContext
├── SecurityContext
├── PermissionContext
├── RuntimeContext
├── TemporalContext
├── TraceContext
├── LocalizationContext
└── FeatureContext


Ciclo de Vida
1. Creation

El contexto se construye antes de la Execution.

2. Validation

El Kernel valida su integridad.

3. Attachment

Se asocia a la Execution.

4. Immutability Lock

Se bloquea para evitar modificaciones.

5. Propagation

Se propaga a:

Capabilities
Modules
Plugins
Event Bus
Observability layer
Propiedades Clave
1. Determinismo

Misma ExecutionContext + mismo Intent = mismo comportamiento.

2. Aislamiento

Cada ExecutionContext es independiente.

3. Portabilidad

Puede serializarse y transmitirse entre servicios.

4. Reproducibilidad

Permite reconstruir una Execution exacta.

5. Seguridad

El contexto define límites de ejecución.

Relación con otros modelos
Actor Model

El Actor es fuente primaria del contexto.

Execution Model

La Execution consume el Contexto.

Policy Engine

Evalúa el contexto para autorizar acciones.

Capability Framework

Las Capabilities reciben el contexto para operar.

Event Bus

El contexto viaja con cada evento.

Observability

El contexto es clave para tracing y debugging.

Ejemplo conceptual
Actor: AI Agent (Hugi)
Tenant: Empresa X
Workspace: Proyecto Y
Security: MFA verified
Permissions: limited admin
Runtime: async execution
Trace: abc-123
Reglas
No Execution sin Contexto
No Contexto mutable en runtime
No bypass del Kernel
No ejecución fuera del Tenant scope
Anti-patrones

❌ Contextos parciales
❌ Contextos mutables durante ejecución
❌ Ejecuciones sin tenant
❌ Permisos fuera del contexto
❌ trazabilidad perdida

Observabilidad del Contexto

Cada ExecutionContext debe poder ser inspeccionado en:

logs
traces
audit events
debugging tools
Seguridad

El ExecutionContext es una superficie crítica de seguridad.

Debe proteger:

identidad
permisos
aislamiento de tenants
datos sensibles
Conclusión

El Execution Context es el entorno completo que hace posible una Execution segura, trazable y determinista dentro del EOS.

Es el “ambiente operativo” del sistema.



