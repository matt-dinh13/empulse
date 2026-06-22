---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case"
domain: "Analysis Model"
element_id: 1544235
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Calculation of repayment date for Grace period

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case

## 📝 Notes

Description:
Calculates nearest date for full repayment under grace period conditions.
Input parameters:
- contract
- end of grace period
- last due date of Grace period
- link to Payment Discipline Parameters
Output parameters:
- repayment date for grace period

Procedure:
1. Find the last payment date as the deposit date of the last payment paired with contract with deposit date <= end of grace period
2. If found then 
2.1 Find previous due date as the due date of the last standard installment before the last payment date.
2.2 If found then
2.2.1 If previous due date = last due date of Grace period and PaymentDisciplineParameters.DifferToleranceForLastDPD = true then
- DelayTolerance = PaymentDisciplineParameters.LastDPDDelayTolerance
else
- DelayTolerance = PaymentDisciplineParameters.DPDDelayTolerance
endif
If number of days (last payment date - previous due date) <= DelayTolerance then repayment date for grace period = previous due date.
2.3 If repayment date for grace period was not found in previous step then find repayment date for grace period as the due date of the first standard installment after the last payment date where (due date of installment >=  last payment date) and (due date of installment <= end of grace period).
{ADD I-164116}
2.4 If repayment date for grace period was not found in previous step then find repayment date for grace period as the due date of the first standard installment after the current date where (due date of installment >=  current date) and (due date of installment <= end of grace period).
{/ADD}

3. If  repayment date for grace period was not found in previous steps then repayment date for grace period = last due date of Grace period.

## 🔗 Connections (2)

- ← Dependency: [[Grace period conditions]]
- ← Dependency: [[08.204 Evaluate status of Grace period (UseCase 1869022)]]

## 📊 Appears In (1 diagrams)

- Use Case: Grace period processing
