# Execution SDK

Ubicación:
05-ARCHITECTURE/33-EXECUTION-MODEL/09-Execution-SDK.md

---

# Estado

Estado: Aprobado  
Versión: 1.0  
Última actualización: Junio 2026  
Responsable: SistematizArg Engineering Team  
Última revisión: Anual  

---

# Resumen Ejecutivo

El Execution SDK define la interfaz estándar para interactuar con el Execution Operating System (EOS) desde cualquier entorno: TypeScript, Python, servicios backend, AI Actors (Hugi), plugins o workers.

Su objetivo es garantizar que todas las ejecuciones del sistema utilicen el mismo contrato.

---

# Principios

## 1. Un solo modelo de ejecución

Todo se ejecuta mediante el mismo flujo: Intent → Command → Execution → Result.

---

## 2. SDK independiente del runtime

El SDK no depende del lenguaje de implementación.

---

## 3. Interfaz uniforme

Todos los actores interactúan con el sistema de la misma forma.

---

## 4. Seguridad integrada

Toda llamada al SDK pasa por el Security Layer.

---

# Definición

El Execution SDK es el conjunto de interfaces, contratos y utilidades que permiten interactuar con el EOS de forma controlada, segura y trazable.

---

# Arquitectura del SDK

```text id="sdkarch"
Client Layer
   ↓
SDK Interface
   ↓
Request Builder (Intent)
   ↓
Security Validator
   ↓
Kernel Gateway
   ↓
Execution Engine
   ↓
Result Handler
   ↓
Event Stream

Componentes del SDK
1. Intent API

Permite crear intenciones.

createIntent({
  action: "create_user",
  payload: {
    email: "user@domain.com",
    role: "admin"
  }
})
2. Command API

Permite inspeccionar comandos generados.

getCommand(commandId)
3. Execution API

Permite ejecutar y monitorear ejecuciones.

execute(intent)
4. Result API

Permite acceder a resultados estructurados.

getResult(executionId)
5. Event Stream API

Permite suscribirse a eventos.

subscribeEvents({
  executionId: "ex_123"
})
Flujo del SDK
Developer / Actor
        ↓
Execution SDK
        ↓
Intent Creation
        ↓
Kernel Gateway
        ↓
Execution Pipeline
        ↓
Result + Events
        ↓
SDK Response
SDK en TypeScript
export interface ExecutionSDK {
  createIntent(input: IntentInput): Intent;
  execute(intent: Intent): Promise<ExecutionResult>;
  getResult(executionId: string): ExecutionResult;
  getCommand(commandId: string): Command;
  subscribeEvents(filter: EventFilter): EventStream;
}
SDK en Python
class ExecutionSDK:

    def create_intent(self, input):
        pass

    def execute(self, intent):
        pass

    def get_result(self, execution_id):
        pass

    def subscribe_events(self, filter):
        pass
Seguridad del SDK

Todo acceso al SDK está sujeto a:

Authentication Layer
Authorization Layer
Policy Engine
Tenant Isolation
Execution Context validation
Reglas
Ningún SDK bypassa el Kernel.
Todo Intent debe ser validado.
Todo Execution es auditado.
Todo Result es trazable.
Todo Event es observable.
Eventos del SDK
SDKIntentCreated
SDKExecutionStarted
SDKExecutionCompleted
SDKExecutionFailed
SDKAuthorizationDenied
Integración con otros modelos
Execution Model

El SDK es la interfaz del Execution Model.

Actor Model

Todo uso del SDK proviene de un Actor.

Security Model

El SDK está completamente gobernado por seguridad central.

Observability Model

Cada llamada del SDK genera trazas.

Event Bus

El SDK puede consumir y emitir eventos.

Casos de uso
1. Backend Services

Microservicios internos.

2. Frontend Applications

Interfaces web o móviles.

3. AI Actors (Hugi)

Ejecución autónoma controlada.

4. Plugins

Extensiones del sistema.

5. Workers

Procesos asíncronos.

Anti-patrones

❌ acceso directo a capabilities sin SDK
❌ ejecución sin Intent
❌ bypass del Kernel
❌ resultados sin trazabilidad
❌ SDK sin control de seguridad

Beneficios
consistencia total en ejecución
reducción de complejidad
seguridad centralizada
interoperabilidad total
base para ecosistema extensible
Conclusión

El Execution SDK es la puerta estándar de entrada al EOS.

Garantiza que toda interacción con el sistema sea segura, uniforme y completamente trazable.




