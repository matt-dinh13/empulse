---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/User Interface Model"
domain: "Modules"
element_id: 1867447
diagrams: 1
connections: 5
tags:
  - guielement
  - modules
---

# 🖥️ Tariff

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/User Interface Model

## 📝 Notes

Listed: Tariff. (code + name) where Tariff.Currency = Service.Currency and Tariff.VersionStatus = Active 

List is filtered according to setting of tariff: 
- only tariffs were Tariff.ServiceRestriction = Service.ServiceType.Code or Tariff.ServiceRestriction is empty are displayed.
- if Filter tariffs is checked (true) then only tariffs were Tariff.ServiceRestriction = Service.ServiceType.Code are displayed.

If Service.ServiceType = MTCACC then Service.Tariff is mandatory.
LDM: SERVICE.Tariff
Disabled if SERVICE.Currency is not specified.

Disabled and empty when Service.MandatoryOnContract = TRUE and Service.ServiceType <> MTCACC.

Localization code: TAR_Tariff

## 🔗 Connections (5)

- → Dependency: [[Only values from code list (Action 1789803)]]
- → Dependency: [[{MOD}Tariff]]
- → Dependency: [[Related item must be active]]
- → Dependency: [[Optional]]
- → Dependency: [[{MOD}Service and Tariff cross validation]]

## 📊 Appears In (1 diagrams)

- Custom: Set main Service properties
