SECURITY / Threat Model

Estado: Aprobado
Versión: 1.0
Última actualización: Junio 2026
Autor: SistematizArg Engineering Team

Objetivo

Definir el modelo de amenazas de SistematizArg y Muggi.

Este documento identifica actores, vectores de ataque, superficies de exposición y categorías de riesgo que el sistema debe considerar para mantener integridad, disponibilidad y confidencialidad.

No define mitigaciones técnicas específicas, sino clasificación estructural del riesgo.

Alcance

Este documento aplica a:

Core System
Security Layers (IAS, APS, DSL, ESL, ISL)
Módulos de Muggi
Integraciones externas
Infraestructura de hosting
Sistemas de automatización e IA
Principio central

Todo sistema complejo debe asumirse como potencialmente atacable desde múltiples frentes.

La seguridad no parte de confianza, sino de suposición de hostilidad parcial o total del entorno externo e interno.

Modelo general de amenazas

El sistema considera cinco categorías principales de amenazas:

1. Amenazas de identidad (Identity Threats)
Descripción

Ataques que buscan comprometer o suplantar identidades dentro del sistema.

Ejemplos conceptuales
robo de credenciales,
suplantación de usuario o sistema,
escalamiento no autorizado de identidad,
abuso de sesiones activas.
Impacto
acceso no autorizado a módulos,
manipulación de datos,
ejecución de acciones críticas.
Área afectada
Identity & Access Security (IAS)
Session Management
Core System
2. Amenazas de autorización (Authorization Threats)
Descripción

Ataques que intentan explotar fallos en permisos o políticas de acceso.

Ejemplos conceptuales
bypass de roles,
abuso de permisos legítimos,
escalamiento de privilegios,
manipulación de policies.
Impacto
ejecución de acciones restringidas,
modificación de recursos críticos,
alteración del comportamiento del sistema.
Área afectada
Authorization & Policy Security (APS)
Core System
3. Amenazas de datos (Data Threats)
Descripción

Ataques dirigidos a la integridad, confidencialidad o consistencia de los datos.

Ejemplos conceptuales
corrupción de datos,
fuga de información sensible,
inconsistencias entre módulos,
manipulación de registros.
Impacto
pérdida de confiabilidad del sistema,
errores sistémicos,
decisiones incorrectas del sistema.
Área afectada
Data Security Layer (DSL)
Core System
Módulos de persistencia
4. Amenazas de ejecución (Execution Threats)
Descripción

Ataques que afectan la forma en que el sistema ejecuta procesos internos o automatizados.

Ejemplos conceptuales
ejecución no autorizada de automatizaciones,
manipulación de flujos del sistema,
triggers maliciosos,
loops o comportamientos no deseados.
Impacto
inestabilidad del sistema,
acciones críticas no controladas,
degradación operativa.
Área afectada
Execution Security Layer (ESL)
Automation Module
Core System
5. Amenazas de integración (Integration Threats)
Descripción

Ataques provenientes de sistemas externos conectados a Muggi.

Ejemplos conceptuales
APIs externas comprometidas,
inyección de datos maliciosos,
abuso de integraciones,
dependencia de servicios inseguros.
Impacto
exposición de datos internos,
corrupción de flujos externos-internos,
pérdida de control sobre dependencias.
Área afectada
Integration Security Layer (ISL)
External Services
Automation Module
Modelo de amenazas internas vs externas
Amenazas externas

Provienen de actores fuera del sistema:

usuarios maliciosos,
servicios externos comprometidos,
ataques de red o infraestructura.
Amenazas internas

Provienen desde dentro del sistema:

usuarios con permisos legítimos abusivos,
automatizaciones mal diseñadas,
errores de configuración,
fallos en policies.
Principio crítico

Las amenazas internas son consideradas igual o más peligrosas que las externas.

Porque:

ya poseen acceso legítimo parcial,
operan dentro del sistema,
pueden evadir controles externos.
Superficie de ataque del sistema

La superficie de ataque de Muggi se divide en:

1. Superficie de identidad
login
sesiones
tokens
autenticación de sistemas
2. Superficie de permisos
roles
policies
permisos por módulo
3. Superficie de datos
almacenamiento
sincronización entre módulos
APIs internas
4. Superficie de ejecución
automatizaciones
workflows
triggers del sistema
5. Superficie de integración
APIs externas
servicios de terceros
webhooks
Principio de menor confianza

Ningún componente del sistema es confiable por defecto.

Esto incluye:

usuarios autenticados,
módulos internos,
integraciones externas,
automatizaciones del sistema.
Principio de contención de daño

El sistema debe asumir que cualquier componente puede fallar o ser comprometido.

Por lo tanto:

el daño debe ser limitado por diseño,
los fallos no deben propagarse libremente,
cada módulo debe poder aislarse.
Principio de detección temprana

Las amenazas deben ser detectadas en etapas tempranas del flujo:

identidad,
autorización,
ejecución,
integración.
Principio de degradación controlada

Ante amenazas activas o sospechosas, el sistema debe:

reducir funcionalidad de forma controlada,
mantener núcleo operativo activo,
evitar colapso total del sistema.
Relación con Security Layers
IAS → protege identidad
APS → protege permisos
DSL → protege datos
ESL → protege ejecución
ISL → protege integraciones
CSO → coordina respuesta global
Evolución del Threat Model

El modelo puede evolucionar hacia:

detección predictiva de amenazas,
scoring dinámico de riesgo por acción,
seguridad adaptativa basada en comportamiento,
respuesta automática a patrones de ataque.
Límites del modelo

El Threat Model no debe:

bloquear funcionalidad sin análisis,
generar falsos positivos estructurales constantes,
depender de heurísticas no controladas,
reemplazar políticas del Core System.
Conclusión

El Threat Model de SistematizArg define el conjunto estructural de amenazas internas y externas que el sistema debe considerar, estableciendo una base común para diseñar defensas coherentes, distribuidas y alineadas con la arquitectura modular de Muggi.
