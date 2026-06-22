---
type: Boundary
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Access Rights"
domain: "Analysis Model"
element_id: 1880935
diagrams: 9
connections: 2
tags:
  - boundary
  - analysis-model
---

# 🔲 {DEL}01.712 Finish contract on service execution

> **Type**: Boundary
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract finishing/Access Rights

## 📝 Notes

Name={DEL}01.712 Finish contract on service execution;Type=UseCase;

## 🔗 Connections (2)

- ← UseCase «include»: [[{ADD}Process CELAccountBalanceChangedInternalSE]]
- ← UseCase: [[System event]]

## 📊 Appears In (9 diagrams)

- Custom: Access Rights
- Custom: CBL-14504 (CLM-5127) Asynchronous contract activation
- Custom: CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification
- Custom: CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing
- Custom: CBL-9102 (CLM-2824) SMS/PUSH notification when CET/FER requested via Terminals
- Custom: CLM-3819 - New SAI - Contract finishing
- Custom: CLM-3822 - New SAI - COP processing
- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
- Use Case: Contract finishing after DC recalculation
