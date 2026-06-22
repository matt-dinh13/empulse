---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Archivation/Use Case Model"
domain: "Modules"
element_id: 1855956
diagrams: 1
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 Archive Contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Archivation/Use Case Model

## 📝 Notes

This use case describes contract archiving based on ContractArchivingJob selection 

Job configuration:
jobs:
  definitions:
    contractArchiving:
      enabled: false
      cron: "0 0 0 * * *" # every midnight
      processing-delay: 0
      batch-size: 20
      parallelism: 1
      days-without-transition:
        D: 730
        T: 730
        H: 730
        Q: 730
        L: 1095
        K: 1095

## 🔗 Connections (4)

- → Association «notify»: [[Cabinet (Actor 1870010)]]
- → InformationFlow: [[DMS (Actor 1855969)]]
- → Association «notify»: [[BSL (Actor 1879376)]]
- ← Association: [[Time (Actor 1855958)]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract Archivation
