---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesroomSalesItem"
domain: "Modules"
element_id: 1775305
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 {DEL}GetSalesroomSalesItemResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesroomSalesItem

## 📝 Notes

{DEL PCG-4293/}

## 🔗 Connections (5)

- ← Dependency: [[{DEL}SalesPackageWS]]
- → Dependency: [[{DEL}ResultCodeGetSalesroomSalesItem]]
- → Dependency: [[{DEL}ValidationCodeGetSalesroomSalesItem]]
- → Dependency: [[ValidationResult]]
- → Dependency: [[{DEL}ResultGetSalesroomSalesItem]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesroomSalesItems

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomSalesItem | {DEL}ResultGetSalesroomSalesItem |  |
| validationResult | ValidationResult |  |
| result | {DEL}ResultCodeGetSalesroomSalesItem |  |
