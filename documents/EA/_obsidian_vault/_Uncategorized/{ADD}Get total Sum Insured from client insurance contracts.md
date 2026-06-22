---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1705417
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {ADD}Get total Sum Insured from client insurance contracts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD CSI-205 /}
This rule describes getting total sum insured from client active insurance contracts. TotalSumInsured is calculated as a sum of active InsurancePeriod.SumInsured related to client's Insurance Contracts of the same Insurance Program

Input:

	
- CustomerId
	
- InsuranceProgramCode
	
- ReferenceDate


Output:

	
- TotalSumInsured


Steps: 

	
- TotalSumInsured = Get SUM (Sum Insured) from Insurance Period (IP) of Insurance Contracts (IC) having IC.CUID = CustomerId and IC.Status in (N, A) and IC.Program Code = InsuranceProgramCode and IP.Status = Active and (IP.End Date is NULL or IP.End Date >= ReferenceDate)
	
- If no Insurance Contract is found, set TotalSumInsured = 0.
