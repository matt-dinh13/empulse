---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules"
domain: "Modules"
element_id: 1870130
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Create contract supplement rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules

## 📝 Notes

This rule describes creation of a Contract Supplement based on type of provided Supplement definition.

Input:

	
- RequestData


	
- Supplement definition object
	
- ExtendedAttributes (optional)


Output:

	
- created Contract Supplement object


Algorithm:

	
- If ExtendedAttributes.applicationCode is not null, set contractSupplementCode = RequestData.applicationCode else set contractSupplementCode = returned value of Generating Contract Supplement code
	
- System creates a Contract Supplement with following parameters:
Contract Code = RequestData.contractCode from input
{ADD DOBA-331}Account Number = RequestData.accountNumber (from input if any){/ADD}
Supplement = reference to Supplement definition
Code = contractSupplementCode
Registration Status = Not ready for registration (NRR)
Status = IN_PROCESS
Created_By = currently logged user
Creation_Date = current
Extended attributes for Supplement.Type:
- TRANSACTION - it continues with Set Transaction Supplement values
	
- For Contract Supplement, system creates Contract Supplement Status Transition with following parameters:
Created_By = currently logged user
Creation_Date = current date and time
Status = Contract Supplement.Status
	
- System tries to find Cancellation Timeout for defined Contract Supplement status as ContractSupplement-> Supplement-> Supplement Process Setting where Status Type = Contract Supplement.Status
	
- System sets the value of ContractSupplement.CancellationTimeout on:
- null if the appropriate SupplementCancellationSetting has not been found
- (current date and time + Supplement Process Setting.CancellationTimeout) otherwise.
	
- Return to the calling use case

## 🔗 Connections (3)

- → Dependency: [[Generating Contract Supplement code]]
- → Dependency: [[Set Transaction Supplement values]]
- ← Dependency: [[13.010 Create Contract Supplement]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Create Contract Service Supplement - Use Case Model
