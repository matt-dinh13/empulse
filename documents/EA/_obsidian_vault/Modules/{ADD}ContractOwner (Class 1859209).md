---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections"
domain: "Modules"
element_id: 1859209
diagrams: 5
connections: 6
tags:
  - class
  - modules
---

# 🔷 {ADD}ContractOwner

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections

## 📝 Notes

{ADD CLM-5188/}

Entity representing the owner of the contract, by default it's Home Credit International (HCI). Can be more companites, so-called entrustment lenders, taking their share of the profits from the contract.

## 🔗 Connections (6)

- ← Dependency: [[Contract (Interface 1839994)]]
- → Dependency: [[{ADD}OWNER_DEFAULT]]
- → Dependency: [[CONTRACT_OWNER_CODE]]
- ← Usage: [[Contract (Class 1859197)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← Dependency: [[Contract (Class 1880089)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections
- Logical: ContractChangedEvent
- Logical: getContract
- Logical: getContractOwners
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| type | string |  |
| validFrom | date |  |
| validTo | date |  |
| share | string |  |
