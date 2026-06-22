---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules"
domain: "Analysis Model"
element_id: 1619100
diagrams: 4
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Check existency of active PAYHOL request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules

## 📝 Notes

This rule checks if any PAYHOL Loan Service Request in status CREATED exists for the contract.

Input:

	
- Contract


Output:

	
- Validation Message


Steps:
If Loan Service Request having Request Type = PAYHOL and Current Status = CREATED for the Contract exists, then set Validation Message = MSG_ActiveServiceRequestExists (e.g. Active requests for ${ServiceName} already exists on the contract.) where ServiceName = Service.Name

## 🔗 Connections (2)

- ← Dependency: [[01.797 Create ContractPayholRequest service]]
- ← Dependency: [[08.355 Create request for payment holiday (UseCase 1862152)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CBL-6153 (CLM-3085) Prevent duplicate PAYHOL application on a contract
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
