---
type: GUIElement
stereotype: "combo"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface"
domain: "Modules"
element_id: 1792949
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Service Type

> **Type**: GUIElement · **Stereotype**: «combo»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/UI for Sales Package Management/User Interface

## 📝 Notes

{ADD PCG-822_19/}
Selection of which service type should be displayed in Available Services grid.

Displayed only for Type = SERVICE.

Listed:
Data are retrieved by method SalesPackageWS.GetSalesPackageCodeLists.ServiceType.name, ordered by name. Only active records are displayed.

After change of selected service type the list of services in grid Available Services is filtered according to selected service type.

Localization code: SER_Type

## 📊 Appears In (1 diagrams)

- Custom: Assign Sales Package Items
