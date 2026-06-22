---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections"
domain: "Modules"
element_id: 1859212
diagrams: 5
connections: 5
tags:
  - class
  - modules
---

# 🔷 {ADD}ContractJointLender

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections

## 📝 Notes

{ADD CLM-5188/}

Entity representing a bank partner to HC having a share in profits from the given contract.

## 🔗 Connections (5)

- ← Dependency: [[Contract (Interface 1839994)]]
- → Dependency: [[{ADD}JOINT_LENDER_DEFAULT]]
- ← Usage: [[Contract (Class 1859197)]]
- ← Dependency: [[Contracts (Interface 1868512)]]
- ← Dependency: [[Contract (Class 1880089)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-18461 (CLM-5188) CRUD API to change bank partner details + Kafka + projections
- Logical: ContractChangedEvent
- Logical: getContract
- Logical: getContractJointLenders
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| agreement | string |  |
| code | string |  |
| share | string |  |
| validFrom | date |  |
| validTo | date |  |
