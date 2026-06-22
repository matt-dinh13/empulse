---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1408747
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 SecuritizedPenaltyItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

Financial items of penalty type which are subject of securitization. The items are grouped by Tariff Item.

## 🔗 Connections (1)

- → Aggregation: [[ContractSecuritization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Logical: Contract securitization - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| TariffItemCode | string |  |
| TotalPaidPenalty | FinancialAmount |  |
| TotalPrescribedPenalty | FinancialAmount |  |
| {ADD}TariffItemTypeCode | string |  |
