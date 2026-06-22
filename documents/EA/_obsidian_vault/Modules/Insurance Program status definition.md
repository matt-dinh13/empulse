---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Business Rules"
domain: "Modules"
element_id: 1596806
diagrams: 2
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Insurance Program status definition

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Business Rules

## 📝 Notes

This rule defines function statuses of the Insurance Program intended for UI, getting/searching API

Input data for status evaluation:

	
- VersionStatus = InsuranceProgram.VersionStatus
	
- ValidFrom =  InsuranceProgram.ValidForm
	
- ValidTo = InsuranceProgram.ValidTo


Status evaluation:

	
- INACTIVE = (VersionStatus = I), ValidFrom and/or ValidTo any value
	
- FOR_ACTIVATION = (VersionStatus = F or A and ValidFrom > current_date_time)
	
- ACTIVE = (VersionStatus = A and ValidFrom <= current_date_time <= ValidTo)
	
- TERMINATED = (VersionStatus = A or T and current_date_time > ValidTo)
	
- CANCELLED =  (VersionStatus = C), ValidFrom and/or ValidTo any value

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Insurance Program management - Use Case Model
