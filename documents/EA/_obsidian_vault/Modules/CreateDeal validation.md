---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules"
domain: "Modules"
element_id: 1827550
diagrams: 4
connections: 1
tags:
  - requirement
  - modules
---

# 📋 CreateDeal validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules

## 📝 Notes

There is described set of validations for Create Deal Request values (used by CreateDeal).

Inputs:

	
- CreateDealRequest


Format of validation: Rule definition; returned error list if validation fails
 

	
- dealType must be one of [ INSURANCE ] (no other type is supported now); UNKNOWN_DEAL_TYPE

## 🔗 Connections (1)

- ← Dependency: [[11.010 Create deal (VAS) (UseCase 1829623)]]

## 📊 Appears In (4 diagrams)

- Custom: Business rules
- Custom: CSI-1454 Create Deal method implementation
- Custom: CSI-1806 Create Deal method modification
- Use Case: Deal management - Use Case Model
