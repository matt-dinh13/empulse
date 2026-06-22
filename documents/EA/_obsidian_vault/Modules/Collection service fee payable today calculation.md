---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877498
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Collection service fee payable today calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Debt on Collection service fees is calculated as sum of all extraordinary fees (i.e. fees which are not part of standard installments) which are to be presented as collection service fees payable at the current date (i.e. today). The fees to the calculation are determined by a flag on Tariff Item Type. The calculation is done for signed and active contracts only because for paid-off contracts, the mentioned fees are involved into the overdue debt:
Sum (Installment.Installment_Part.Amount - Installment.Installment Part.Amount Paid) where Installment Part.Part Type = "F - Fee" and Installment Type = 'EXTRAORDINARY' and Installment.Active Flag = "True" and Installment.Due Date = the current date Tariff Item having Tariff Item Type.Tariff Item Type Flag = 'COLL_SERVICE_FEE' and Contract Status in (A, N).

## 🔗 Connections (2)

- ← Dependency: [[Debt Catalogue]]
- → Aggregation: [[Payable today calculations]]

## 📊 Appears In (2 diagrams)

- Custom: Debt catalogue calculation formulas hierarchy
- Custom: Debt catalogue to calculation formulas
