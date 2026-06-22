---
type: Class
stereotype: "json"
package: "HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/RabbitMQ AsyncApi"
domain: "Modules"
element_id: 1806383
diagrams: 1
connections: 6
tags:
  - class
  - modules
---

# 🔷 {ADD}Payload

> **Type**: Class · **Stereotype**: «json»
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/RabbitMQ AsyncApi

## 🔗 Connections (6)

- → Dependency: [[{ADD}DirectDebitMandate]]
- → Dependency: [[{ADD}Ticket]]
- → Dependency: [[{ADD}Contract]]
- ← Dependency: [[{ADD}ContractRegistrationActionResolvedEventV1]]
- → Dependency: [[{ADD}Trigger]]
- → Dependency: [[{ADD}extendedProperty]]

## 📊 Appears In (1 diagrams)

- Logical: ContractRegistrationActionResolvedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| action | string |  |
| contract | Contract |  |
| ddm | DirectDebitMandate |  |
| tickets | Ticket |  |
| extendedProperties | extendedProperty |  |
| queue | string |  |
| trigger | Trigger |  |
