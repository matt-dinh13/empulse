---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model"
domain: "Modules"
element_id: 1873952
diagrams: 1
connections: 10
tags:
  - class
  - modules
---

# 🔷 Contract

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/COMMON for COMA_NG/Logical Data Model

## 📝 Notes

Contract is one of the core and most important entities in BSL and whole HoSel suite. At the moment it combines a representation of a contract between a customer and local Home Credit company, a representation of a loan account for CEL and SAI product types and a representation of an application that precedes contract (basically a contract with status before Signed is in fact an application). Code of a contract (also called contract number) is one of the key suite-wide identifier that many entities in several systems depend on. Contract holds a combination of information mostly from the application phase and the contract registration phase. The entity is historized on every change except for registration status change and contract status or sub-status change because these changes are persisted in standalone entities.

## 🔗 Connections (10)

- ← Aggregation: [[Contract Party Role (Class 1873958)]]
- ← Aggregation: [[Contract Status Transition]]
- ← Aggregation: [[Contract to Applicant]]
- ← Aggregation: [[Business Event (Class 1873954)]]
- → Aggregation: [[Deal (Class 1873953)]]
- ← Aggregation: [[Contract Document]]
- ← Aggregation: [[Contract Status Transition Request]]
- ← Aggregation: [[{ADD]Contract Account]]
- ← Aggregation: [[Contract Commodity]]
- ← Dependency: [[Contract Supplement (Class 1874463)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract Type | Product Type |  |
| {DEL}Credit Account Number | string |  |
| Additional Information | Additional Information Type |  |
| Contract Code | string |  |
| Status | Contract Status Type |  |
| Signed Date | datetime |  |
