---
type: Sequence
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Archivation/Archivation process"
domain: "Modules"
element_id: 1855948
diagrams: 1
connections: 6
tags:
  - sequence
  - modules
---

# 📄 COMA

> **Type**: Sequence
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Archivation/Archivation process

## 🔗 Connections (6)

- ← Sequence «REST API»: [[External system (Actor 1855947)]]
- → Sequence «Kafka»: [[DMS (Sequence 1855949)]]
- ← Sequence «Job»: [[Time (Actor 1855946)]]
- → Sequence: [[COMA (Sequence 1855948)]]
- ← Sequence: [[COMA (Sequence 1855948)]]
- → Sequence «REST API»: [[External system (Actor 1855947)]]

## 📊 Appears In (1 diagrams)

- Sequence: Archivation process 
