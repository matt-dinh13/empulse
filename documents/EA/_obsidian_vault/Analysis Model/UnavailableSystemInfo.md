---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication"
domain: "Analysis Model"
element_id: 1300954
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UnavailableSystemInfo

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication

## 📝 Notes

Defines one system which didn't respond during defined time.

## 🔗 Connections (3)

- ← Dependency: [[CompositeCommunicationHistoryResponse]]
- ← Dependency: [[CompositeCommunicationHistoryRequest]]
- → Dependency: [[System]]

## 📊 Appears In (1 diagrams)

- Logical: CRM - communication - OSB

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| system | System |  |
