---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout"
domain: "Requirements Model"
element_id: 1762065
diagrams: 4
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Total amount to restructuring calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout

## 📝 Notes

Aim of this rule is to calculate basis for a loan restructuring. The current rule is to capitalize whole overdue debt till and add it to outstanding principal found to First Due Date Restructured.
Input:

	
- Contract


Output:

	
- TotalAmountToRestructuring

{ADD CSI-314} 

	
- PrincipalAmountToRestructuring


	
- InterestAmountToRestructuring
	
- OtherAmountToRestructuring

{/ADD}

Steps:
{ADD CSI-314} 

	
- System takes all active installments with Due Date < LSR.First Due Date Restructured and calculate and store sum of unpaid amounts for each installment part:
- Set PrincipalAmountToRestructuring = Sum(Unpaid Amount) for installment part = Principal
- Set InterestAmountToRestructuring = Sum(Unpaid Amount) for installment part = Interest
- Set OtherAmountToRestructuring =  Sum(Unpaid Amount) for installment part not in (Principal, Interest)
	
- System takes all active installments with Due Date >= LSR.First Due Date Restructured and calculate and add sum of amounts for installment part = Principal:
- Set PrincipalAmountToRestructuring = PrincipalAmountToRestructuring  + Sum(Amount) for installment part = Principal
	
- System get Result of  Get Future capitalized installments for restructuring rule and add it to the calculated value for each installment parts:
- PrincipalAmountToRestructuring = PrincipalAmountToRestructuring  + Result.restructured extra amount principal
- InterestAmountToRestructuring = InterestAmountToRestructuring   + Result.restructured extra amount interest
- OtherAmountToRestructuring = OtherAmountToRestructuring   + Result.restructured extra amount other
	
- System calculates TotalAmountToRestructuring:
- TotalAmountToRestructuring = PrincipalAmountToRestructuring  + InterestAmountToRestructuring  + OtherAmountToRestructuring

{/ADD}
{DEL CSI-314} 

	
- Get following attribute values from Contract -> Debt Catalogue (DC)
	
- Set TotalAmountToRestructuring = DC.Total Principal Debt + DC.Overdue Interest Debt + DC.Overdue Debt on Fees + DC.Overdue Debt on Penalties + DC.Overdue Debt on Other Installments
	
- InstallmentPartsToBeRestructured = result of Get Future capitalized installments for restructuring to get sum of currently due/future instalments to be included in restructuring on top of total principal and overdue sum
	
- System adds InstallmentPartsToBeRestructured amount to the TotalAmountToRestructuring

{/DEL}

## 🔗 Connections (2)

- → Dependency: [[{MOD}Get Future capitalized installments for restructuring]]
- ← Dependency: [[{MOD}08.403 Create request for loan restructuring common]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-11449 (CSI-314) Loan restructuring printout
- Custom: IS-21 (CBL-6) Restructuring - Phase 1
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
