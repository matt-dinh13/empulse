---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules"
domain: "Analysis Model"
element_id: 1869770
diagrams: 4
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Partial ER preview - Step1

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules

## 📝 Notes

{ADD CLM-1713 /}
Calculation was excluded from 08.050 Show Partial ER preview  (calculation before showing of PER preview)

Input: Contract, PER service setting
Output: PER Result

Steps:

	
- System gets PER due date by 03.060 Calculate early repayment date  with parameters: Contract, PER Service parameters as parameters. Returned due date is set to PER Result.PER Due Date
On error system sets:
- PER Result.Is Available = FALSE
- PER Result.Notification = MSG_0336 (System cannot find any possible due date for early repayment) 
and rule ends.
	
- System checks if PER request creation is allowed by Check PER request availability . 
Returned value Is_Available is set to PER Result.Is Available
Returned value Notification is set to PER Result.Notification.
If Is_Available = FALSE then rule ends.
	
- System finds all tariff items to be charged at the moment of partial early repayment by calling of Algorithm_Find tariff items by usage with parameters:
- usage = 'PR'
- contract = Contract.ID
- contract service = Contract.ContractService where Contract.ContractService.ServiceType = 'PER'
	
- System calls for each tariff item from previous step Algorithm: Calculate tariff item amount algorithm with tariff item and PER Result.PER Due Date as parameter and calculates tariff items amount (PER fee).
All calculated ER fees are registered separately by Tariff Items in PER Result.PER Fee Item object by described rules.
	
- System calculates Nearest Payable Installment, Total Overdue Installments, Prepaid Amount, Total Prepayments, Minimal Amount To Pay, ClientMinimalAmount, ClientMaximalAmount, PER Due Date Tolerance, PER Recommended Date  by rules described in PER Result
	
- System returns PER Result

## 🔗 Connections (6)

- ← Dependency: [[08.050 Show Partial ER preview]]
- → Dependency: [[{MOD}03.060 Calculate early repayment date]]
- → Dependency: [[Calculate Minimal New PCA after PER]]
- → Dependency: [[{MOD}Check PER request availability]]
- ← Dependency: [[01.788 Create ContractPERRequest service (UseCase 1869817)]]
- ← Dependency: [[01.787 Get ContractPERRequest preview service (UseCase 1869808)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CBL-4814 (CLM-1713) Create Web Service for PER Request
- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
