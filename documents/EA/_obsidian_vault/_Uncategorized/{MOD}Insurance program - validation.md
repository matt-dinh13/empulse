---
type: Requirement
stereotype: "Validate"
package: ""
domain: "_Uncategorized"
element_id: 1605862
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {MOD}Insurance program - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: N/A

## 📝 Notes

Cross validation:

	
- service scope
if ServiceType.ServiceScope = CONTRCAT then InsuranceProgram.SubjectType must be CUSTOMER
if ServiceType.ServiceScope = COMMODITY then InsuranceProgram.SubjectType must be GOODS
(MSG_INCOMPATIBLEINSPROGRAM)
