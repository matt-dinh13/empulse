---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9811 (CLM-3001)[COVID19] Loan consolidation for ID"
domain: "Requirements Model"
element_id: 1879565
diagrams: 3
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Refinanced Contract 

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9811 (CLM-3001)[COVID19] Loan consolidation for ID

## 📝 Notes

Contract consolidated by cash loan contract
Assigned only to Cash loans

## 🔗 Connections (2)

- → Aggregation: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[Refinanced Contract Closure]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-9811 (CLM-3001)[COVID19] Loan consolidation for ID
- Logical: Contract Management
- Logical: Loan consolidation - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract Number | string (30) |  |
| Contract Sign Date | Date |  |
| Amount | Financial Amount |  |
| isInternal | boolean |  |
| {ADD}FER Due Date | Date |  |
| Payment Channel Id | int |  |
| refinancedContractId | string (50) |  |
