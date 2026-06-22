---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Kafka/v1/Common/ContractRegistrationEvent"
domain: "Modules"
element_id: 1806831
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 Body

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Kafka/v1/Common/ContractRegistrationEvent

## 🔗 Connections (5)

- → Dependency: [[{ADD}Action]]
- → Dependency: [[Contract (Class 1806834)]]
- → Dependency: [[Validation (Class 1806829)]]
- → Dependency: [[User (Class 1806828)]]
- ← Dependency: [[{ADD}ContractRegistrationEvent]]

## 📊 Appears In (1 diagrams)

- Logical: ContractRegistrationEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contract | Contract |  |
| registeredBy | User |  |
| {ADD}validation | Validation |  |
| {ADD}actions | Action[] |  |
