---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common"
domain: "Modules"
element_id: 1868397
diagrams: 4
connections: 4
tags:
  - class
  - modules
---

# 🔷 ContractDocument

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/Kafka/Events/v1/Common

## 📝 Notes

{ADD CLM-4795/}
LDM: System gets a list of UUIDs based on Get documents for contract rule.

## 🔗 Connections (4)

- ← Usage: [[Contract (Class 1858916)]]
- → Dependency: [[DOCUMENT_DEFAULT (Class 1858846)]]
- ← Usage: [[Contract (Class 1868399)]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (4 diagrams)

- Logical: ContractChangedEvent
- Logical: getContract
- Logical: getContractDocuments
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | string |  |
| {DEL}relation | string |  |
