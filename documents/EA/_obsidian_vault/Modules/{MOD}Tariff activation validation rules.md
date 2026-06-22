---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Business Rules"
domain: "Modules"
element_id: 1304641
diagrams: 4
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {MOD}Tariff activation validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Business Rules

## 📝 Notes

Validations processed before activation of tariff version. 
 

	
- If no Tariff Items are assigned to Tariff then warning is displayed (MSG_NO_TARIFF_ITEMS_DEFINED).
	
- For each Tariff Item assigned to Tariff execute validation according to Tariff Item activation validation rules.
	
- If Tariff.Purpose in (CEL_INSURANCE_SERVICE, REL_INSURANCE_SERVICE {ADD PCG-1208_1}, STANDALONE_INSURANCE_SERVICE{/ADD})
-- If TI with TIT.Usage = SI is not assigned to Tariff then warning is displayed (MSG_TARNoUsageSIOnInsTariff).
-- If TI with TI.PercentageBasedON = SI is not assigned to Tariff then warning is displayed (MSG_TARNoBaseSIOnInsTariff).
	
- If no approval document is assigned to tariff then error is displayed (MSG_NO_APPROVAL_DOCUMENT).

## 🔗 Connections (5)

- ← Dependency: [[Automatic Version activation processing]]
- → Dependency: [[{MOD}Tariff Item activation validation rules]]
- ← Dependency: [[{DEL}04.180 Activate Tariff version manually]]
- ← Dependency: [[{MOD}PUT tariffs]]
- ← Dependency: [[{MOD}POST tariffs]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: Business Rules
- Use Case: Tariffs
- Use Case: Use Case
