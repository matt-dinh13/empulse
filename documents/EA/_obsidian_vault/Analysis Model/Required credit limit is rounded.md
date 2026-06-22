---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Validation Rules"
domain: "Analysis Model"
element_id: 1651957
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Required credit limit is rounded

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Validation Rules

## 📝 Notes

Enter Required credit limit has to be value rounded on whole tens, hundreds, thousands etc. defined by RoundingDefinition.roundingScale for RoundingDefinition where usage = CREDIT_LIMIT_CHANGE.  

MSG_RequiredCLAmountHasToBeRounded (e.g. "Required credit limit amount has to be grounded on whole ${roundingScale}.")

## 🔗 Connections (2)

- ← Dependency: [[Required credit limit for CLIP]]
- ← Dependency: [[Required credit limit for CLDP]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
