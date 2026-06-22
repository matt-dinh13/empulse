---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules"
domain: "Analysis Model"
element_id: 1619101
diagrams: 5
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Determine first installment for deferral

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules

## 📝 Notes

This rule describes obtaining the first standard installment due date which can be deferred. In case if contract has overdue installment, only unpaid or partially paid installment can be used for deferral. Small underpayment is taken into account at the evaluation in this case.
If feature flag UsePayholMinDate is set and PAYHOL_MIN_DATE is defined, then installment according due date only is used as deferral.


Input:

	
- Payment Holiday Service (PHS) related to Contract Service of the processed Contract


Output:

	
- InstallmentToDeferral
	
- {ADD CSI-349}Message{/ADD}


Steps:

	
- If PHS.Accept Small Underpayment = TRUE then get SmallUnderpayment value from Global Parameters else SmallUnderpayment = 0
	
- If feature flag UsePayholMinDate is set then get MinimalDueDate from Contract Service Param.PAYHOL_MIN_DATE related to the PHS, else MinimalDueDate is null.
	
- If MinimalDueDate is defined, then get the first installment where Installment.Type = STANDARD and Installment.Active Flag = 1 and Installment.Due date>=MinimalDueDate {ADD CSI-349} and Installment.Recalculation Reason <> PH (skip existing Payhol installament) {/ADD} 
- If an installment is found, set InstallmentToDeferral = Installment found {DEL CSI-349}and scenario ends{/DEL}
- If no installment exists, set InstallmentToDeferral =NULL {DEL CSI-349}and scenario ends{/DEL}
	
- If MinimalDueDate is not defined, then get the first not fully paid Installment where Installment.Type = STANDARD and Installment.Active Flag = 1 and sum (Installment Part.Paid Amount) + SmallUnderpayment <= sum(Installment Part.Amount)
- If Installment.Due Date < current date (overdue installment exists) then set InstallmentToDeferral = Installment {DEL CSI-349}and scenario ends{/DEL}
- If Installment.Due Date >= current date then get nearest future Installment where Installment.Type = STANDARD and Installment.Active Flag = 1 and Installment.Due Date >= current date + PHS.Min Days Before Installment
  -- If an installment is found, set InstallmentToDeferral = Installment found {DEL CSI-349}and scenario ends{/DEL}
  -- If no installment exists, set InstallmentToDeferral =NULL {DEL CSI-349}and scenario ends{/DEL}
	
- {ADD CSI-349}
If InstallmentToDeferral =NULL then set Message = MSG_NoInstallmentToServiceApplication, (e.g. A requests for the service cannot be created because no installment to apply exists.) and scenario ends
	
- If  InstallmentToDeferral is not NULL then system gets future Payhol installments (i.e. Installment.Recalculation Reason = PH and Installment.Active Flag = 1 and Installment.Due date>=InstallmentToDeferral .Due date)
- if any  future Payhol installment exists, set InstallmentToDeferral =NULL and  Message = MSG_FuturePayholInstallmentExists, (e.g. A requests for the service cannot be created because another payhol period in the future exists.)
{/ADD}

## 🔗 Connections (5)

- ← Dependency: [[01.797 Create ContractPayholRequest service]]
- ← Dependency: [[01.796 Get ContractPayholRequest preview service]]
- ← Dependency: [[{MOD}08.362 Process payment holiday request]]
- ← Dependency: [[08.355 Create request for payment holiday (UseCase 1862152)]]
- ← Dependency: [[08.354 Show parameters of payment holiday (UseCase 1862151)]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: CBL-11202 (CSI-349) Payhol request creation - check existing Payhol request in the future
- Custom: CBL-9520 (CLM-2918) New requirements by Payment Holidays
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
