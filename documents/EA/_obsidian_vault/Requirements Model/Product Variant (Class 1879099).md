---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1879099
diagrams: 6
connections: 13
tags:
  - class
  - requirements-model
---

# 🔷 Product Variant

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

For every Product there is one or more Product Variants which contains basic financial characteristics of the product.

## 🔗 Connections (11)

- ← Dependency «mapping»: [[{DEL}ProductVariantDataDto]]
- ← Dependency: [[Offer Financial Parameter]]
- ← Association: [[Offer Financial Parameter]]
- → Association: [[{MOD}Temporary Application]]
- ← Generalization: [[Revolving Loan Product Variant]]
- → Dependency: [[Product Preference]]
- ← Association: [[{MOD}Product]]
- ← Generalization: [[{MOD}Standalone Insurance Product Variant]]
- ← Generalization: [[Closed End Loan Product Variant]]
- → Dependency: [[Product Calculation Method]]
- ← Association: [[Financial Parameters (Class 1879562)]]

## 📊 Appears In (6 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Contract - Financial parameters
- Logical: Entities to be removed
- Logical: Offer Financial Parameters
- Logical: Product data synchronization mapping
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Credit Amount Min | Financial Amount |  |
| Credit Amount Max | Financial Amount |  |
| Cash Payment Calculation Method | Product Calculation Method |  |
| Min Cash Payment Fixed Amount | Financial Amount |  |
| Min Cash Payment Rate  | Percent |  |
| Max Cash Payment Fixed Amount | Financial Amount |  |
| Max Cash Payment Rate  | Percent |  |
| Preference | Product Preference |  |
| Pricing Category From | Integer |  |
| Pricing Category To | Integer |  |
