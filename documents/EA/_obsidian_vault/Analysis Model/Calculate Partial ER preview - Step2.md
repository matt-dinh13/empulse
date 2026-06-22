---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules"
domain: "Analysis Model"
element_id: 1869775
diagrams: 4
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Partial ER preview - Step2

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules

## 📝 Notes

Calculation was excluded from 08.050 Show Partial ER preview  (calculation after showing of PER preview)

Input: Contract, PER service setting, PER Result
Output: PER Result

Steps:

	
- System checks that  PER Result.Client Amount >= PER Result.MinimalPERrequestAmount. 
If validation fails, system sets:
- PER Result.Is Available = FALSE
- PER Result.Notification = MSG_PER_InsufficientPayment (The client's repayment is lower than allowed minimum PER amount)
and rule ends.
	
- System checks that  PER Result.Client Amount <= PER Result.MaximalPERrequestAmount. 
If validation fails, system sets:
- PER Result.Is Available = FALSE
- PER Result.Notification = MSG_PER_OverlimitPayment (The client's repayment is higher than allowed maximum PER amount)
and rule ends. 
	
- System calculates Fees Included in Operation  by rule Calculate fee included in operation for PER. All calculated PER fees included in operation are registered separately by Tariff Items in PER Result. PER Fee Included In Operation Item object by described rules.
	
- Set expected remaining principal as New PCA = Outstanding principal - PaidAmount, 
where PaidAmount = PER Result.Client Amount  - PER Result.Nearest Payable Installment - PER Result.Total Overdue Installments - PER Result.Sum of PER Fees - PER Result.PER Fee Included In Operation + PER Result.Total Prepayments 
If New PCA > 0, then rule continues with next steps, else system sets:
- PER Result.Is Available = FALSE
- PER Result.Notification = MSG_NO_PRINCIPAL_TO_AMORTIZATION (The contract ${Contract Code} has no principal to amortization)
and rule ends.
	
- According PER Result.PER Type, new monthly payment or term is calculated into PER Result:
- for PER Type = 'Shorter_Term' by:
-- PER Result.New Term = New term calculation for 'Shorter term' PER type rule + Installment.Installment Number from Installment having Due Date =  PER Result .PER Due Date
- for PER Type = 'Lower_Annuity' by:
-- PER Result.New Monthly Payment = FP.Total Monthly Payment - FP.Annuity + New Annuity obtained by New annuity calculation for 'Lower annuity' PER' type rule
	
- System sets PER Result.Is Available=TRUE and returns PER Result

## 🔗 Connections (6)

- ← Dependency: [[08.050 Show Partial ER preview]]
- → Dependency: [[New term calculation]]
- → Dependency: [[New annuity calculation for 'Lower annuity' PER type]]
- → Dependency: [[Calculate fee included in operation for PER]]
- ← Dependency: [[01.788 Create ContractPERRequest service (UseCase 1869817)]]
- ← Dependency: [[01.787 Get ContractPERRequest preview service (UseCase 1869808)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CBL-4814 (CLM-1713) Create Web Service for PER Request
- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
