---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Collect data before sign/Business Rules"
domain: "Analysis Model"
element_id: 1351223
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Validation rule filter for extended information

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Collect data before sign/Business Rules

## 📝 Notes

// Searching for required validation rules for Extended information (EI)

Input:
- economical status from related ClientSnapshot for contract
- Occupation income from related ClientSnapshot for contract
- Industry from related ClientSnapshot for contract

Output:
- SearchResult

Check each Extended Information validation rule criteria with flag active=True as follows:

	
- Extended_Information_validation_rule_criteria.EconomicalStatus = ClientSnapshot.Employment.EconomicalStatus
	
- and Extended_Information_validation_rule_criteria.MinNetIncome <= ClientSnapshot.FinancialData.Occupation_Income
	
- and Extended_Information_validation_rule_criteria.Industry=ClientSnapshot.Employment.Employer Industry


If all criteria are satisfied then add validation criteria to SearchResult.
Continue with the next validation rule.

Return SearchResult

## 🔗 Connections (4)

- ← Dependency: [[Extended Information fields rules]]
- ← Dependency: [[Extended Information criteria]]
- ← Dependency: [[01.181 Collect data before sign (UseCase 1351141)]]
- ← Dependency: [[Extended information validation rule-IN]]

## 📊 Appears In (2 diagrams)

- Custom: IN
- Custom: Validation rules - IN
