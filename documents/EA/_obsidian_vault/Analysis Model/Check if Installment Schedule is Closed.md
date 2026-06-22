---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Use Case"
domain: "Analysis Model"
element_id: 1851708
diagrams: 11
connections: 16
tags:
  - requirement
  - analysis-model
---

# 📋 Check if Installment Schedule is Closed

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Use Case

## 📝 Notes

Input:
- Contract

Output:
- True if Installment schedule is closed for next operations


	
- If no active Installment exists in Contract.InstallmentSchedule, then return TRUE else continue with next step.
	
- If exists an active Installment with Recalculation Reason in 
- ER (Full Early Repayment)  
- GR (Grace Period)
- GP (Gift Payment)
- CO (Cool-off Period)
- FB (Fees-back)
- CT (Contract Early Termination)
then return TRUE else FALSE

## 🔗 Connections (16)

- ← Dependency: [[{MOD}08.060 Change Due Date]]
- ← Dependency: [[CheckContractFERRequest input parameters]]
- ← Dependency: [[08.262 Process Fees-back service (UseCase 1838986)]]
- ← Dependency: [[{MOD}08.362 Process payment holiday request]]
- ← Dependency: [[{MOD}08.406 Process request for loan restructuring]]
- ← Dependency: [[08.063 Process request for change due date (UseCase 1862206)]]
- ← Dependency: [[{MOD}08.280 Check and process CET request]]
- ← Dependency: [[{MOD}08.252 Process cooling-off period]]
- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]
- ← Dependency: [[08.202 Evaluate status of Gift payment (UseCase 1869008)]]
- ← Dependency: [[{MOD}08.220 Check and process Grace period]]
- ← Dependency: [[08.204 Evaluate status of Grace period (UseCase 1869022)]]
- ← Dependency: [[08.409 Evaluate Checking Terms of Loan Service]]
- ← Dependency: [[{NotImplemented}08.100 Process Full early repayment]]
- ← Dependency: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (11 diagrams)

- Use Case: CHDDR processing
- Use Case: Checking Terms of Loan Service
- Use Case: Contract Early Termination processing
- Use Case: Full early repayment processing
- Use Case: Full early repayment request - externally
- Use Case: Gift payment processing
- Use Case: Loan restructuring processing
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Payment holiday processing
- Use Case: Status of Gift payment
- Use Case: Status of Grace Period
