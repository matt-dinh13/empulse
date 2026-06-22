---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9418 ApplicationManagement REST: accept & refuse offer"
domain: "Requirements Model"
element_id: 1764245
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9418 ApplicationManagement REST: accept & refuse offer

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9418 ApplicationManagement REST: accept & refuse offer

## 📝 Notes

Implement

acceptOffer
POST /applications/{applicationCode}/offers/accept/ {offerCode}
it will be necessary to introduce check that provided application code and offer code match
refuseOffers methods
POST /applications/{applictionCode}/offers/refuse

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9418 ApplicationManagement REST: accept & refuse offer
