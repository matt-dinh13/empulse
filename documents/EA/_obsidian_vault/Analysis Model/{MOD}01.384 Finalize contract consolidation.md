---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan consolidation/Access Rights"
domain: "Analysis Model"
element_id: 1877975
diagrams: 7
connections: 3
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.384 Finalize contract consolidation

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan consolidation/Access Rights

## 📝 Notes

This use case describes steps for finalization of the loan consolidation. The function is triggered by ContractFERExecutedSE system event
If a consolidated contract is successfully repaid (full early repayment is done), then all possible bonus services are terminated on it and the contract is finished.
When all consolidated contract are finished, the consolidated service request is marked as executed and business and system event is generated.

## 🔗 Connections (3)

- → UseCase «include»: [[{MOD}01.715 Finish contract automatically]]
- → Realisation: [[{ADD}01.384 Finalize contract consolidation]]
- ← UseCase: [[System event]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: CBL-14504 (CLM-5127) Asynchronous contract activation
- Use Case: Contract finishing after DC recalculation
- Use Case: Contract finishing automatically
- Use Case: Contract finishing manually
- Use Case: Loan consolidation - use case model
- Use Case: REL contract termination request
