---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections"
domain: "Modules"
element_id: 1859197
diagrams: 3
connections: 20
tags:
  - class
  - modules
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections

## 📝 Notes

Contract data structure used by Contract methods of WS

## 🔗 Connections (20)

- ← Dependency: [[Contract (Interface 1839994)]]
- → Dependency: [[DEFAULT]]
- → Usage: [[ContractService (Class 1859207)]]
- → Usage: [[ContractRefinancedContract (Class 1859216)]]
- → Dependency: [[DEFAULT]]
- → Usage: [[{ADD}ContractAccount]]
- → Dependency: [[DEFAULT]]
- → Usage: [[{ADD}ContractJointLender (Class 1859212)]]
- → Usage: [[ContractBusinessEvent]]
- → Usage: [[ContractStatusTransitions]]
- → Usage: [[ContractExtendedProperty]]
- → Usage: [[{ADD}ContractOwner (Class 1859209)]]
- → Usage: [[ContractProduct (Class 1859201)]]
- → Usage: [[{MOD}ContractDocument]]
- → Usage: [[{ADD}ContractApplicant]]
- → Dependency: [[DEFAULT]]
- → Usage: [[{ADD}ContractCommodity (Class 1859193)]]
- → Usage: [[ContractCustomer (Class 1859191)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- → Aggregation: [[ContractsResponse (Class 1873826)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections
- Logical: getContract
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}account | ContractAccount |  |
| {ADD}applicant | ContractApplicant |  |
| {ADD}businessEvents | ContractBusinessEvent |  |
| {ADD}contractCommodities | ContractCommodity |  |
| {ADD}extendedProperties | ContractExtendedProperty |  |
| {ADD}jointLenders | ContractJointLender |  |
| {ADD}owners | ContractOwner |  |
| {ADD}refinancedContracts | ContractRefinancedContract |  |
| {ADD}statusTransitions | ContractStatusTransitions |  |
| code | string |  |
| customer | ContractCustomer |  |
| documents | ContractDocument |  |
| paymentMode | string |  |
| product | ContractProduct |  |
| services | ContractService |  |
| status | string |  |
| type | string |  |
