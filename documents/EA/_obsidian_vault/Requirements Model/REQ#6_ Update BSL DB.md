---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application"
domain: "Requirements Model"
element_id: 1877866
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#6: Update BSL DB 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application

## 📝 Notes

- new two columns DISCOUNT_GOODS_PRICE_AMOUNT (Discounted Price) and  DISCOUNT_GOODS_PRICE_CURR in BSL_OFFER_FIN_PARAMETERS
- a new table BSL_OFFER_FIN_PAR_ITEM2DSC
- a new FP item_type enum DISCOUNT

## 🔗 Connections (3)

- ← Dependency: [[{ADD} Offer Discount Item]]
- ← Dependency: [[Financial Parameter Item Type]]
- ← Dependency: [[Offer Financial Parameter]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-11243 (BRPH-2800) Discount Voucher: Apply Discounts in POS Loan Application
