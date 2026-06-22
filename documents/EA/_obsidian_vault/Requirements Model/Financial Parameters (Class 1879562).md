---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8758 (CLM-2846) Display offer type code on Contract Detail"
domain: "Requirements Model"
element_id: 1879562
diagrams: 5
connections: 13
tags:
  - class
  - requirements-model
---

# 🔷 Financial Parameters

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8758 (CLM-2846) Display offer type code on Contract Detail

## 📝 Notes

Financial parameters of the loan.
First these are fixed on contract signature event.
These parameters are used for installment schedule generating.

## 🔗 Connections (11)

- ← Dependency: [[Billing day mapping]]
- ← Dependency «use»: [[Installment (Class 1857187)]]
- ← Association: [[Credit Limit Change Contract Supplement]]
- ← Aggregation: [[Financial Parameter Item]]
- → Association: [[Product Type (Enumeration 1879104)]]
- → Dependency: [[{MOD}Product]]
- → Association: [[Product Variant (Class 1879099)]]
- → Dependency: [[{MOD}Tariff]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[Contract Presented Interest Rate]]
- → Association: [[{MOD}Tariff]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-8758 (CLM-2846) Display offer type code on Contract Detail
- Logical: Contract - Financial parameters
- Logical: Contract - Services
- Logical: Credit limit change offer
- Logical: Installment Schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Expected End Date | Date |  |
| Installment Schedule Method | {MOD}Installment Schedule Method Type |  |
| Day Count Method | Day Count Method Type |  |
| Advance Payments Number | Number |  |
| Annuity | Financial Amount |  |
| Archived | boolean |  |
| Billing Day | int |  |
| Cash Payment | Financial Amount |  |
| Credit Amount | Financial Amount |  |
| Customer First Due Date | Date |  |
| First due date | Date |  |
| Initial Transaction Type | Product Transaction Type |  |
| Installment Due Day | int |  |
| Interest Rate | Percent |  |
| Minimal Installment Amount | Financial Amount |  |
| Net Cash Payment | Financial Amount |  |
| Net Credit Amount | Financial Amount |  |
| Net Credit Limit | Financial Amount |  |
| Offer Calculation Date | Date |  |
| Price | Financial Amount |  |
| Provided Credit Amount | Financial Amount |  |
| Provided Credit Limit | Financial Amount |  |
| Shifted Last Due Date | Date |  |
| Terms | Number |  |
| Total Monthly Payment | Financial Amount |  |
| Total Payment Per Credit | Financial Amount |  |
| IS Interest Rate | Percent |  |
| Loan Providing Date | date |  |
| Financing Scheme Variant Number | int |  |
| Financing Scheme | Version Key |  |
| Financing Package | Version Key |  |
| Account Transaction Code | string |  |
| Product | Version Key |  |
| Tariff | Version Key |  |
| {ADD}Loan Purpose | string |  |
| {ADD}Discount Goods Price Amount | Number |  |
| {ADD}Discount Goods Price Currency | String |  |
| {ADD}Remaining Cash Payment Amount | Number |  |
| {ADD}Remaining Cash Payment Curr | String |  |
| {ADD}Trade In Amount | Number |  |
| {ADD}Trade In Amount Curr | String |  |
| {ADD}Marketing Offer ID | string |  |
