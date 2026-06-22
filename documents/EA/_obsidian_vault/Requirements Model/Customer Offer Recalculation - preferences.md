---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application"
domain: "Requirements Model"
element_id: 1878016
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Customer Offer Recalculation - preferences

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application

## 📝 Notes

// Definition of preferences for calculator engine based on RecalculateProductOfferRequest

D = RecalculateCustomerOfferRequest

OriginalOffer = D.Product Offer Response(OriginalOffer).Offer Financial Parameter
PreferredDueDay = D.PreferredDueDay
InstallmentScheduleMethod = D.InstallmentScheduleMethod
{ADD LOR-11243} Discount Amount = D.structuredParameters[type = DISCOUNT].arguments[code = AMOUNT].value {/ADD}
{ADD LOR-11252} Trade-in Amount = D.parameters[type = TRADE_IN].arguments[code = AMOUNT].value {/ADD}


Service Choice is taken from D.Service Choice (SC):
- if SC.Choice = True then add service with code SC.service
- if SC.Choice = False then remove service with code SC.service
as parameters for OriginalOffer recalculation. 

Other preferences take from Offer Financial Parameter where OFP.OfferCode = D.OfferCode

## 🔗 Connections (3)

- ← Dependency: [[{MOD}02.830 Recalculate Product Offers for External system]]
- → Association: [[REQ#4 Put only trade-in amount into input of product calculation]]
- → Association: [[REQ#4_ Put discount amount into input of product calculation]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application
- Custom: LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator
- Use Case: Product Calculator for External system - Calculate/Recalculate
