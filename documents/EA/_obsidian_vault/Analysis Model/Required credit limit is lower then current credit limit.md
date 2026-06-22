---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Validation Rules"
domain: "Analysis Model"
element_id: 1651961
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Required credit limit is lower then current credit limit

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Validation Rules

## 📝 Notes

The following condition has to be met: 

	
- Entered Required credit limit < Contract->FinancialParameters.Provided Credit Limit


MSG_RequiredCLAmountHasToBeLowerThenCurrent (e.g. "Required credit limit has to be lower then current credit limit, which is equal to ${providedCreditLimit}.")

## 🔗 Connections (1)

- ← Dependency: [[Required credit limit for CLDP]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
