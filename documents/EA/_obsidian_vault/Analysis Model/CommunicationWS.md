---
type: Interface
stereotype: "external interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication"
domain: "Analysis Model"
element_id: 1300957
diagrams: 1
connections: 4
tags:
  - interface
  - analysis-model
---

# 🔶 CommunicationWS

> **Type**: Interface · **Stereotype**: «external interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication

## 📝 Notes

This is a composite web-service used to obtain data related to communication with client. This web-service provides single point of access to communication data from different systems.

Currently this service consolidates data from following systems:

	
- LCS - Loxon Collections System
	
- MSS - Message Server Select
	
- BSL - Basic Support Loans

## 🔗 Connections (4)

- → Dependency «use»: [[CompositeCommunicationHistoryResponse]]
- → Dependency «trace»: [[OSB Get communication history]]
- → Dependency «use»: [[CompositeCommunicationHistoryRequest]]
- ← Dependency: [[07.130 Get communication from external systems (UseCase 1880003)]]

## 📊 Appears In (1 diagrams)

- Logical: CRM - communication - OSB
