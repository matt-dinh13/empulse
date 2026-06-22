---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces"
domain: "Analysis Model"
element_id: 686229
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces

## 📝 Notes

This entity holds information about one communication item (record).

## 🔗 Connections (1)

- ← Dependency: [[CommunicationHistoryResponse]]

## 📊 Appears In (1 diagrams)

- Logical: LCS Interfaces - communication history

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| date | dateTime |  |
| typeCode | string |  |
| typeText | string |  |
| subTypeCode | string |  |
| subTypeText | string |  |
| resultCode | string |  |
| resultText | string |  |
| target | string |  |
| text | string |  |
| cuid | string |  |
| contractNumber | string |  |
| taskID | long |  |
