---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication"
domain: "Analysis Model"
element_id: 1300955
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationRecord

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication

## 📝 Notes

Element with information about communication record (message).

## 🔗 Connections (3)

- ← Dependency: [[CompositeCommunicationHistoryResponse]]
- → Dependency: [[MUID]]
- → Dependency: [[ResultDetail]]

## 📊 Appears In (1 diagrams)

- Logical: CRM - communication - OSB

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| channel | string |  |
| created by | string |  |
| dateCreated | dateTime |  |
| muid | MUID |  |
| note | string |  |
| result | string |  |
| resultDetail | ResultDetail |  |
| status | string |  |
| subtype | string |  |
| type | string |  |
| usedContact | string |  |
