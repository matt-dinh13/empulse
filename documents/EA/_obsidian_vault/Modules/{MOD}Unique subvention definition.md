---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/Business Rules"
domain: "Modules"
element_id: 1665123
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}Unique subvention definition

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/Business Rules

## 📝 Notes

Validation:
For Product Subventions:

	
- Combination of (Participant, CommodityType, Purpose{ADD PCG-2379}, ModelCode{/ADD}) must be unique in scope of subvention on product inclusive combination (Participant, CommdityType = not defined, Purpose{ADD PCG-2379}, ModelCode = not defined{/ADD})
	
- for combination of (Participant, CommodityType, Purpose=ALTERNATIVE{ADD PCG-2379}, ModelCode{/ADD}), the combination of (participant, commodityType, purpose = STANDARD{ADD PCG-2379}, ModelCode{/ADD}) must already exists.


For Service Subventions:

	
- Subvention.Participant must be unique in scope of Service version.

## 🔗 Connections (3)

- ← Dependency: [[Model (GUIElement 1825333)]]
- ← Dependency: [[Participant]]
- ← Dependency: [[Commodity type (GUIElement 1825314)]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
