---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1817925
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Determinate DDM valid from for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This object describes the steps, how system determines the date, since when the direct debit mandate associated with the particular contract is valid from.

Input:
- ContractCode = unique identifier of the contract

Output:
- DirectDebitMandateValidFrom = date, since when the direct debit mandate is valid from

Steps:

	
- System takes the ContractCode from the input and proceeds based on the corresponding contract type as follows:

1.1.  If the contract is based on a CEL product type (i.e. Contract[.Contract_Code=ContractCode].Contract_Type = 'CEL'), then system sets:
          - DirectDebitMandateValidFrom = Contract->Offer_Financial_Parameters[.Chosen=TRUE].Customer_First_Due_Date

1.2.  If the contract is based on a REL product type (i.e. Contract[.Contract_Code=ContractCode].Contract_Type = 'REL'), then system sets:
          - DirectDebitMandateValidFrom = sysdate + value of the global parameter DaysBeforeInstallmentDate
.
	
- System takes the DirectDebitMandateValidFrom calculated within the previous step and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.186 Prepare documentation]]
