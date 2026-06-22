---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case"
domain: "Analysis Model"
element_id: 1544237
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Calculation of end date for Grace period

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case

## 📝 Notes

Description:
Calculates the last deposit date of incoming payments which can be included for evaluation of Grace period conditions.

Input parameters:
- service adjusted to contract
- length of grace period
- link to Payment Discipline Parameters
Output parameters:
- date of Grace period
- last due date in Grace period

Procedure:

	
- Read Payment Discipline Parameters (PDP) for contract.
If PDP.DifferToleranceForLastDPD = TRUE 
- then set delayTolerance = PDP.LastDPDDelayTolerance
- else set delayTolerance = PDP.DPDDelayTolerance

{ADD CBL 9520 (IS-846)}
2.      Get Defered period number of PAYHOL service by calling Get number of deffered period prolonged by PAYHOL rule with parameters: processed Contract
{/ADD CBL 9520 (IS-846)}
3.     Calculate  date of Grace period as the due date of the X-th installment of type 'STANDARD' in contract installment schedule where X is Length of grace period (number of installments) {ADD CBL 9520 (IS-846)} + Defered period number from step 2{/ADD CBL 9520 (IS-846)}.
4.     Set last due date in Grace period = date of Grace period
Set date of Grace period = date of Grace period + delayTolerance
5.    Return 
      - date of Grace period 
     - last due date in Grace period

## 🔗 Connections (2)

- ← Dependency: [[Grace period conditions]]
- ← Dependency: [[08.204 Evaluate status of Grace period (UseCase 1869022)]]

## 📊 Appears In (2 diagrams)

- Use Case: Grace period processing
- Use Case: Status of Grace Period
