---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features"
domain: "Analysis Model"
element_id: 1876167
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get count of Insurance Periods passed

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features

## 📝 Notes

This rule describes getting of number of insurance period passed from the insurance period start

Input:

	
- InsuranceContract


Output:

	
- InsurancePeriodPassed (integer)


InsurancePeriodPassed = get count of InsuranceContract.InsurancePeriod having Status = ACTIVE

## 🔗 Connections (1)

- ← Dependency: [[11.773 Process account EOM billing finished notification (UseCase 1875631)]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance based on EOM message
