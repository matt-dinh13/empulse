---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model"
domain: "Analysis Model"
element_id: 1606625
diagrams: 3
connections: 4
tags:
  - enumeration
  - analysis-model
---

# 📝 Communication Result Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model

## 📝 Notes

Enumeration defined by a country. It defines existing results of communication (e.g. Complaint solved by phone dialog, Visit successful, Address changed).

## 🔗 Connections (4)

- ← Usage: [[CommunicationRecord]]
- ← Association: [[Communication Result Definition]]
- ← Association: [[Communication Result Type Part]]
- ← Dependency: [[Communication Result Part]]

## 📊 Appears In (3 diagrams)

- Logical: Communication
- Logical: Communication definition LDM
- Logical: Creating Communication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Description | Text |  |
| Sort Order | Integer |  |
