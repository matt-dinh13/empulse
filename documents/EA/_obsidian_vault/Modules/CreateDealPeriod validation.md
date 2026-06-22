---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules"
domain: "Modules"
element_id: 1827551
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 CreateDealPeriod validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules

## 📝 Notes

There is described set of validations for Create Period Request values (used by Create Deal Period).

Inputs:

	
- CreatePeriodRequest


Format of validation: Rule definition; returned error list if validation fails
 

	
- dealUuid must be uuid of existing Deal; UNKNOWN_DEAL
	
- status of Deal with dealUuid is in the Allowed Deal statuses for period update ; CANNOT_UPDATE_PERIOD_FOR_DEAL_IN_STATUS
	
- startDate < endDate; WRONG_DATE

## 🔗 Connections (2)

- → Dependency: [[Allowed Deal statuses for period update]]
- ← Dependency: [[11.020 Create deal period]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules
- Custom: CSI-1660 Period methods implementation
- Use Case: Deal management - Use Case Model
