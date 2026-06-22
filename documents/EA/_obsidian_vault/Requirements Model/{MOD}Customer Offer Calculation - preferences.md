---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application"
domain: "Requirements Model"
element_id: 1878017
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Customer Offer Calculation - preferences

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application

## 📝 Notes

// Definition of preferences for calculator engine based on CalculateProductOfferRequest

D = CalculateCustomerOfferRequest

If D.loanOptionCode = POS_LOAN then Loan option = Consumer loan 
else
- if D.loanOptionCode = CASH_LOAN then Loan option = Cash loan
{ADD PCG-1208_2}- if D.loanOptionCode = SA_INS then Loan option = Standalone Insurance{/ADD}
- else Loan option = Revolving loan without initial transaction
Salesroom = D.salesroomCode
ClientCUID is not specified (D.CUID is used only for identification of Marketing Offer, not for offer calculation).
OfferType = PRIMARY
Salesroom = D.salesroomCode
Currency = D.Currency
{ADD PCG-1208_2}Service Type = D.serviceTypeCode{/ADD}
PreferredLoanAmount = D.requiredLoanAmount
PlusExtraLimit = D.requiredExtraLimit
MaximalCashPayment = D.maximalCashPayment
MaximalMonthlyPayment = D.maximalMonthlyPayment
Financed Commodities(type, price, manufacturer, model, SKU) are taken from D.Commodity.
DocumentTypes provided by client (code) are taken from D.clientDocumentTypes.
As marketing offer on which the calculation is based on use MarketingOffer evaluated in previous step as result of rule CalculateCustomerOfferRequest - Check Marketing Offer).
Service Type Preferences (type, preference) are taken from D.ServiceTypePreference.
{ADD LOR-11243} Discount Amount = D.parameters[type = DISCOUNT].arguments[code = AMOUNT].value {/ADD}
{ADD LOR-11252} Trade-in Amount = D.parameters[type = TRADE_IN].arguments[code = AMOUNT].value {/ADD}

## 🔗 Connections (3)

- ← Dependency: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]
- → Association: [[REQ#4_ Put discount amount into input of product calculation]]
- → Association: [[REQ#4 Put only trade-in amount into input of product calculation]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application
- Custom: LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator
- Use Case: Product Calculator for External system - Calculate/Recalculate
