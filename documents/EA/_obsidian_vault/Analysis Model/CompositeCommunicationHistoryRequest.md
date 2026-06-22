---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication"
domain: "Analysis Model"
element_id: 1300956
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CompositeCommunicationHistoryRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication

## 📝 Notes

Request data structure for communication history.

## 🔗 Connections (2)

- ← Dependency «use»: [[CommunicationWS]]
- → Dependency: [[UnavailableSystemInfo]]

## 📊 Appears In (1 diagrams)

- Logical: CRM - communication - OSB

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | number |  |
| contractNumber | decimal |  |
| fromDate | dateTime |  |
| toDate | dateTime |  |
| unavailableSystem | UnavailableSystemInfo |  |
| channel | Alphanumeric string |  |
| type | string |  |
| maxResults | number |  |
| pageIndex | number |  |
