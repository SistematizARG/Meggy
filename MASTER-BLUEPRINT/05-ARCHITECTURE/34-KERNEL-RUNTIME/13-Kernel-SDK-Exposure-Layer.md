# Kernel SDK Exposure Layer Specification

Ubicación:
05-ARCHITECTURE/34-KERNEL-RUNTIME/13-Kernel-SDK-Exposure-Layer.md

---

# Estado

Estado: ACTIVE SPECIFICATION  
Versión: 1.0  
Última actualización: Junio 2026  
Responsable: SistematizArg Platform Engineering Team  
Última revisión: Anual  

---

# Resumen Ejecutivo

Este documento define la capa de exposición del Kernel del EOS a sistemas externos mediante SDKs oficiales.

Es el punto de integración controlada entre el Kernel y el mundo exterior.

---

# Principio Fundamental

```text
The Kernel is never accessed directly.

It is accessed through SDKs.

Definición

El SDK Exposure Layer es el subsistema que expone interfaces controladas para interactuar con el Kernel sin romper su arquitectura interna.

Rol dentro del Kernel

El SDK Layer actúa como:

fachada controlada del sistema
abstracción de complejidad interna
punto de integración externo
guardián de invariantes del Kernel
Arquitectura de SDK Layer
External Systems
      ↓
SDK Interface Layer
      ↓
Intent Ingestion Engine
      ↓
Kernel Execution Loop
Componentes Internos
1. SDK Interface Layer

Expone APIs oficiales:

createIntent()
queryExecution()
subscribeEvents()
2. Request Validator

Valida solicitudes entrantes:

schema validation
authentication pre-check
rate limiting
3. Intent Translator

Convierte llamadas SDK en Intents del Kernel:

parameter mapping
action normalization
metadata injection
4. Response Formatter

Convierte Results del Kernel en respuestas externas:

structured output
error normalization
trace inclusion (optional)
5. Event Subscription Bridge

Permite consumo de eventos del Event Bus:

streaming API
webhook support
event filtering
SDK Canonical Model
SDKRequest
│
├── Request ID
├── Actor Token
├── Action
├── Parameters
├── Metadata
└── Timestamp
SDKResponse
│
├── Response ID
├── Status
├── Result Payload
├── Error (optional)
├── Trace ID
└── Metadata
SDK Types
1. Core SDK

Acceso básico al Kernel:

Intent creation
Execution tracking
2. Event SDK

Acceso a Event Bus:

subscriptions
streaming
filtering
3. Admin SDK

Acceso controlado a administración:

system inspection
diagnostics
observability queries
Reglas del SDK Layer
todo acceso externo pasa por SDK
no existe acceso directo al Kernel
todo request se convierte en Intent
toda respuesta es estructurada
todo debe ser rastreable
Propiedades del Sistema
1. Seguro

El SDK no expone internals del Kernel.

2. Versionado

Cambios en SDK son versionados estrictamente.

3. Compatible

Mantiene compatibilidad hacia atrás.

4. Controlado

Toda interacción es filtrada por el Kernel.

Integración con Kernel
External → SDK Layer → Intent Engine → Execution System
Seguridad

El SDK Layer garantiza:

autenticación obligatoria
autorización por capability
aislamiento por tenant
protección del Kernel interno
Observabilidad

Se monitorea:

API latency
request volume
error rates
SDK usage patterns
Anti-patrones

❌ acceso directo al Kernel
❌ ejecución sin Intent
❌ bypass del SDK Layer
❌ respuestas no estructuradas
❌ exposición de internals

Garantía del Sistema

El SDK Layer garantiza:

única entrada controlada al Kernel
estabilidad de integración externa
protección del Execution Model
consistencia de APIs
Conclusión

El SDK Exposure Layer es la frontera oficial del Kernel hacia el exterior.

Todo acceso al sistema debe pasar por esta capa.







