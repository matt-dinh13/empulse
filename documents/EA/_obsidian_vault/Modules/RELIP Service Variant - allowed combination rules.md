---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1019481
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 RELIP Service Variant - allowed combination rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

// Limited offer in list boxes for RELIP service variant

If any of values
- TransactionType
- InstallmentPlanType
is being entered then the list of offered values in corresponding listbox is limited by definition in RELIP Service Variant Allowed Combination and other already entered key values defined in this entity.

For detailed explanation see rule RELIP Service Variant - allowed combination rules.

## 🔗 Connections (1)

- ← Dependency: [[RELIP Service Variant - validation rules]]

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP Service Variant
