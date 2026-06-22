---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/COMMON for UI for Product Management/Business Rules"
domain: "Modules"
element_id: 1789757
diagrams: 2
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Summary VALIDATIONS for setting of time dependent properties

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/COMMON for UI for Product Management/Business Rules

## 📝 Notes

Following rules are defined for time dependent properties to keep consistent history of setting.
Note: 
TODAY is date, which part is in past. Because the smallest time unit is one day, TODAY is supposed to be in past. It is not possible to change setting in past.
Validations:

	
- Start of validity is mandatory.
	
- Start of validity > TODAY when creating a new interval.
	
- End of validity is optional.
	
- End of validity >= maximum(TODAY, Start of validity) or empty after record editing.

When comparing date values the rule Start and end of validity if only date is entered is respected.

## 🔗 Connections (5)

- ← Dependency: [[ValidFrom-ValidTo]]
- → Dependency: [[Start and end of validity if only date is entered]]
- ← Dependency: [[{MOD}Presented IR setting validation rules]]
- ← Dependency: [[Valid from (GUIElement 1872099)]]
- ← Dependency: [[Valid to (GUIElement 1872032)]]

## 📊 Appears In (2 diagrams)

- Custom: Product setting common rules
- Custom: Time dependent business objects
