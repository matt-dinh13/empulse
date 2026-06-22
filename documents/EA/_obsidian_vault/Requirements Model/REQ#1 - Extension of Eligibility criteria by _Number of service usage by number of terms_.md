---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-9909 (CSI-168) Additional checks in PAYHOL process"
domain: "Requirements Model"
element_id: 1608425
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Extension of Eligibility criteria by "Number of service usage by number of terms"

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-9909 (CSI-168) Additional checks in PAYHOL process

## 📝 Notes

KZ requires to define maximal number of service usage depending on number of terms (extra limit for short-term and long-term loans).

Solution is creation of a new criteria which can be added to eligibility container.
Parameters for the criteria:

	
- MaxNumberOfServiceUsageByTerm : integer (user defined value)


	
- MinNumberOfTerms: integer (user defined value)
	
- MaxNumberOfTerms: integer (user defined value)


This criteria can be added as many times as how many limits is needed, e.g.
1 usage for terms 1-12
2 usages for terms 12-24
3 usages for terms 25-99

## 📊 Appears In (1 diagrams)

- Custom: CBL-9909 (CSI-168) Additional checks in PAYHOL process
