---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/ClientCommunicationHistoryWS"
domain: "Analysis Model"
element_id: 1701936
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationRecord

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/ClientCommunicationHistoryWS

## 🔗 Connections (3)

- → Dependency: [[ResultDetail (Class 1701935)]]
- → Dependency: [[Muid]]
- ← Dependency: [[ClientCommunicationHistoryResponse]]

## 📊 Appears In (1 diagrams)

- Logical: List of communication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| channel | string |  |
| createdBy | string |  |
| dateCreated | dateTime |  |
| note | string |  |
| result | string |  |
| resultDetail | ResultDetail |  |
| status | string |  |
| subtype | string |  |
| type | string |  |
| usedContact | string |  |
| muid | MUID |  |
