---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Validation Rules"
domain: "Modules"
element_id: 1867131
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Source for limit value

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Validation Rules

## 📝 Notes

// Returns list of values for limit value for specific limit value based on

If limitValueBasedOn = PUR, them must exists in list of purposes obtained by rule Get Codelists from CSD with parameters: group = CUST, codelist = LOAN_PURPOSE and activeYn = true

If limitValueBasedOn = DM, them must exists in list of disbursement methods obtained by rule Get enum from HomeSIS with parameters enumName = DISBURSEMENT_CHANNEL_TYPE

## 🔗 Connections (4)

- ← Dependency: [[Limit value (GUIElement 1867016)]]
- → Dependency: [[{ADD}Get Codelists from CSD]]
- → Dependency: [[Get enum from HomeSIS]]
- ← Dependency: [[{MOD}TariffItemDto - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
