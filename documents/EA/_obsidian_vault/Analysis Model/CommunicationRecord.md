---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Interface"
domain: "Analysis Model"
element_id: 1138350
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationRecord

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Interface

## 🔗 Connections (6)

- → Usage: [[Communication Status]]
- → Usage: [[Communication Result Type]]
- → Usage: [[Communication Type]]
- → Usage: [[ResultPart]]
- → Usage: [[Communication Subtype]]
- ← Usage: [[CommunicationEvent]]

## 📊 Appears In (1 diagrams)

- Logical: Creating Communication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | string |  |
| Subtype | string |  |
| ContractNumber | string |  |
| Status | string |  |
| Note | string |  |
| ResultType | string |  |
| ResultPart |  |  |
