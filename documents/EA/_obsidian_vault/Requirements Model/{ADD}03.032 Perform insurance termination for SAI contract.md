---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan"
domain: "Requirements Model"
element_id: 1879459
diagrams: 3
connections: 2
tags:
  - usecase
  - requirements-model
---

# 🎯 {ADD}03.032 Perform insurance termination for SAI contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan

## 📝 Notes

{ADD IS-2177}
Use case for installment schedule regeneration after insurance termination for Standalone insurance contract (contract type = SAI).

Insurance termination means summarizing all future unpaid debt (if any exists) to a final (Termination) installment. 
Overdue installments (it means all installments before termination date) stay unchanged.
After re-generating the installment schedule the system generates a system event RegeneratedInstallmentScheduleSE.

## 🔗 Connections (2)

- ← UseCase «include»: [[{MOD}08.121 Terminate contract insurance common]]
- → Dependency: [[{ADD}Calculate SAI terminated installment parts amount]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Use Case: Contract insurance termination
- Use Case: Terminate insurance for SAI contract
