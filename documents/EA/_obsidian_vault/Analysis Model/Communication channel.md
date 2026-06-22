---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model"
domain: "Analysis Model"
element_id: 1606621
diagrams: 5
connections: 6
tags:
  - enumeration
  - analysis-model
---

# 📝 Communication Channel

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model

## 📝 Notes

Enumeration defined by a country. It defines channels via the communication can be realized by e.g. telephone call, SMS, mail, letter, visit. It should be defined with direction respect (IN or OUT).

## 🔗 Connections (5)

- ← Usage: [[CommunicationEvent]]
- → Dependency: [[Communication Contact Type]]
- → Dependency: [[Direction Type]]
- ← Association: [[Communication Definition]]
- ← Dependency: [[Communication Record Notification Rule]]

## 📊 Appears In (5 diagrams)

- Logical: Communication
- Logical: Communication definition LDM
- Logical: Communication record notification setting
- Logical: Creating Communication
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Contact Type | Communication Contact Type |  |
| Direction Type | Type Direction Type |  |
