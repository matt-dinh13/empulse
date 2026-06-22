---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface"
domain: "Modules"
element_id: 1866985
diagrams: 1
connections: 5
tags:
  - guielement
  - modules
---

# 🖥️ Type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface

## 📝 Notes

Listed: TariffItemType.Code - TariffItemType.Name

LDM: TariffItem.TariffItemType

List is filtered according to setting of superior TariffItem.Tariff.Purpose: 

	
- CEL_PRODUCT, CEL_SERVICE - only TariffItemTypes where rule Is Flag on Tariff Item Type (TariffItemType, FOR_CEL) returns TRUE
	
- REL_PRODUCT, REL_SERVICE - only TariffItemTypes where rule Is Flag on Tariff Item Type (TariffItemType, FOR_REL) returns TRUE
	
- other Purpose - listbox is not filtered


If TariffItem.TariffItemGroup is filled, list is filtered according to Tariff Item Group 2 Tariff Item Type Configuration.
If current value is not in the filtered list, system sets current value as blank.

If Tariff.ServiceRestriction is filled, list is filtered to contain only Tariff Item Types where TariffItemType.ServiceLock = Tariff.ServiceRestriction

Localization code: TAR_TypeName

## 🔗 Connections (5)

- → Dependency: [[Tariff Item Type]]
- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Tariff Item Type duplicity]]
- → Dependency: [[Only active item can be related]]
- → Dependency: [[Tariff Item Group 2 Tariff Item Type Configuration]]

## 📊 Appears In (1 diagrams)

- Custom: Set Tariff Item
