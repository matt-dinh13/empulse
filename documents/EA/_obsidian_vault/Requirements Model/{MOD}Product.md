---
type: Class
stereotype: "versioned"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-240 PSL integration with BSL (CBL-159)"
domain: "Requirements Model"
element_id: 1879135
diagrams: 21
connections: 35
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Product

> **Type**: Class · **Stereotype**: «versioned»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-240 PSL integration with BSL (CBL-159)

## 📝 Notes

Product is the core entity that defines parameters of offered products. List of products is main input for product calculator, which provides financial parameters of loan offers including all services adjusted.

## 🔗 Connections (33)

- ← Dependency: [[Sales Package Item]]
- ← Dependency: [[Product Offer Limit Product]]
- ← Dependency: [[{MOD}Product Offer Limit]]
- ← Dependency: [[{MOD}LAP Offer vector]]
- ← Dependency: [[{MOD}Salesroom Product]]
- ← Dependency: [[{DEL}Product (Class 1775262)]]
- ← Dependency: [[{DEL}SalesroomSalesItemValues]]
- ← Dependency: [[{DEL}SalesPackageItem]]
- ← Dependency «mapping»: [[{DEL}ProductCommonDataDto]]
- ← Dependency: [[Offer Financial Parameter]]
- → Association: [[Sales Area]]
- → Association: [[{MOD}Subvention (Class 1858806)]]
- → Association: [[{MOD}Temporary Application]]
- → Dependency: [[{MOD}Tariff]]
- → Association: [[{MOD}Terms And Conditions]]
- → Dependency: [[Loan Origination Process]]
- → Generalization: [[Versioned entity]]
- → Association: [[Currency (Class 1819822)]]
- → Dependency: [[Currency (Class 1819822)]]
- ← Aggregation: [[Product To Financing Package]]
- ← Aggregation: [[Product To Manufacturer]]
- → Association: [[Product Profile (Class 1879121)]]
- ← Aggregation: [[Product To Marketing Action]]
- → Dependency: [[IS generation trigger]]
- ← Aggregation: [[Product To Service]]
- → Association: [[Product to Document Container]]
- ← Aggregation: [[Product Flag]]
- ← Aggregation: [[Product Document Printout]]
- → Association: [[Product Variant (Class 1879099)]]
- ← Aggregation: [[Product To Service Type]]
- ← Aggregation: [[Product To Commodity Type]]
- ← Association: [[{MOD}Contract (Class 1879596)]]
- ← Dependency: [[Financial Parameters (Class 1879562)]]

## 📊 Appears In (21 diagrams)

- Custom: PCG-240 PSL integration with BSL (CBL-159)
- Custom: PCG-5653 CBL-31043 BRPH-2754 - Short term product versions (promo version)
- Logical: {DEL}SalesPackageValues
- Logical: CBL-1533 Adjust OFP
- Logical: Contract
- Logical: Contract - Financial parameters
- Logical: Entities to be removed
- Logical: Fees and Penalties in context
- Logical: GetSalesPackageCodeLists
- Logical: GetSalesroomSalesItems
- Logical: LAP Offer vector - attributes for Optional offer Generation
- Logical: Pairing priority
- Logical: Product - Flags
- Logical: Product data synchronization mapping
- Logical: Product Management
- Logical: Product Offer Limit
- Logical: Product Profile
- Logical: Sales Package
- Logical: Salesroom
- Logical: Salesroom to product
- Logical: Subventions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Valid From | Date |  |
| Valid To | Date |  |
| Description | Text |  |
| Description Sale | Text |  |
| Currency | Currency |  |
| Tariff | Tariff |  |
| Alternative | Boolean | False |
| Usable For PSL | Boolean | False |
| Max Goods Number | Number |  |
| Installment Due Day Shift | Number |  |
| Incentive Program | string |  |
| Use Financing Scheme | Boolean | False |
| Loan Origination Process | string |  |
| Approval Document | string |  |
| Installment schedule generation trigger | string |  |
| Lender | string |  |
| Regular payment type | string |  |
| {ADD}Updated by employee number | string |  |
