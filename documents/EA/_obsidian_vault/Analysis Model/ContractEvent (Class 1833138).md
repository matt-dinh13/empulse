---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract"
domain: "Analysis Model"
element_id: 1833138
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Contracts/v9.0/Contract

## 📝 Notes

Business events recorded on the Contract. Only events defined in UC 01.757 Get contracts for self-care are taken into account and returned by this structure.

## 🔗 Connections (2)

- → Usage: [[ContractEventAttribute (Class 1833143)]]
- ← Usage: [[Contract (Class 1833145)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract
- Logical: Contracts/Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| eventDate | dateTime |  |
| createdBy | string |  |
| salesroomCode | string |  |
| attributes | ContractEventAttribute |  |
