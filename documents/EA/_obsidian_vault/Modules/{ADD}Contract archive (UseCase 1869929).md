---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Archive Contract/Use Case Model"
domain: "Modules"
element_id: 1869929
diagrams: 1
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Contract archive

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Archive Contract/Use Case Model

## 📝 Notes

{ADD CLM-4529/}
This use case describes contract archivation based on ContractArchivingJob selection 

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

- → Association «notify»: [[BSL (Actor 1879376)]]
- → Association «notify»: [[Cabinet (Actor 1870010)]]
- → Association «notify»: [[DMS (Actor 1869949)]]
- ← Association: [[Time (Actor 1869933)]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract Archivation
