---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Access Rights"
domain: "Analysis Model"
element_id: 1827729
diagrams: 4
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}01.166 Get application offers

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Access Rights

## 📝 Notes

{DEL LOR-8678/}
This use case sends to the user all offers generated to the specific application.

## 🔗 Connections (5)

- ← Realisation: [[{DEL}ApplicationOfferManagementWS_v7 (Interface 1815177)]]
- → Dependency: [[Check that user is assigned to the same salesroom]]
- → Realisation: [[{DEL}01.166 Get application offers]]
- → Realisation: [[{DEL}01.166 Get application offers - all applications]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: LOR-8250 Upgrade to version 21 of CustomerOfferWS
- Logical: ApplicationOfferManagementWS_v7 - Get Offers
- Use Case: Use Case
