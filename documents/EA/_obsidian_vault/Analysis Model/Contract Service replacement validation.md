---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model"
domain: "Analysis Model"
element_id: 1833404
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Contract Service replacement validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model

## 📝 Notes

{ADD CSI-2445}
This rule present set of validation for the Contract Service replacement.

Input:

	
- ContractService
	
- NewService
	
- {ADD CSI-2445}ReplacedService (optional){/ADD}
	
- replaceReason (optional)


Output:

	
- an error message


Steps

	
- {ADD CSI-2445}System checks the NewService is in status ACTIVE/TERMINATED. If not, system returns MSG_ServiceHasNotBeenActivated ('New service has never been activated') message.{/ADD}
	
- System checks that ServiceType of the ReplacedService is the same as ServiceType related to the NewService. If not, system returns MSG_ServiceTypeNotSame ('New service has to be of the same type as original service.') message.
	
- {ADD CSI-2445}If Contract.Contract Type = REL, check the AccountStatus by {ADD}Check Account status by account number from AM with parameter: Contract.Credit Account Number. If FALSE is returned, system returns MSG_ReplacementNotAllowedForAccount ('The replacement is not allowed for the provided account')
	
- {ADD CSI-2445}If Contract.Contract Type <> REL,{/ADD} checks the Contract related to ContractService is in allowed statuses by Supported contract statuses for self-care. If not, system returns error message = "Required operation cannot be processed for contract in this status: Contract number: ${Contract.Contract Code}, status : ${Contract.Status} valid statuses are : ${allowed statuses}"
	
- System checks the ContractService.Status is in ('NEW', 'ACTIVE'). If not, system returns error message = "Required operation cannot be processed for ContractService in this status."
	
- {ADD CSI-2468}If category = INSURANCE, System checks the following parameters of NewService and ReplacedService are the same:
- firstPeriodTrigger,  firstPeriodDuration, firstPeriodDurationOffset, nextPeriodDuration. If any difference is found, system returns error message = "Differences in the Insurance setting was found. Replacement is not possible."{/ADD}
	
- If replaceReason is provided, check that this text is Printable text  up to 255. If not, system returns MSG_InvalidReason ('Invalid reason description') message and returns back to display Replace service modal window.

## 🔗 Connections (1)

- → Dependency: [[Check Account status by account number from AM]]

## 📊 Appears In (3 diagrams)

- Use Case: Contract Service replacement (flip)
- Use Case: CSI-2973 Replace Service on Contract
- Use Case: CSI-2973 Replace Service on Contract
