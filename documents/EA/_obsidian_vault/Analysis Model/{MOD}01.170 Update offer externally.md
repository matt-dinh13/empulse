---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Access Rights"
domain: "Analysis Model"
element_id: 1827728
diagrams: 6
connections: 12
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.170 Update offer externally

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Access Rights

## 📝 Notes

This use case allows to the user to update additional data collected on the application form on any offer related to the application.

## 🔗 Connections (12)

- ← Realisation: [[{DEL}ApplicationOfferManagementWS_v7 (Interface 1815177)]]
- ← Realisation: [[CustomerOfferWS_21]]
- → Dependency: [[Algorithm_ Find user assigned to contract in 2BoD queue]]
- → Dependency: [[Check that user is assigned to the same salesroom]]
- → Realisation: [[01.170 Update offer externally]]
- → Dependency: [[InsuranceService validation rule]]
- → Realisation: [[01.170 Update offer externally - all applications]]
- → Dependency: [[Update Offer Reward service validation]]
- → Dependency: [[Create validation error message]]
- ← Realisation: [[Services (Class 1878331)]]
- ← Realisation: [[Services (Class 1878292)]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Logical: ApplicationOfferManagementWS_v7 - Update Offer
- Logical: CustomerOfferRestV1 - UpdateOffer
- Logical: CustomerOfferRestV2 - UpdateOffer
- Logical: CustomerOfferWS_v21 - UpdateOffer
- Use Case: Use Case
