---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules"
domain: "Modules"
element_id: 1827563
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 UpdateDealPeriod validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules

## 📝 Notes

There is described set of validations for Update Period Request values (used by Update Deal Period).

Inputs:

	
- UpdatePeriodRequest


Format of validation: Rule definition; returned error list if validation fails
 

	
- period.ExternalId must be ID of existing Period linked to Deal with dealUuid; UNKNOWN_PERIOD
	
- startDate < endDate; WRONG_DATE
	
- status is one of allowed statuses (ACTIVE, CANCELLED); UNKNOWN_STATUS

## 🔗 Connections (2)

- → Dependency: [[Allowed Deal statuses for period update]]
- ← Dependency: [[11.022 Update deal period]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules
- Custom: CSI-1660 Period methods implementation
- Use Case: Deal management - Use Case Model
