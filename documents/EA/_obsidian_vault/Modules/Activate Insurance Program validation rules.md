---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Business Rules"
domain: "Modules"
element_id: 1596807
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Activate Insurance Program validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Business Rules

## 📝 Notes

Validations processed before activation of insurance program version. 

Steps:

	
- If no other version of the same Insurance Program in status Active exists and Version.ValidFrom < TODAY+1 then error is displayed (MSG_NO_OTHER_INSPROG_VERSION).
	
- If InsuranceProgram.ValidTo < current_date then error is displayed (MSG_VALID_TO_LTHAN_TMRW).
	
- If check ActivationDate > Valid to then error is displayed

## 🔗 Connections (1)

- ← Dependency: [[08.580 Activate Insurance Program version manually (UseCase 1597095)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Insurance Program management - Use Case Model
