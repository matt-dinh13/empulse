---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1819822
diagrams: 7
connections: 16
tags:
  - class
  - modules
---

# 🔷 Currency

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules

## 📝 Notes

Currency
On program level is defined local currency, which can be used as default.

## 🔗 Connections (16)

- ← Dependency: [[Currency (Class 1275266)]]
- ← Dependency: [[{MOD}Product Offer Calculation Request]]
- ← Dependency: [[Bank Account (Class 1627830)]]
- ← Dependency: [[FinancingSchemeValues - validation rules]]
- ← Dependency: [[TempAppl Payment Channel]]
- ← Dependency: [[{DEL}Currency (Class 1816573)]]
- ← Dependency: [[Currency (GUIElement 1831559)]]
- ← Dependency: [[{MOD}Tariff]]
- ← Dependency: [[Currency (GUIElement 1867440)]]
- ← Dependency: [[DDM Draft]]
- ← Dependency: [[DDM Draft]]
- ← Dependency: [[Currency (GUIElement 1872061)]]
- ← Association: [[{MOD}Product]]
- ← Dependency: [[{MOD}Product]]
- ← Usage: [[Contract Bank Account]]
- ← Dependency: [[Service (Class 1880804)]]

## 📊 Appears In (7 diagrams)

- Custom: Financing Scheme Values - validation Rules
- Logical: CustomerOfferWS - GetCodeList
- Logical: DDM Draft
- Logical: GetFinancingSchemeCodeLists
- Logical: Tariff and Tariff Item Management
- Logical: Temporary Application - detail
- Logical: Temporary Application - Payment Information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Text(3) |  |
| Name | Text |  |
| Active | boolean |  |
| Is Default |  |  |
