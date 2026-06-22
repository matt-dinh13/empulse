---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Validation Rules"
domain: "Analysis Model"
element_id: 1651960
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Required credit limit is not lower then suggestedAmount

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Validation Rules

## 📝 Notes

If suggestedAmount from the controlling UC is not null, then the following condition has to be met: 

	
- Entered Required credit limit >= suggestedAmount 


MSG_RequiredCLAmountHasNotToBeLowerThenSuggested (e.g. "Required credit limit has not to be lower then allowed amount by the card business system, which is equal to ${suggestedAmount}.")

## 🔗 Connections (1)

- ← Dependency: [[Required credit limit for CLDP]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
