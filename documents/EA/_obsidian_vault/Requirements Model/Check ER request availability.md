---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage"
domain: "Requirements Model"
element_id: 1807829
diagrams: 4
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Check ER request availability

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage

## 📝 Notes

This rule describes set of checks and calculations for an Early repayment service
Input parameters:

	
- Contract (the processed contract)
	
- FERSetting


	
- MoratoriumEndDueDate (mandatory if FERSetting.Moratorium > 0, else NULL)


If Virtual Installment Schedule (VIS) was generated in any superior UC then it is used for every operation in this rule instead of currently valid IS. 
1. If contract.status  <> Paid-off (L) then system checks allowed DPD for ER against DPD on the contract:

	
- If  (current date - Debt Catalog.First Overdue Installment Due Date) >FER.DPD Max Limit
MSG_SER_0001 is added to Notification (e.g. Contract {ContractCode} has overdue installment with DPD above limit)
Create ER request action is disabled.

2. If FERSetting.Moratorium > 0 then  system calculates:

	
- Moratorium Due Date = MoratoriumEndDueDate
If MoratoriumEndDueDate = NULL, MSG_ServiceMoratoriumEvaluationFailed is added to Notification (e.g. There is not enough installments for moratorium evaluation on the contract. Request for early repayment cannot be created.)


	
- Moratorium Installment Amount (sum of yet unpaid standard installment amounts under moratorium)
Moratorium Installment Amount = sum of (INSTALLMENT_PART.AMOUNT – INSTALMENT_PART.AMOUNT_PAID) where INSTALLMENT.INSTALLMENT_TYPE = 'STANDARD' and INSTALLMENT.ACTIVE = true and INSTALLMENT.DUE_DATE <= Moratorium Due Date
	
- Moratorium Installment Count (count of not paid standard installments under moratorium on ER)
Moratorium Installment Count = count of INSTALLMENTs where sum(INSTALLMENT_PART.AMOUNT – INSTALMENT_PART.AMOUNT_PAID) > 0 and INSTALLMENT.INSTALLMENT_TYPE = 'STANDARD' and INSTALLMENT.ACTIVE = true and INSTALLMENT.DUE_DATE <= Moratorium Due Date


	
- If Moratorium Installment Count > 0 and FERSetting.PerformRequestInMoratorium = 0 (or NULL), then
- MSG_SER_0002 is added to Notification (e.g. Count of installments are to be fully paid before early repayment: ${MoratoriumInstallmentCount})
- MSG_SER_0003 is added to Notification (e.g. Amount of installments are to be paid before early repayment: ${MoratoriumInstallmentAmount})
	
- If (MoratoriumEndDueDate >= ERDueDate) and FERSetting.PerformRequestInMoratorium = 1
- MSG_FERUnderMoratorium is added to Notification (e.g. FER is performed under moratorium. The last installment under moratorium is ${MoratoriumEndDueDate})
- UnderMoratoriumYN = TRUE
Else UnderMoratoriumYN = FALSE


3. If an active contract service of Cooling-off period type exists on the contract and parameter COP_DUE_DATE_MAX >= the current date

	
- MSG_SER_0006 is added to Notification (e.g. Early repayment request cannot be created. Contract is still in Cooling-off period.) and Create ER request action is disabled. Notification message uses optional placeholder ${COP Length}, which is replaced with COP length for active COP service related with contract.


4. If FER Service.Allow Request In Moratorium = FALSE and current date <= MoratoriumEndDueDate then MSG_SER_RequestNotAllowedInMoratorium is added to Notification (e.g. A request creation is not allowed in moratorium) and Create ER request action is disabled.

5. If FERSetting.AllowRequestInMoratorium = FALSE and Moratorium Installment Count > 0 then Create ER request action is disabled.

6. If Contract.Status <> Paid-off (L) and the validation Check if Installment Schedule is Closed returns TRUE then MSG_INST_SCHEDULE_CLOSED is added to Notification and Create ER request action is disabled.

7. If a service code of collection tool services is returned by Check for collection tool services then MSG_CollectionToolServiceRequestsExists is added to Notification; (e.g. A request for ${ServiceCode} collection tool service is active and has to be cancelled to be created this request.) and Create ER request action is disabled.

{ADD CSI-2407}
8. If the rule {ADD}Check TopUp overlap period for contract returns TRUE, then MSG_CONTRACT_IN_OVERLAP_PERIOD (Request cannot be created in topup overlap period) is added to Notification and Create ER request is disabled.
{/ADD}

9. If Contract.Status = Paid-off (L) then MSG_0166 is added to Notification (e.g. Contract was paid off.)

10.  Notification and UnderMoratoriumYN flag are returned to the calling UC

## 🔗 Connections (4)

- → Dependency: [[Check TopUp overlap period for contract]]
- → Dependency: [[Check for collection tool services]]
- ← Dependency: [[01.786 Create ContractFERRequest service (UseCase 1869805)]]
- ← Dependency: [[08.066 Calculate Full Early repayment preview (UseCase 1879648)]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-18427 (CSI-2407) TopUp Service usage
- Custom: CBL-5648 (CLM-2018) Transaltions for FER, COP
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
