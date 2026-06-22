---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules"
domain: "Analysis Model"
element_id: 1869776
diagrams: 6
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Check PER request availability

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules

## 📝 Notes

Set Is_Available = TRUE
System checks following conditions:
1. check allowed DPD for PER against DPD on the contract:

	
- If  (current date - Debt Catalog.First Overdue Installment Due Date) >PERService.DPD Max Limit
MSG_SER_0001 is added to Notification (e.g. Contract {ContractCode} has overdue installment with DPD above limit) and set Is_Available = FALSE.


2. If an active contract service of Cooling-off period type exists on the contract and parameter COP_DUE_DATE_MAX >= the current date

	
- MSG_SER_0006 is added to Notification (e.g. Early repayment request cannot be created. Contract is still in Cooling-off period.) and set Is_Available = FALSE


3. Calculate Moratorium Installment Amount (sum of unpaid standard installment amounts under moratorium - i.e. amount which client must pay before early repayment) and Moratorium Installment Count (Count of standard installments under moratorium on ER)

	
- Moratorium Installment Count = Contract.PERService.Moratorium - count of INSTALLMENTs where INSTALLMENT.DUE_DATE < ERRDueDate and INSTALLMENT.INSTALLMENT_TYPE = 'STANDARD' and INSTALLMENT.ACTIVE = true


	
- Moratorium Installment Amount = (sum of (INSTALLMENT_PART.AMOUNT – INSTALMENT_PART.AMOUNT_PAID) where INSTALLMENT.DUE_DATE < ER Due Date and INSTALLMENT.ACTIVE = true) - (sum of INSTALLMENT_PART.AMOUNT_PAID where INSTALLMENT_PART.TYPE = PP and INSTALLMENT.FLAG = True)


	
- If Moratorium Installment Count > 0 then
MSG_SER_0002 is added to Notification (e.g. Count of installments are to be fully paid before early repayment: {MoratoriumInstallmentCount})
MSG_SER_0003 is added to Notification (e.g. Amount of installments are to be paid before early repayment: {MoratoriumInstallmentAmount})


4. LastDateOfMoratorium = date of X-th installment where X = Contract.PERService.Moratorium
If PER Service.Allow Request In Moratorium = FALSE and current date <= LastDateOfMoratorium then MSG_SER_RequestNotAllowedInMoratorium is added to Notification (e.g. A request creation is not allowed in moratorium) and set Is_Available = FALSE.

5. If Moratorium Installment Count > 0 then set Is_Available = FALSE.

6. If a service code of collection tool services is returned by Check for collection tool services then MSG_CollectionToolServiceRequestsExists is added to Notification; (e.g. A request for {ServiceCodes} collection tool service is active and has to be cancelled to be created this request.) and set Is_Available = FALSE.

{ADD CSI-4215}
7. If service.Maximal Number Of Usage is defined then:
- if count of Loan Service Requests in status EXECUTED related to the contract service >=  service.Maximal Number Of Usage then MSG_MaximalNumberOfUsageReached is added to Notification; (e.g. Maximal number of service usage was reached.) and set Is_Available = FALSE.
{/ADD}

8.  Is_Available and Notification is returned to the calling UC

## 🔗 Connections (2)

- → Dependency: [[Check for collection tool services]]
- ← Dependency: [[Calculate Partial ER preview - Step1]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Custom: CBL-28112 (CSI-4215) PER setting and calculation update
- Custom: CBL-4814 (CLM-1713) Create Web Service for PER Request
- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
