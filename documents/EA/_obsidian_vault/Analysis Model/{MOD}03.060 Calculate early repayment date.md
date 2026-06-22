---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Full Early Repayment/Access Rights"
domain: "Analysis Model"
element_id: 1879636
diagrams: 8
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}03.060 Calculate early repayment date

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Full Early Repayment/Access Rights

## 📝 Notes

The function finds the first possible date when is possible to perform the full or partial early repayment (ER due date).
ER due date is either related to a standard active installment due date or to nearest possible date for FER service based on the service setting:

	
- if system property FER_UseCurrentDayAsRepaymentDate is set to 1 {ADD CLM-6055} or FERSetting.Use Current Date is set to 1{/ADD}, system should use nearest possible date as early repayment date for evaluation and request creation by default. It is used as default date on the Early repayment request screen and user can choose a different date via &#171;Change due date&#187; form. If FER_UseCurrentDayAsRepaymentDate = 0, default ER due date will be related to the nearest future due date of the installment schedule on  Early repayment request screen
	
- I case of Automatic FER function (Service has "Automatic Service Evaluation" = 1 set), a value of the FER Service.Interest Calculation Next Due date can control choosing od ER due date as follow: in case 1 ->  the nearest future due date of the installment schedule, otherwise value of FER_UseCurrentDayAsRepaymentDate is used for Automatic FER function

If an ER moratorium for some of the first installments is applied, it is returned the first installment due date after installments with moratorium. (Notice: ER moratorium indicates number of installments which have to be repaid before the ER can be performed.) The last installment is excluded from calculation.
For an example of ER due date determination see ER Due Date example

## 🔗 Connections (4)

- ← Dependency: [[REQ#1 - Update of Early repayment request - use current date as early repayment date by default (KZ ]]
- ← Dependency: [[Calculate Partial ER preview - Step1]]
- → Realisation: [[03.060 Calculate early repayment date]]
- ← UseCase «include»: [[08.066 Calculate Full Early repayment preview (UseCase 1879648)]]

## 📊 Appears In (8 diagrams)

- Custom: Access Rights
- Custom: CBL-11397 (CSI-406) Change FER Amount Calculation for Automatic FER processing
- Custom: CBL-23535 (CLM-6055) Update of conditions for FER service request
- Custom: CBL-5505 (CLM-1935) FER early repayment date by default
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
