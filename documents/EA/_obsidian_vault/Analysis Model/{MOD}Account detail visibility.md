---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Access right"
domain: "Analysis Model"
element_id: 1507682
diagrams: 4
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Account detail visibility

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Access right

## 📝 Notes

{ADD CLM-2052 /}
Check if Account panel on Client detail screen and Account detail screen can be visible.
Used for KZ Salary project.

Input:
Contract 

Output:
TRUE/FALSE

Steps:

	
- If system property AccountDetail_CheckVisibility is not set then return TRUE and rule ends.
	
- System finds active Service for the Contract where Service.ServiceType = MTCACC.
	
- If the service is not found or Service.For internal client attribute is not set then return TRUE and rule ends.
	
- If user has assigned access right UC12_601_SalaryDebitCard  then return TRUE {ADD CLM-2872} and rule ends.
	
- System calls Customer Data.GetCustomerDataRequest with parameters:
- externalID - cuid related to contract number
- projections = ROLE_DATA
	
- If CIF returns Customer in respond system gets DataProtectionLevel value from attribute customerPerson.customValues.DataProtectionLevel.
If no customer is found or in case of any error system returns FALSE and rule ends.
	
- If DataProtectionLevel = HC_EMPLOYEE then system returns FALSE else system returns TRUE.

{/ADD}

## 🔗 Connections (3)

- → Dependency: [[12.601 Show account detail (salary debit card)]]
- ← Realisation: [[{MOD}01.210 Show contract detail]]
- ← Realisation: [[{MOD}12.601 Show account detail]]

## 📊 Appears In (4 diagrams)

- Custom: Access right
- Custom: Business rule
- Custom: CBL-5594 (CLM-2052) Limited access on BSL Account detail for Salary product
- Custom: CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage
