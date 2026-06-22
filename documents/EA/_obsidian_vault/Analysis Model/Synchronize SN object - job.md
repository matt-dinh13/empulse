---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855593
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Synchronize SN object - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: SNM_NOTIF_QUEUE_PROCESS
Description: Activation of product versions with planned activation date
Used for: UC 02.262

Number of starts min: every 5 min
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (2)

- ← Dependency: [[09.901 Process SNM synchronization (UseCase 1848130)]]
- → Dependency: [[Every 5 minutes]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Synchronization of SNM data
