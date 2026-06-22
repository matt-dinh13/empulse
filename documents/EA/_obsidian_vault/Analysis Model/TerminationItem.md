---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces"
domain: "Analysis Model"
element_id: 1736084
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 TerminationItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces

## 📝 Notes

Defines structure which is used by PayoffContractsWS to return information about result of requested pay-off activity.

## 🔗 Connections (2)

- → Dependency: [[TerminationStatus]]
- ← Dependency «use»: [[TerminationStatusRQ]]

## 📊 Appears In (1 diagrams)

- Logical: LCS interface - TerminationStatusService

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNR | string |  |
| status | TerminationStatus |  |
