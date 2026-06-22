---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v7.0/Contracts/Contract"
domain: "Analysis Model"
element_id: 1833173
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v7.0/Contracts/Contract

## 📝 Notes

Business events recorded on the Contract. Only events defined in UC 01.757 Get contracts for self-care are taken into account and returned by this structure.

## 🔗 Connections (2)

- → Usage: [[ContractEventAttribute (Class 1833172)]]
- ← Usage: [[Contract (Class 1833167)]]

## 📊 Appears In (1 diagrams)

- Logical: Contracts/Contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| eventDate | dateTime |  |
| createdBy | string |  |
| salesroomCode | string |  |
| attributes | ContractEventAttribute |  |
