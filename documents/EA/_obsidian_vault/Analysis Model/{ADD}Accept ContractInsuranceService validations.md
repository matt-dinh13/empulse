---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model"
domain: "Analysis Model"
element_id: 1851673
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Accept ContractInsuranceService validations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model

## 📝 Notes

{ADD CSI-2752 /}
This rule presents a list of validation used for Accept Contract Insurance Service web method.

Steps (check description; returned error code when the check fails):

 
- get the ContractService with related Contract Insurance Service (CIS) having External Id = loanServiceId and Status = NEW || ACTIVE; CONTRACT_SERVICE_NOT_FOUND
 
- get Insurance Contract by ContractInsuranceService.Insurance Contract Code in Status (NEW || SIGNED); INSURANCE_CONTRACT_NOT_FOUND
 
- Contract related to ContractService exists in the Contract entity and Contract Type = 'CEL' and it is in allowed statuses by Allowed contract statuses for insurance activation; CONTRACT_NOT_FOUND
 
- if signDate is provided, check if Contract.Sign (Date of Contract Status Transition into Status = 'N') <= signDate <= current date; INVALID_SIGN_DATE
 
- check Loan Service Request (LSR) with Insurance Offer extension (LSRIO) related to CIS exists, i.e. get LSR in Status (CREATED) related to Contract Service with externalId = loanServiceId; MISSING_INSURANCE_OFFER_DATA
 
- If reasonCode is provided, checks if the value exists in Insurance Business Reason Type code list based on following condition: Code =reasonCode and Related To Status = 'C' and Active = 1; INVALID_REASON_CODE

## 🔗 Connections (2)

- → Dependency: [[Allowed contract statuses for insurance activation]]
- ← Dependency: [[{MOD}08.350 Accept Contract Insurance Service]]

## 📊 Appears In (1 diagrams)

- Use Case: Acceptation Insurance Service on CEL contract
