---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication"
domain: "Analysis Model"
element_id: 1300953
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CompositeCommunicationHistoryResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication

## 📝 Notes

Response data structure for communication history.

## 🔗 Connections (3)

- ← Dependency «use»: [[CommunicationWS]]
- → Dependency: [[UnavailableSystemInfo]]
- → Dependency: [[CommunicationRecord (Class 1300955)]]

## 📊 Appears In (1 diagrams)

- Logical: CRM - communication - OSB

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| unavailableSystem | UnavailableSystemInfo |  |
| communicationItem | CommunicationRecord |  |
