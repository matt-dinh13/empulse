---
type: Interface
stereotype: "external interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces"
domain: "Analysis Model"
element_id: 711137
diagrams: 1
connections: 5
tags:
  - interface
  - analysis-model
---

# 🔶 CommunicationHistory

> **Type**: Interface · **Stereotype**: «external interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces

## 📝 Notes

This interface, provided by the Loxon Collections System (LCS), is used by BSL to obtain information about communication history between HC and client stored in that system.

## 🔗 Connections (5)

- → Dependency «use»: [[CommunicationHistoryCUIDRequest]]
- → Dependency «use»: [[CommunicationHistoryRequest]]
- → Dependency: [[CommunicationHistoryResponse]]
- ← Dependency: [[OSB Get communication history]]
- ← Dependency: [[OSB Get communication history]]

## 📊 Appears In (1 diagrams)

- Logical: LCS Interfaces - communication history
