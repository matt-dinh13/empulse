---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model"
domain: "Modules"
element_id: 1833459
diagrams: 3
connections: 9
tags:
  - class
  - modules
---

# 🔷 {MOD}Installment Schedule Method Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Logical Data Model

## 📝 Notes

An enumeration of algorithm types used for the installment schedule generating

## 🔗 Connections (9)

- ← Dependency: [[RELIP Service Allowed Combination]]
- ← Dependency: [[RELIP Service]]
- ← Dependency: [[Installment Plan Method]]
- ← Dependency: [[Installment schedule method]]
- ← Dependency: [[Installment Schedule Method alternative (GUIElement 1803404)]]
- ← Dependency: [[{MOD}Installment Schedule Method default]]
- → Dependency: [[Generate installment schedule - Basic algorithm]]
- → Dependency: [[Generate installment schedule - Extended1 algorithm]]
- ← Dependency: [[Product Profile Installment Schedule]]

## 📊 Appears In (3 diagrams)

- Logical: Product Profile
- Logical: REL Installment Plan service - parameters
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| IS_ALG_AN_PRINC |  |  |
| IS_ALG_BASIC |  |  |
| IS_ALG_EQ_PRINC |  |  |
| {ADD}IS_ALG_SIGHT_DEPOSIT |  |  |
| IS_ALG_EXTEND1 |  |  |
| {ADD}IS_ALG_TERM_DEPOSIT |  |  |
