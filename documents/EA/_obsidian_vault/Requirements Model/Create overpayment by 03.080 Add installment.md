---
type: Activity
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519207
diagrams: 1
connections: 2
tags:
  - activity
  - requirements-model
---

# ⚡ Create overpayment by 03.080 Add installment

> **Type**: Activity
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 📝 Notes

Call <<UC 03.080 Add installment>> with payment deposit date (INCOMING_PAYMENT.DEPOSIT_DATE) as due date, installment part type as “overpayment”, installment amount as money, contract id as provided CONTRACT.ID

## 🔗 Connections (2)

- → ControlFlow: [[Call Pair Installment Part alternate with parameter_ settled amount = MONEY]]
- ← ControlFlow: [[Does an installment exist_]]

## 📊 Appears In (1 diagrams)

- Activity: Keep priority pairing
