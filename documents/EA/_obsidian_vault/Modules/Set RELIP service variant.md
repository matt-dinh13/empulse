---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1279982
diagrams: 1
connections: 2
tags:
  - screen
  - modules
---

# 📱 Set RELIP service variant

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

Localization code: 
- SER_RELIP_VariantNew (for creating)
- SER_RELIP_VariantUpdate (for updating)

Before saving the data are checked according to rule RELIP Service Variant - validation rules.  

Rules for entering of dependent values (see RELIP Service Variant Allowed Combination) in combo boxes:

	
- Transaction Type –  full list in combo, after change of selected value clear Installment Plan Type
	
- Due Day Method  –  list in combo is filtered by selected Transaction Type

User has to enter the fields in mentioned order otherwise the dependent combo is empty.

## 🔗 Connections (2)

- → Dependency: [[RELIP Service Variant - validation rules]]
- → Realisation: [[08.512 Set RELIP service variant (UseCase 906550)]]

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP Service Variant
