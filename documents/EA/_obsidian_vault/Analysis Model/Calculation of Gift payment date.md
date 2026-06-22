---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/Use Case"
domain: "Analysis Model"
element_id: 1558634
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Calculation of Gift payment date

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/Use Case

## 📝 Notes

Description:
Calculates the first date when Gift payment can be granted.

Input parameters:
- service adjusted to contract
- number of gift payments

Output parameters:
- date of Gift payment

Procedure:
Calculate Date of Gift payment as due date of the (N minus G)-th installment on the contract, where N is number of contract's standard installments (Installment.Installment_Type = 'STANDARD') and G is number of gift payments.

## 🔗 Connections (2)

- ← Dependency: [[Gift payment conditions]]
- ← Dependency: [[08.202 Evaluate status of Gift payment (UseCase 1869008)]]

## 📊 Appears In (2 diagrams)

- Use Case: Gift payment processing
- Use Case: Status of Gift payment
