---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v11/searchContracts"
domain: "Modules"
element_id: 1802513
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 ContractEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v11/searchContracts

## 📝 Notes

Business events recorded on the Contract. Only events defined in UC 01.757 Get contracts for self-care are taken into account and returned by this structure.

## 🔗 Connections (4)

- → Usage: [[ContractEventUser]]
- → Usage: [[ContractEventAttribute]]
- → Usage: [[ContractEventUser]]
- ← Usage: [[Contract (Class 1802525)]]

## 📊 Appears In (1 diagrams)

- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| eventDate | dateTime |  |
| salesroomCode | string |  |
| createdBy | ContractEventUser |  |
| attributes | ContractEventAttribute |  |
| originator | ContractEventUser |  |
