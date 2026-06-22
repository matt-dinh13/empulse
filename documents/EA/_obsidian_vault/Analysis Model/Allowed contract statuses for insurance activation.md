---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model"
domain: "Analysis Model"
element_id: 1876181
diagrams: 7
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Allowed contract statuses for insurance activation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model

## 📝 Notes

This rule determines allowed statuses of the loan contract for which some action with insurance can be done, i.e. adding insurance on a contract, switch-on an insurance on the contract. 
Input:

	
- LoanContractCode


Output:

	
- Result (boolean)


Check: If Contract by Contract Code = LoanContractCode is in Status (ListOfAllowedLoanStatusesForInsurance) then return TRUE, else return FALSE

ListOfAllowedLoanStatusesForInsurance (system property) is set by "'N', 'A'" by default (Signed, Active)

## 🔗 Connections (6)

- ← Dependency: [[{MOD}CreateContractInsurance validations]]
- ← Dependency: [[{ADD}Accept ContractInsuranceService validations]]
- ← Dependency: [[11.147 Activate insurance on contract]]
- ← Dependency: [[GetInsuranceServiceOffers validations]]
- ← Dependency: [[08.340 Show Insurance offers for loan contract (UseCase 1879847)]]
- ← Dependency: [[{MOD}08.349 Generate Insurance offer preview]]

## 📊 Appears In (7 diagrams)

- Use Case: Acceptation Insurance Service on CEL contract
- Use Case: Adding Insurance Service on REL contract
- Use Case: Adding Insurance Service on REL contract method
- Use Case: Changing insurance operation status
- Use Case: Insurance on REL Contract management
- Use Case: Insurance Service Offers API - Use Case Model
- Use Case: Insurance Service Offers UI - Use Case Model
