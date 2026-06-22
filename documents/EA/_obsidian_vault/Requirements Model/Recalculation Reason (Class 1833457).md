---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans"
domain: "Requirements Model"
element_id: 1833457
diagrams: 7
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 Recalculation Reason

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans

## 📝 Notes

Reason why installment schedule was recalculated (e.g. because of early repayment)
Notice: On adding a new value into the enumeration, add the same value into RecalculationReasonTypeDto as well

## 🔗 Connections (6)

- ← Dependency: [[REQ#2 - Evaluate FER]]
- ← Dependency: [[GiftPaymentAmountRequest]]
- ← Dependency: [[Installment (Class 1857187)]]
- ← Association: [[Installment Included In Operation]]
- ← Usage: [[Check Moment For Recalculation Reason]]
- ← Usage: [[Service Offer Installment]]

## 📊 Appears In (7 diagrams)

- Custom: IS-7 (CBL-29) Consolidation (Top up) for cash loans
- Logical: Installment Schedule
- Logical: InstallmentServiceWS
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: Printing an Installment schedule
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ID (Interest overcharge deduction) |  |  |
| LR (Loan restructuring) |  |  |
| CC (Changes on contract) |  |  |
| CO (Cooling-off period) |  |  |
| CT (Contract Early Termination) |  |  |
| DD (Change of Due Date) |  |  |
| ER (Full Early repayment) |  |  |
| FB (Fees-back) |  |  |
| GN (Generate new) |  |  |
| GP (Gift payment) |  |  |
| GR (Grace period) |  |  |
| O (Offer) |  |  |
| PH (Payment holiday) |  |  |
| PO (Payoff) |  |  |
| PR (Partial Early Repayment) |  |  |
| CN(Consolidation) |  |  |
| IT (Insurance Termination) |  |  |
| EG (FER with Gift payment) |  |  |
| EM (FER performed under moratoruim) |  |  |
| {ADD}ST (Service Termination) |  |  |
