---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Client identification/Access Rights"
domain: "Analysis Model"
element_id: 1813647
diagrams: 2
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.130 Process application sent for manual identification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client identification/Access Rights

## 📝 Notes

This use case describes processing of records stored in the queue of manual-identification requests, for which result from CIF was obtained (see use case 06.051 Process customers notification message). This is realized as an asynchronous job.

## 🔗 Connections (6)

- → Realisation: [[Change in rejection_cancellation of application]]
- → Realisation: [[01.130 Process application sent for manual identification]]
- → Realisation: [[REQ3-Creation and approval of application]]
- → UseCase: [[Time (Actor 1880869)]]
- → Dependency: [[Set contract status to canceled]]
- → Realisation: [[Client identification (Boundary 1813655)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Client identification
