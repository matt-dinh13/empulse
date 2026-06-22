---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result"
domain: "Modules"
element_id: 1341763
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Mapping of Offer Result Product to OFP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result

## 📝 Notes

Mapping of Offer Result Product to OFP
ProductType = OFP.ProductVariant.Product.ProductProfile.ProductType.Code
Product = OFP.ProductVariant.Product.(Code + Version)
ProductVariant = OFP.ProductVariant.Code
Tariff = OFP.Tariff.(Code + Version)
LoanProvidingDate = OFP.LoanProvidingDate
BillingDay = OFP.BillingDay
MinimalInstallmentAmount = OFP.MinimalInstallmentAmount
NetCreditLimit = OFP.NetCreditLimit
ProvidedCreditLimit = OFP.ProvidedCreditLimit

## 📊 Appears In (1 diagrams)

- Logical: Offer Result Product
