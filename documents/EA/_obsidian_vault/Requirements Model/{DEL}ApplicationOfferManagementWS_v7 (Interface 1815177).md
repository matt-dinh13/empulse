---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8250 Upgrade to version 21 of CustomerOfferWS"
domain: "Requirements Model"
element_id: 1815177
diagrams: 6
connections: 20
tags:
  - interface
  - requirements-model
---

# 🔶 {DEL}ApplicationOfferManagementWS_v7

> **Type**: Interface
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8250 Upgrade to version 21 of CustomerOfferWS

## 📝 Notes

{DEL LOR-8678/}
Service for various operations with offers related to a particular application.

## 🔗 Connections (16)

- → Dependency: [[{DEL}UpdateOfferResponse]]
- → Dependency: [[{DEL}GetOffersResponse]]
- → Dependency: [[{DEL}RefuseOffersResponse]]
- → Realisation: [[01.167 Accept offer externally (UseCase 1827726)]]
- → Dependency: [[{DEL}GetOffersRequest]]
- → Dependency: [[{DEL}GetOffersFault]]
- → Dependency: [[{DEL}UpdateOfferRequest]]
- → Realisation: [[{DEL}01.166 Get application offers (UseCase 1827729)]]
- → Dependency: [[{DEL}AcceptOfferFault]]
- → Dependency: [[{DEL}RefuseOffersRequest]]
- → Realisation: [[{MOD}01.170 Update offer externally]]
- → Dependency: [[{DEL}AcceptOfferResponse]]
- → Realisation: [[01.168 Refuse offers externally]]
- → Dependency: [[{DEL}RefuseOfferFault]]
- → Dependency: [[{DEL}UpdateOfferFault]]
- → Dependency: [[{DEL}AcceptOfferRequest]]

## 📊 Appears In (6 diagrams)

- Custom: LOR-8250 Upgrade to version 21 of CustomerOfferWS
- Logical: ApplicationOfferManagementWS_v7
- Logical: ApplicationOfferManagementWS_v7 - Accept Offer
- Logical: ApplicationOfferManagementWS_v7 - Get Offers
- Logical: ApplicationOfferManagementWS_v7 - Refuse Offers
- Logical: ApplicationOfferManagementWS_v7 - Update Offer
