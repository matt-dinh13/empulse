---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Kafka/v1/ActionsEvaluated"
domain: "Modules"
element_id: 1806827
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 {ADD}ContractRegistrationEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Kafka/v1/ActionsEvaluated

## 📝 Notes

Event about change in contract registration

schema: https://cpschemareg01-ph00a1.cz.infra:8443/ui/ph00a1/schema/details/rem.contract-registration.event.v1-value/versions

## 🔗 Connections (4)

- ← Dependency: [[{ADD}ContractRegistered (Class 1806644)]]
- ← Dependency: [[{ADD}ActionsEvaluated]]
- → Dependency: [[Body]]
- → Dependency: [[Header]]

## 📊 Appears In (3 diagrams)

- Logical: ActionsEvaluated
- Logical: ContractRegistered
- Logical: ContractRegistrationEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Headers | Header |  |
| Body | Body |  |
