---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Access Rights"
domain: "Analysis Model"
element_id: 1879460
diagrams: 6
connections: 15
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.191 Process installment schedule generation after disbursement

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Access Rights

## 📝 Notes

The use case describes processing of installment schedule generation when corresponding system event is received.

The use case is triggered by system events:
- CashDisbursementConfirmedSE with payment type 'CL'  (this event can be sent also for SAI contract if this contract is related to cash loan) 
- JFSAccountOpenedSE (first installment due date and start date are passed as parameters if SE contains it)
- {ADDIS-2642}{IN only}RetailerDisbursementConfirmedSE with payment type 'PTR' (for POS loans with set installment schedule generation trigger to 'ON_DISBURSEMENT'{/ADD}

This use case is technical.

## 🔗 Connections (9)

- → Dependency: [[{MOD}Generate installment schedule algorithm]]
- → Dependency: [[{MOD}Annuity base amount definition]]
- → Dependency «invokes»: [[01.477 Process debt catalogue requests job (UseCase 1876062)]]
- → Dependency: [[Total Monthly Payment definition]]
- → Realisation: [[{ADD}01.191 Process installment schedule generation]]
- → Dependency: [[Annuity calculation]]
- → Dependency: [[{MOD}Evaluate First Installment Due Date]]
- → Dependency: [[01.474 Calculate CEL debt info (UseCase 1876071)]]
- → Dependency: [[Calculation of ExpectedEndDate]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: Debt Catalog (DC) to trigger contract finishing evaluation (IS-639)
- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: Contract finishing after DC recalculation
- Use Case: Determine installment schedule processing
