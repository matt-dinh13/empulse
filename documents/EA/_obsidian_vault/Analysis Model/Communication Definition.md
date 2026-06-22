---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model"
domain: "Analysis Model"
element_id: 1606619
diagrams: 2
connections: 3
tags:
  - enumeration
  - analysis-model
---

# 📝 Communication Definition

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model

## 📝 Notes

Defines allowed (existing) combinations of Channel, Type and Subtype - i.e. defines which types and subtypes of communication can be done through which channels. Country specific configuration.

## 🔗 Connections (3)

- → Association: [[Communication Channel]]
- → Association: [[Communication Type]]
- → Association: [[Communication Subtype]]

## 📊 Appears In (2 diagrams)

- Logical: Communication
- Logical: Communication definition LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Sort Order | Number |  |
| Active Flag | Boolean |  |
