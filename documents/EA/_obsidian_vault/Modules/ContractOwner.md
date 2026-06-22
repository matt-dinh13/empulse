---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1841996
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 ContractOwner

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common

## 📝 Notes

{DEL CLM-6660/}
Entity representing the owner of the contract, by default it's Home Credit International (HCI). Can be more companites, so-called entrustment lenders, taking their share of the profits from the contract.

## 🔗 Connections (3)

- → Dependency: [[{ADD}OWNER_DEFAULT (Boundary 1858923)]]
- ← Dependency: [[Contract (Class 1858916)]]
- ← Usage: [[Contract (Class 1868399)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| {DEL}}share | string |  |
| type | string |  |
| validFrom | date |  |
| validTo | date |  |
