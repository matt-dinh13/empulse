---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application"
domain: "Requirements Model"
element_id: 1878183
diagrams: 12
connections: 33
tags:
  - class
  - requirements-model
---

# 🔷 Offer Financial Parameter

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application

## 📝 Notes

Financial parameters of the loan (before contract is signed).
These are also used for installment schedule generating.

## 🔗 Connections (31)

- ← Association: [[Product Offer Response]]
- ← Aggregation: [[Offer Financial Parameter Item]]
- → Realisation: [[REQ# Add two trade-in amount and Remaining cash payment columns into BSL_OFFER_FIN_PARAMETERS]]
- → Dependency: [[{MOD}Tariff]]
- ← Aggregation: [[{MOD}Offer Preferences]]
- → Dependency: [[{MOD}Product]]
- → Dependency: [[Financing Scheme (Class 1668708)]]
- → Dependency: [[Product Variant (Class 1879099)]]
- → Association: [[Product Variant (Class 1879099)]]
- → Dependency: [[REQ#6_ Update BSL DB]]
- → Dependency: [[Total Monthly Payment definition]]
- → Dependency: [[{MOD}Net Credit Amount definition]]
- → Dependency: [[{MOD}Financing Scheme Variant]]
- → Association: [[{MOD}Temporary Application]]
- → Dependency: [[Product Transaction Type]]
- → Dependency: [[Provided Credit Amount definition]]
- → Dependency: [[Financing Package (Class 1865395)]]
- → Association: [[{MOD}Tariff]]
- → Dependency: [[Scoring Type (Class 1879571)]]
- ← Aggregation: [[Offer Service (Class 1878189)]]
- → Dependency: [[{MOD}Product Offer Limit]]
- → Dependency: [[{MOD}Product Offer Limit]]
- ← Aggregation: [[Offer2Commodity]]
- → Dependency: [[Credit amount definition]]
- ← Aggregation: [[Qualification Criteria (Class 1878193)]]
- → Association: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[StructuredParameter]]
- ← Aggregation: [[Offer Installment]]
- → Dependency: [[Offer Financial Parameter Type]]
- ← Aggregation: [[Offer Presented Interest Rate]]
- ← Association: [[Scoring (Class 1879590)]]

## 📊 Appears In (12 diagrams)

- Custom: LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application
- Custom: LOR-11252 (BRPH-2797) Trade-In Amount as part of Down payment in BSL Product Calculator
- Custom: LOR-9003 Store generated Installment schedule in IS module
- Logical: CBL-1533 Adjust OFP
- Logical: Contract - Financial parameters
- Logical: Installment Schedule
- Logical: Offer Financial Parameters
- Logical: Offer Service
- Logical: Product Offer Limit
- Logical: Product Offers generated for External system
- Logical: Temporary Application - Financial Parameters
- Logical: Temporary Application - overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Offer Code | string |  |
| Status | Enumeration |  |
| Chosen | Boolean |  |
| Limit ID | string |  |
| Archived | Boolean |  |
| Type | Offer Financial Parameter Type |  |
| Calculation Date | Date |  |
| Valid to | Date |  |
| Initial Transaction Type | Product Transaction Type |  |
| Preferred Due Day | int |  |
| Installment Due Day | int |  |
| First Due Date | Date |  |
| Customer First Due Date | Date |  |
| Shifted Last Due Date | Date |  |
| Billing Day | int |  |
| Interest Rate | Percent |  |
| Price | Financial Amount |  |
| Subvention Discount | Financial Amount |  |
| Cash Payment | Financial Amount |  |
| Net Cash Payment | Financial Amount |  |
| Advance Payments Number | Number |  |
| Terms | Number |  |
| Annuity | Financial Amount |  |
| Total Monthly Payment | Financial Amount |  |
| First Installment Amount | Financial Amount |  |
| Total Payment Per Credit | Financial Amount |  |
| Minimal Installment Amount | Financial Amount |  |
| Credit Amount | Financial Amount |  |
| Net Credit Amount | Financial Amount |  |
| Provided Credit Amount | Financial Amount |  |
| Net Credit Limit | Financial Amount |  |
| Provided Credit Limit | Financial Amount |  |
| Installment Schedule Method | {MOD}Installment Schedule Method Type |  |
| Day Count Method | Day Count Method Type |  |
| Scoring phase | Enumeration |  |
| IS Interest Rate | Percent |  |
| Loan Providing Date | date |  |
| CashAvailableLimitRate | percentage | 100 |
| Product Variant Code | string |  |
| Product | Version Key |  |
| Tariff | Version Key |  |
| Financing Scheme Variant Number | integer |  |
| Financing Scheme | Version Key |  |
| Financing Package | Version Key |  |
| Account transaction code | string |  |
| Initial Transaction Interest Rate | Percent |  |
| Preference | Integer |  |
| Marketing Offer ID | string |  |
| External Offer Code | string |  |
| Installment schedule code | string |  |
| {ADD} Discounted Price | int |  |
| {ADD} Trade In Amount | int |  |
| {ADD} Reamaing Cash Payment | int |  |
