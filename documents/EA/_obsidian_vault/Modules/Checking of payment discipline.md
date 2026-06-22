---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Checking of Payment Discipline"
domain: "Modules"
element_id: 1623497
diagrams: 7
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Checking of payment discipline

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Checking of Payment Discipline

## 📝 Notes

Description:
Rule is intended for checking if clients payment discipline on particular (primary) contract is OK with respect to defined tolerance.  If it is defined by parameters then the discipline is checked also on other client's contracts. 

Input parameters:
- link to Payment Discipline Parameters
- primary contract
- final date of checked period
- last due date

Output parameters:
- discipline is OK (TRUE/FALSE)
- reason of fail

Procedure:
1. Read parameter DPD scope from Payment Discipline Parameters (defined by link).

2. Define start date of checked period = date of signature of primary contract 

3. Check primary contract by the rule Checking of correct installment payments with parameters
- link to Payment Discipline Parameters
- primary contract
- start date of checked period
- final date of checked period
- last due date
3.1 If result of checking is negative with reason of fail then return (FALSE, reason of fail) and terminate.

4. If parameter DPD scope is set to ‘A’ (all client’s contracts) then
For each secondary contract  where 
- secondary contract.Deal.Client = primary contract.Deal.Client (contracts of the same client) 
- secondary contract <> primary contract 
do following steps:
4.1 If secondary contract.Status is Written off (H) then return (FALSE, MSG_PAYMENT_DISCIPLINE_CONTRACT_WRITTEN_OFF ${secondary contract Code}) and terminate.
4.2 If secondary contract was transferred to status Paid off (L) in interval (start date of checked period, final date of checked period) then return (FALSE, MSG_PAYMENT_DISCIPLINE_CONTRACT_PAID_OFF ${secondary contract Code}) and terminate.
4.3 If secondary contract.Status is Signed (N) or Active (A) or (Finished (K) and date of status transition >= start date of checked period) then 
4.3.1 Check secondary contract by the rule Checking of correct installment payments with parameters
- link to Payment Discipline Parameters
- secondary contract
- start date of checked period
- final date of checked period
- last due date
4.3.2 If result of checking is negative with reason of fail then return (FALSE, reason of fail) and terminate.
Continue with next secondary contract.

5. Return TRUE.

## 🔗 Connections (6)

- → Dependency: [[Payment Discipline Parameters]]
- → Dependency: [[Checking of correct installment payments]]
- ← Dependency: [[{ADD}08.260 Check Fees-back service]]
- ← Dependency: [[08.206 Evaluate status of Fees-back (UseCase 1838983)]]
- ← Dependency: [[08.202 Evaluate status of Gift payment (UseCase 1869008)]]
- ← Dependency: [[08.204 Evaluate status of Grace period (UseCase 1869022)]]

## 📊 Appears In (7 diagrams)

- Custom: Payment discipline
- Use Case: Fees-back service evaluation and processing
- Use Case: Gift payment processing
- Use Case: Grace period processing
- Use Case: Status of Fees-back evaluation on user request
- Use Case: Status of Gift payment
- Use Case: Status of Grace Period
