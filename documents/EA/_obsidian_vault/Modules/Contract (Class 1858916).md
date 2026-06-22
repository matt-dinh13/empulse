---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1858916
diagrams: 1
connections: 14
tags:
  - class
  - modules
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common

## 🔗 Connections (14)

- → Usage: [[ContractCustomer (Class 1868405)]]
- → Usage: [[{ADD}Applicant]]
- → Usage: [[{ADD}ContractAccount (Class 1868398)]]
- → Dependency: [[ContractOwner]]
- → Usage: [[ContractBusinessEvent (Class 1868407)]]
- → Usage: [[ContractDocument (Class 1868397)]]
- → Usage: [[ContractExtendedProperty (Class 1868403)]]
- → Usage: [[ContractStatusTransitions (Class 1868393)]]
- → Usage: [[ContractCommodity (Class 1868402)]]
- ← Usage: [[ContractEvent (Class 1858915)]]
- → Usage: [[ContractRefinancedContract]]
- → Dependency: [[{ADD}ContractJointLender]]
- → Usage: [[ContractProduct (Class 1841972)]]
- → Dependency: [[{ADD}ContractOwner]]

## 📊 Appears In (1 diagrams)

- Logical: ContractChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}refinancedContracts | RefinancedContract |  |
| account | Account |  |
| code | string |  |
| commodities | Commodities |  |
| customer | Customer |  |
| documents | ContractDocument |  |
| extendedProperties | ContractExtendedProperty |  |
| product | Product |  |
| services | Services |  |
| status | string |  |
| statusTransitions | ContractStatusTransition |  |
| type | string |  |
| {MOD}businessEvents | ContractBusinessEvent |  |
| {DEL}paymentMode | string |  |
| {ADD}applicant | Applicant |  |
| {ADD}owners | ContractOwner |  |
| {ADD}jointLenders | ContractJointLender |  |
