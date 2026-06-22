---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model"
domain: "Analysis Model"
element_id: 1851676
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Check Service Eligibility for provided contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Adding Insurance on running contract/Use Case Model

## 📝 Notes

{ADD CSI-2720 /}
This rule describes the way Loan/Insurance services are evaluated: whether they are eligible for a loan Contract.
Note: CanOverrule privilege is not considered in the rule.

Input parameters:

	
- AvailableInsuranceServiceList
	
- Contract


Output:

	
- List of validated Insurance Services in AvailableInsuranceServiceList


Steps:

	
- System gets EligibilityContainer for all InsuranceServices in AvailableInsuranceServiceList by calling https://prc.{environment}/openapi/v1/services/[{code:version},{...}...]?deps=ELIGIBILITY_CONTAINERS
	
- For each InsuranceService in AvailableInsuranceServiceList, system
gets a EligibilityContainerDefinition by calling https://prc.{environment}/openapi/v1/service-eligibility-containers/[{code},{}...]
If no EligibilityContainerDefinition exists, it is continued with next InsuranceService 
A. For each Service Eligibility Criteria (SEC) in the EligibilityContainerDefinition, 
A. 1. system evaluates of the SEC by calling Service Eligibility Criteria definition according to Service eligibility rules with parameters: Code of SEC, array of SEC parameters
A. 2. if the evaluation fails, system removes the InsuranceService from the AvailableInsuranceServiceList and continues with next InsuranceService
	
- After all InsuranceServices in AvailableInsuranceServiceList are processed, system returns the AvailableInsuranceServiceList to calling UC

## 🔗 Connections (2)

- ← Dependency: [[08.344 Generate insurance offers for contract (UseCase 1879848)]]
- ← Dependency: [[{MOD}08.347 Add Insurance service on Contract service]]

## 📊 Appears In (3 diagrams)

- Use Case: Adding Insurance Service on CEL contract
- Use Case: Insurance Service Offers API - Use Case Model
- Use Case: Insurance Service Offers UI - Use Case Model
