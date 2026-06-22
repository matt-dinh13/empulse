---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools requests/Use case model"
domain: "Analysis Model"
element_id: 1740249
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Check contracts for collection tool services eligibility

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools requests/Use case model

## 📝 Notes

This rule describes way of evaluation of Loan services used as collection tools whether are eligible for client's contract.

Input parameters:

	
- Available Collection Tool Service auxiliary structure


Output:

	
- List of validated collection tool services in Available Collection Tool Service


Steps:
For each Contract in Available Collection Tool Service

	
- For each Service associated to Contract is obtained a list of Service Eligibility Criteria associated to it by Get list of Eligibility Criteria for Service rule with parameters: Service.Code
If a duplicity in the eligibilities is found, system shows error message: MSG_DuplicityInEligibilityContainerSetting; e.g.	Incorrect eligibility container setting. Duplicity in container $(container_name)
A. For each Service Eligibility Criteria (SEC) in the list is performed:
A. 1. an evaluation of the SEC by calling Service Eligibility Criteria definition according to Service eligibility rules with parameters: Code of SEC, array of SEC parameters
A. 2. writing SEC and evaluation Result into Available Collection Tool Service.Service Evaluation Result.Service Evaluation Result Detail for the evaluated Service as follow:
- Can Be Overruled = SEC.CanBeOverruled
- Result Code = Result.ValidationMessage
B. After all SEC are evaluated for Service, result  is written into Available Collection Tool Service.Service Evaluation Result as follow:
- if all Service Evaluation Result Detail.Result Code of evaluated Service contain 'OK', set Evaluation Status = ELIGIBLE, else set Evaluation Status = INELIGIBLE
- if any Service Evaluation Result Detail.Result Code != 'OK' and Can Be Overruled = FALSE, set Overrule Evaluation Status = INELIGIBLE, else set Overrule Evaluation Status = ELIGIBLE
- get Last Service Activation = Max (Creation Date) from Loan Service Request.Loan Service Request Status Transition where Request Type = processed Service Type and Current Status = EXECUTED and Contract = processed Contract
	
- After all Contracts and their Services are processed, return the List of validated collection tool services in Available Collection Tool Service to calling UC

## 🔗 Connections (3)

- → Dependency: [[Get list of Eligibility Criteria Parameters for Service]]
- → Dependency: [[Service eligibility rules]]
- ← Dependency: [[08.900 Show available collection tools for client's contracts]]

## 📊 Appears In (1 diagrams)

- Use Case: Collection tools request
