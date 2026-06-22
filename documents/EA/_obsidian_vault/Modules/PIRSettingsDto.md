---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Code Lists"
domain: "Modules"
element_id: 1845815
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 PIRSettingsDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Code Lists

## 📝 Notes

Presented interest rate setting
LDM: Presented IR Setting

## 🔗 Connections (3)

- → Dependency: [[{MOD}Presented IR Setting]]
- → Dependency: [[LocalizedString (Class 1873246)]]
- ← Dependency: [[CodeListsDto]]

## 📊 Appears In (2 diagrams)

- Logical: Code Lists
- Logical: Presented Interest Rate Settings

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| pirType | string |  |
| displayName | LocalizedString |  |
| printName | LocalizedString |  |
| sortOrder | int |  |
| displayInOffer | boolean |  |
| displayInContract | boolean |  |
| displayInPrintout | boolean |  |
| rounding | string |  |
| roundingScale | int |  |
| productType | string |  |
| case | string |  |
| active | boolean |  |
