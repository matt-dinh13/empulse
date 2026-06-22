---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/createContract"
domain: "Modules"
element_id: 1868399
diagrams: 3
connections: 19
tags:
  - class
  - modules
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/createContract

## 📝 Notes

Contract data structure used by Contract methods of WS

## 🔗 Connections (18)

- → Aggregation: [[ContractsResponse (Class 1858993)]]
- → Usage: [[ContractExtendedProperty (Class 1868403)]]
- → Usage: [[ContractOwner]]
- → Usage: [[ContractAccount (Class 1874444)]]
- → Usage: [[ContractCommodity (Class 1868402)]]
- → Usage: [[ContractApplicant]]
- → Usage: [[ContractBusinessEvent (Class 1868407)]]
- → Usage: [[ContractProduct (Class 1841972)]]
- → Dependency: [[DEFAULT (Class 1858840)]]
- → Usage: [[ContractRefinancedContract]]
- → Dependency: [[DEFAULT (Class 1858840)]]
- → Usage: [[ContractCustomer (Class 1868405)]]
- → Dependency: [[DEFAULT (Class 1858840)]]
- → Dependency: [[DEFAULT (Class 1858840)]]
- → Usage: [[ContractDocument (Class 1868397)]]
- → Usage: [[ContractStatusTransitions (Class 1868393)]]
- → Dependency: [[ContractPartyRole (Class 1868391)]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (3 diagrams)

- Logical: createContract
- Logical: getContract
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}accounts | ContractAccount |  |
| applicant | ContractApplicant |  |
| businessEvents | ContractBusinessEvent |  |
| commodities | ContractCommodity |  |
| extendedProperties | ContractExtendedProperty |  |
| statusTransitions | ContractStatusTransitions |  |
| code | string |  |
| customer | ContractCustomer |  |
| documents | ContractDocument |  |
| status | string |  |
| type | string |  |
| partyRoles | ContractPartyRole |  |
