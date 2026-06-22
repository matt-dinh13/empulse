---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-17316/CLM-5165 - Extend ContractChangedEvent"
domain: "Modules"
element_id: 1880089
diagrams: 2
connections: 17
tags:
  - class
  - modules
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-17316/CLM-5165 - Extend ContractChangedEvent

## 🔗 Connections (17)

- → Usage: [[ContractBusinessEvent]]
- → Usage: [[ContractRefinancedContract (Class 1859216)]]
- → Usage: [[ContractExtendedProperty]]
- → Usage: [[ContractProduct (Class 1859201)]]
- → Usage: [[ContractCustomer (Class 1859191)]]
- → Usage: [[{ADD}ContractAccount]]
- → Usage: [[{MOD}ContractDocument]]
- → Usage: [[Applicant (Class 1880090)]]
- → Dependency: [[{ADD}ContractOwner (Class 1859209)]]
- → Usage: [[ContractService (Class 1859207)]]
- → Dependency: [[{ADD}ContractJointLender (Class 1859212)]]
- → Usage: [[ContractStatusTransitions]]
- → Usage: [[{ADD}ContractCommodity (Class 1859193)]]
- ← Usage: [[ContractEvent (Class 1880088)]]
- → Dependency: [[ContractJointLender]]
- → Dependency: [[ContractOwner (Class 1880086)]]
- → Usage: [[{DEL}Document (Class 1880083)]]

## 📊 Appears In (2 diagrams)

- Custom: CLM-5165 - Extend ContractChangedEvent
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
| {ADD}paymentMode | string |  |
| {ADD}applicant | Applicant |  |
| {ADD}owners | ContractOwner |  |
| {ADD}jointLenders | ContractJointLender |  |
