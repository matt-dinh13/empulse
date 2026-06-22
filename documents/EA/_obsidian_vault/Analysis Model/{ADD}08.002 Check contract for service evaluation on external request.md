---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS"
domain: "Analysis Model"
element_id: 1872540
diagrams: 2
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}08.002 Check contract for service evaluation on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS

## 📝 Notes

{ADD CBL-5507 PAYM-2254_REQ1 /}

This use case checks whether any contract service of a specified contract should be evaluated for a specified event.

## 🔗 Connections (4)

- ← Dependency «call»: [[{MOD}05.184 Reflect change of balance]]
- ← Dependency «call»: [[{MOD}08.257 Create Cooling-off period request]]
- ← Dependency «call»: [[08.053 Create PER request manually]]
- → Realisation: [[08.001 Check contract for service evaluation]]

## 📊 Appears In (2 diagrams)

- Logical: InstallmentServiceWS - GetContractServicesToEvaluate
- Use Case: Evaluation of services on system events (Java)
