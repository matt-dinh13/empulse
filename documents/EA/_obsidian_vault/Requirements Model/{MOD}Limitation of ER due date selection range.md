---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23535 (CLM-6055) Update of conditions for FER service request"
domain: "Requirements Model"
element_id: 1807832
diagrams: 3
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Limitation of ER due date selection range

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23535 (CLM-6055) Update of conditions for FER service request

## 📝 Notes

Input:

	
- FERSetting


	
- Contract


	
- MoratoriumEndDueDate


Steps:
Take the LastInstallmentDueDate from Installment.Due Date of the last standard active Installment related to Contract
Output:

	
- MinimalDate = current date + FERSetting.Minimum Days Before ER,  if FERSetting.PerformRequestInMoratorium = 0 (or NULL) AND MoratoriumEndDueDate is not null AND MoratoriumEndDueDate+1> MinimalDate then MinimalDate = MoratoriumEndDueDate+1
	
- MaximalDate = Last Installment Due Date - 1day;
if FERSetting.Maximal Days Before ER is defined and MaximalDate > current date + FERSetting.Maximal Days Before ER then MaximalDate = current date + FERSetting.Maximal Days Before ER
	
- {ADD CLM-6055}If FERSetting.Use Current Date = 1 then MaximalDate = MinimalDate  {/ADD}

## 🔗 Connections (5)

- ← Dependency: [[Required ER due date]]
- ← Dependency: [[01.785 Get ContractFERRequest preview (UseCase 1869811)]]
- ← Dependency: [[01.786 Create ContractFERRequest service (UseCase 1869805)]]
- ← Dependency: [[08.066 Calculate Full Early repayment preview (UseCase 1879648)]]
- ← Dependency: [[03.035 Show early repayment preview (UseCase 1879635)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-23535 (CLM-6055) Update of conditions for FER service request
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
