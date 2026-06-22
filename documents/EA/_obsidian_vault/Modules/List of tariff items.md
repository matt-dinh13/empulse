---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/User Interface"
domain: "Modules"
element_id: 1831506
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 List of tariff items

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/User Interface

## 📝 Notes

Default order: TariffItemType.Code asc.
Paging: No.

Localization code: TAR_Percantage

## 🔗 Connections (3)

- → Realisation: [[{DEL}04.050 Show tariff item detail (UseCase 1862896)]]
- → Realisation: [[{DEL}04.030 Remove tariff item (UseCase 1862902)]]
- → Realisation: [[{DEL}04.040 Update tariff item (UseCase 1862898)]]

## 📊 Appears In (1 diagrams)

- Custom: Show Tariff

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type - code | string |  |
| Type – name | string |  |
| Category | enum |  |
| Group | enum |  |
| Calculation method | enum |  |
| Amount | number |  |
| Percentage | number |  |
| Calculated from | enum |  |
| Detail | icon |  |
| Remove | icon |  |
| Update | icon |  |
| Limit amount based on | enum |  |
| Limit amount from | int |  |
| Limit amount to | int |  |
