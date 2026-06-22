---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Use Case"
domain: "Analysis Model"
element_id: 1740248
diagrams: 7
connections: 14
tags:
  - requirement
  - analysis-model
---

# 📋 Check chosen service for eligibility

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Use Case

## 📝 Notes

This rule describes evaluation of the provided Service for eligibility
Input:

	
- Contract
	
- Contract Service of processed Contract


Output:

	
- Available Collection Tool Service


Steps:

	
- Create Available Collection Tool Service auxiliary structure for the Contract
	
- Get a list of Service Eligibility Criteria (SEC) associated to the service by Get list of Eligibility Criteria for Service rule with parameters: Service.Code
	
- For each SEC item in the list is performed:
A. 1. an evaluation of the SEC by calling particular SEC definition according to Service eligibility rules with parameters: Code of SEC, array of SEC parameters
A. 2. writing SEC and evaluation Result into Available Collection Tool Service.Service Evaluation Result.Service Evaluation Result Detail for the evaluated Service as follow:
- Can Be Overruled = SEC.CanBeOverruled
- Result Code = Result.ValidationMessage
	
- After all SEC are evaluated for Service, result is written into Available Collection Tool Service.Service Evaluation Result as follow:
- if all Service Evaluation Result Detail.Result Code of evaluated Service contains 'OK', set Evaluation Status = ELIGIBLE, else set Evaluation Status = INELIGIBLE
- if any Service Evaluation Result Detail.Result Code != 'OK' and Can Be Overruled = FALSE, set Overrule Evaluation Status = INELIGIBLE, else set Overrule Evaluation Status = ELIGIBLE
	
- Return to calling UC

## 🔗 Connections (12)

- → Dependency: [[Service eligibility rules]]
- ← Dependency: [[01.797 Create ContractPayholRequest service]]
- ← Dependency: [[01.796 Get ContractPayholRequest preview service]]
- ← Dependency: [[08.355 Create request for payment holiday (UseCase 1862152)]]
- ← Dependency: [[08.354 Show parameters of payment holiday (UseCase 1862151)]]
- ← Dependency: [[08.402 Create request for loan restructuring (UseCase 1862199)]]
- ← Dependency: [[08.400 Show parameters for loan restructuring (UseCase 1862191)]]
- ← Dependency: [[{MOD}08.062 Create request for change due date]]
- ← Dependency: [[08.061 Show parameters for change due date (UseCase 1862209)]]
- ← Dependency: [[01.794 Get ContractCHDDRequest preview service (UseCase 1869814)]]
- ← Dependency: [[01.810 Create ContractLRESRequest service (UseCase 1869794)]]
- ← Dependency: [[01.795 Create ContractCHDDRequest service (UseCase 1869792)]]

## 📊 Appears In (7 diagrams)

- Use Case: CHDDR request creation - externally
- Use Case: CHDDR request creation - via GUI
- Use Case: Collection tools request
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
