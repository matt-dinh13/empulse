---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model"
domain: "Analysis Model"
element_id: 1606618
diagrams: 3
connections: 4
tags:
  - enumeration
  - analysis-model
---

# 📝 Communication Subtype

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model

## 📝 Notes

Enumeration defined by a country. It defines existing subtypes (topics) the communication refers to e.g. Change of client data, Contract cancellation, Installment schedule info.

## 🔗 Connections (4)

- ← Usage: [[CommunicationRecord]]
- ← Association: [[Communication Result Definition]]
- ← Association: [[Communication Definition]]
- → Association: [[Communication Subtype Specification]]

## 📊 Appears In (3 diagrams)

- Logical: Communication
- Logical: Communication definition LDM
- Logical: Creating Communication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Value | String |  |
