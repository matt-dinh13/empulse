---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Commodities Assignment/User Interface"
domain: "Modules"
element_id: 1662065
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ {ADD}Filter model by assigned manufacturer

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Commodities Assignment/User Interface

## 📝 Notes

{ADD PCG-3420/}
Default value True
If the Filter model by assigned manufacturer is set to true then field Model Code in Assign commodities for product contain only Models where Model.ManufacturerCode is in list of manufacturers assigned on product (Product.ProductToManufacturer.Manufacturer.Code). If the list is empty, then contains all models.

## 📊 Appears In (1 diagrams)

- Custom: Commodities-Assign
