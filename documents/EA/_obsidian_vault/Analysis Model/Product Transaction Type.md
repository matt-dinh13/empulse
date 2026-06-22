---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model"
domain: "Analysis Model"
element_id: 1879094
diagrams: 7
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 Product Transaction Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model

## 📝 Notes

Define possible types of transaction on product level

## 🔗 Connections (12)

- ← Dependency: [[{MOD}Product Offer Limit]]
- ← Dependency: [[Salesroom Disbursement Channel]]
- ← Dependency: [[ContractInstallmentType]]
- ← Dependency: [[Initial transaction type (GUIElement 1803374)]]
- ← Dependency: [[ProductSearchParametersDto]]
- ← Dependency: [[Initial transaction type (GUIElement 1872077)]]
- ← Dependency: [[Initial transaction type (GUIElement 1872033)]]
- ← Dependency: [[Payment Channel To Product Type]]
- ← Dependency: [[Offer Financial Parameter]]
- ← Association: [[Calculation Type To Product Type]]
- ← Dependency: [[Product Profile (Class 1879121)]]
- ← Dependency «use»: [[Supplement Document Type (Class 1879273)]]

## 📊 Appears In (7 diagrams)

- Logical: Offer Financial Parameters
- Logical: Product
- Logical: Product Offer Limit
- Logical: Product Profile
- Logical: Product Type - Offer Calculation Type
- Logical: Product Type - Payment Channel
- Logical: Salesroom

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Cash (CASH) |  |  |
| Purchase (POS) |  |  |
| Not defined (NDF) |  |  |
