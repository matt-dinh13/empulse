---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model"
domain: "Analysis Model"
element_id: 1606629
diagrams: 4
connections: 3
tags:
  - enumeration
  - analysis-model
---

# 📝 Communication Status

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model

## 📝 Notes

Definition of existing states of communication. States are based on channel - i.e. for which channel can specific status be used (e.g. channel SMS - status Delivered, channel Letter - status Received, channel Call - status Not responding). Country specific configuration.

## 🔗 Connections (3)

- ← Usage: [[CommunicationRecord]]
- ← Association: [[Communication Result Definition]]
- ← Dependency: [[Communication Record Notification Rule]]

## 📊 Appears In (4 diagrams)

- Logical: Communication
- Logical: Communication definition LDM
- Logical: Communication record notification setting
- Logical: Creating Communication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Name |  |
| Channel | Communication Channel |  |
