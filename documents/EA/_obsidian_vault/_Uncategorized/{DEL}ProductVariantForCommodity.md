---
type: Class
stereotype: "XSDcomplexType"
package: ""
domain: "_Uncategorized"
element_id: 1815119
diagrams: 0
connections: 1
tags:
  - class
  - _uncategorized
---

# 🔷 {DEL}ProductVariantForCommodity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: N/A

## 📝 Notes

{DEL LOR-8678/}
Information about Product Variants available for financing of desired commodity.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}ProductForCommodity]]

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| {ADD}preference | string |  |
| creditAmountMin | decimal |  |
| creditAmountMax | decimal |  |
| {ADD}cashPaymentCalcMethod | string |  |
| {ADD}cashPaymentMinAmount | decimal |  |
| {ADD}cashPaymentMaxAmount | decimal |  |
| cashPaymentMinRate | decimal |  |
| cashPaymentMaxRate | decimal |  |
| annualInterestRate | decimal |  |
| terms | integer |  |
