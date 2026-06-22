---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Validation rule definitions"
domain: "Modules"
element_id: 1799304
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Get Mistake Rules service validations

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Validation rule definitions

## 📝 Notes

Additional cross validation:

	
- If MistakeRuleType = CONTRACT_REGISTRATION, then DocumentTypeCode is Mandatory

## 🔗 Connections (3)

- → Dependency: [[DocumentTypeCode validation]]
- → Dependency: [[MistakeRuleType validation]]
- ← Dependency: [[10.085 Get Mistake Rules service]]

## 📊 Appears In (2 diagrams)

- Custom: Validation rules
- Use Case: Ticketing - Ticket management
