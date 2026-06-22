---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization"
domain: "Modules"
element_id: 1408749
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}SecuritizedFeeItem

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Securitization

## 📝 Notes

Financial items of fee type which are subject of securitization. The items are grouped by Tariff Item.

## 🔗 Connections (1)

- → Aggregation: [[ContractSecuritization]]

## 📊 Appears In (2 diagrams)

- Custom: Debt Securitization
- Logical: Contract securitization - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| TariffItemCode | string |  |
| AccruedFeeOnLastInstallment | FinancialAmount |  |
| AccruedFeeTillEndOfMonth | FinancialAmount |  |
| TotalPaidFee | FinancialAmount |  |
| PastPrescribedFee | FinancialAmount |  |
| {ADD}TariffItemTypeCode | string |  |
