---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication"
domain: "Analysis Model"
element_id: 1300491
diagrams: 4
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 OSB Get communication history

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/CRM - communication

## 📝 Notes

This use case describes behavior of getCommunicationHistory() method of CommunicationWS interface.

## 🔗 Connections (5)

- → Dependency: [[ClientCommunicationHistoryWS (Interface 1701933)]]
- → Dependency: [[CommunicationHistory]]
- → Dependency: [[CommunicationHistory]]
- ← Dependency «trace»: [[CommunicationWS]]
- ← UseCase: [[BSL (Actor 1880871)]]

## 📊 Appears In (4 diagrams)

- Logical: CRM - communication - OSB
- Logical: LCS Interfaces - communication history
- Logical: List of communication
- Use Case: Temporary - OSB elements
