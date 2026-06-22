---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Access Rights"
domain: "Analysis Model"
element_id: 1820903
diagrams: 11
connections: 17
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}02.830 Recalculate Product Offers for External system

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Access Rights

## 📝 Notes

This use case describes how BSL recalculates existing product offer for external systems.
Realized as an API endpoint.

## 🔗 Connections (16)

- ← Realisation: [[{DEL}CustomerOfferWS_20]]
- ← Realisation: [[CustomerOfferWS_21]]
- ← Realisation: [[{DEL}CustomerOfferWS]]
- ← Realisation: [[Save (GUIElement 1820441)]]
- → Dependency: [[Prepare CustomerOffer]]
- → Dependency: [[Customer Offer Recalculation - preferences]]
- → Dependency: [[Preliminary installment schedule (Requirement 1820665)]]
- → Dependency: [[{MOD}RecalculateCustomerOfferRequest - validation rules]]
- → Dependency: [[{MOD}Offer recalculation]]
- → Dependency: [[Generate offer installment]]
- → Realisation: [[02.830 Recalculate Product Offers for External system]]
- → Dependency: [[Save Product Offer Response]]
- → Dependency: [[{MOD}Save Product Offer Request]]
- ← Realisation: [[Recalculate (Class 1878333)]]
- ← Realisation: [[Recalculate (Class 1878293)]]
- ← Association: [[External system (Actor 1880866)]]

## 📊 Appears In (11 diagrams)

- Custom: Access Rights
- Custom: Change disbursement - product AF
- Custom: LOR-9007 Create installment schedule when offer chosen for application
- Custom: LOR-9089 - Implement recalculate method
- Custom: Product Offer Calculation - Use Case references
- Logical: CustomerOfferRestV1 - RecalculateCustomerOffer
- Logical: CustomerOfferRestV2 - RecalculateCustomerOffer
- Logical: CustomerOfferWS - RecalculateCustomerOffer
- Logical: CustomerOfferWS_v20 - RecalculateCustomerOffer
- Logical: CustomerOfferWS_v21 - RecalculateCustomerOffer
- Use Case: Product Calculator for External system - Calculate/Recalculate
