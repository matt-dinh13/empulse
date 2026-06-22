---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS"
domain: "Analysis Model"
element_id: 1414296
diagrams: 3
connections: 9
tags:
  - interface
  - analysis-model
---

# 🔶 InstallmentServiceWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS

## 🔗 Connections (9)

- ← Dependency: [[Extend InstallmentServiceWS with method getExpectedGiftPaymentAmount]]
- → Dependency: [[{ADD}GetContractServicesToEvalResponse]]
- → Dependency: [[GiftPaymentAmountRequest]]
- → Dependency: [[ServiceSimulationRequest]]
- → Dependency: [[{ADD}GetContractServicesToEvalRequest]]
- → Dependency: [[{MOD}01.766 Simulate CEL service application to IS on local request]]
- → Dependency: [[{ADD}GiftPaymentAmountResponse]]
- → Dependency: [[08.203 Calculate Gift Payment Amount]]
- → Dependency: [[ServiceSimulationResponse]]

## 📊 Appears In (3 diagrams)

- Logical: InstallmentServiceWS
- Logical: InstallmentServiceWS - GetContractServicesToEvaluate
- Use Case: OVERVIEW - Installment Schedule
