---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Interface"
domain: "Analysis Model"
element_id: 1138351
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationEvent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Interface

## 🔗 Connections (3)

- ← Usage: [[Communication (Class 1138349)]]
- → Usage: [[Communication Channel]]
- → Usage: [[CommunicationRecord]]

## 📊 Appears In (1 diagrams)

- Logical: Creating Communication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Cuid | long |  |
| Channel | string |  |
| Record | CommunicationRecord |  |
| CreatedBy | User |  |
| CreatedDate | DateTime |  |
