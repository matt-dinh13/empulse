---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result"
domain: "Modules"
element_id: 1172244
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 Offer Result Transaction

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result

## 🔗 Connections (3)

- → Aggregation: [[Offer Result]]
- ← Aggregation: [[Offer Result Transaction Repayment]]
- ← Aggregation: [[Offer Result Transaction Subvention]]

## 📊 Appears In (2 diagrams)

- Logical: Offer Result
- Logical: Offer Result Transaction

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| RELIP Service Variant | integer |  |
| Transaction Type | string |  |
| Start of Interest Period Date | Date |  |
| Installment Plan Type | string |  |
| Annuity Repayment Algorithm | string |  |
| Term | integer |  |
| Down Payment | decimal |  |
| Cash Payment | decimal |  |
| Total Price | decimal |  |
| Net Transaction Amount | decimal |  |
| Provided Transaction Amount | decimal |  |
| Annuity | decimal |  |
| Total Monthly Payment | decimal |  |
| Total Payment Per Credit | decimal |  |
