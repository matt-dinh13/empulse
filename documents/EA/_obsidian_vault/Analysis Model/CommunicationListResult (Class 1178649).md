---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response"
domain: "Analysis Model"
element_id: 1178649
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationListResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response

## 📝 Notes

Description of result of communication file processing.

## 🔗 Connections (2)

- ← Dependency: [[ReceiveResultOfImportCommunicationRequest]]
- ← Aggregation: [[CommunicationListErrorImportResult]]

## 📊 Appears In (2 diagrams)

- Logical: Automatic Import response
- Logical: CommunicationListResult

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| File name | Text |  |
| Import status | Text |  |
| Imported | Date |  |
| Message | Text |  |
