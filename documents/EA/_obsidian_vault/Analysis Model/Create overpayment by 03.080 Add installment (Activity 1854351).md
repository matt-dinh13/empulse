---
type: Activity
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model"
domain: "Analysis Model"
element_id: 1854351
diagrams: 1
connections: 2
tags:
  - activity
  - analysis-model
---

# ⚡ Create overpayment by 03.080 Add installment

> **Type**: Activity
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Pairing incomming payments/Use Case Model

## 📝 Notes

Call <<UC 03.080 Add installment>> with payment deposit date (INCOMING_PAYMENT.DEPOSIT_DATE) as due date, installment part type as “overpayment”, installment amount as money, contract id as provided CONTRACT.ID

## 🔗 Connections (2)

- ← ControlFlow: [[Does an installment exist_ (Decision 1854337)]]
- → ControlFlow: [[Call Pair Installment Part alternate with parameter_ settled amount = MONEY (Activity 1854336)]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
