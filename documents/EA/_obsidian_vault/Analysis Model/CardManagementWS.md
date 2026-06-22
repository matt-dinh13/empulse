---
type: Interface
stereotype: "external interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1351119
diagrams: 4
connections: 60
tags:
  - interface
  - analysis-model
---

# 🔶 CardManagementWS

> **Type**: Interface · **Stereotype**: «external interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 🔗 Connections (60)

- → Usage: [[FindCardRequest]]
- → Dependency «use»: [[GetPlasticsOfCardRequest]]
- → Dependency «use»: [[VerifyEmbossNameResponse]]
- → Usage: [[FindCardResponse]]
- → Dependency «use»: [[HoldBackCardRequest]]
- → Dependency «use»: [[UnblockCardRequest]]
- → Dependency «use»: [[SetCardLimitsRequest]]
- → Dependency «use»: [[ActivateCardRequest]]
- → Dependency: [[{ADD}ChangeEcommerceStatusResponse]]
- → Dependency «use»: [[CreatePersonalizedCardRequest]]
- → Dependency «use»: [[LostCardResponse]]
- → Dependency «use»: [[UpdateEmbossNameRequest]]
- → Dependency: [[{ADD}ChangeEcommerceStatusRequest]]
- → Dependency «use»: [[CancelCardResponse]]
- → Dependency «use»: [[CreateEmbossNameRequest]]
- → Usage: [[GetAllowedCardOperationsForUserResponse]]
- → Dependency «use»: [[UnblockCardResponse]]
- → Dependency «use»: [[ActivateCardResponse]]
- → Dependency «use»: [[ConfirmInstantCardRequest]]
- → Dependency «use»: [[GetCardResponse]]
- → Dependency «use»: [[CancelCardRequest]]
- → Dependency «use»: [[ConfirmPersonalizedCardRequest]]
- → Dependency «use»: [[BlockCardResponse]]
- → Dependency «use»: [[CreatePersonalizedCardResponse]]
- → Usage: [[GetCardsRequest]]
- → Dependency «use»: [[ConfirmInstantCardResponse]]
- → Dependency «use»: [[UpdateEmbossNameResponse]]
- → Dependency «use»: [[GetCardRequest]]
- → Dependency «use»: [[ReserveCardResponse]]
- → Dependency «use»: [[AddOperatorNoteResponse]]
- → Dependency «use»: [[AddOperatorNoteRequest]]
- → Dependency «use»: [[ReplaceCardRequest]]
- → Dependency «use»: [[SetCardLimitsResponse]]
- → Dependency «use»: [[ReplaceCardResponse]]
- → Dependency «use»: [[VerifyEmbossNameRequest]]
- → Dependency «use»: [[ConfirmPersonalizedCardResponse]]
- → Dependency «use»: [[StolenCardResponse]]
- → Dependency «use»: [[GetPlasticsOfCardResponse]]
- → Dependency «use»: [[StolenCardRequest]]
- → Dependency «use»: [[ReserveCardRequest]]
- → Dependency: [[12.542 Change e-commerce security level]]
- → Dependency «use»: [[CreateEmbossNameResponse]]
- → Dependency «use»: [[HoldBackCardResponse]]
- → Dependency «use»: [[BlockCardRequest]]
- → Usage: [[GetCardsResponse]]
- → Dependency: [[{ADD}EcommerceStatusesForCardtypeResponse]]
- → Dependency: [[12.542 Change e-commerce security level]]
- → Usage: [[GetAllowedCardOperationsForUserRequest]]
- → Dependency: [[UpdateCardDeliveryTypeResponse]]
- → Dependency: [[{ADD}EcommerceStatusesForCardtypeRequest]]
- → Dependency «use»: [[LostCardRequest]]
- → Dependency: [[UpdateCardDeliveryTypeRequest]]
- ← Dependency: [[12.501 Show card detail (UseCase 1627282)]]
- ← Dependency: [[12.505 Unblock card (UseCase 1849989)]]
- ← Dependency: [[12.534 Card authentication (UseCase 1849986)]]
- ← Dependency: [[12.504 Block card (UseCase 1849982)]]
- ← Dependency: [[12.536 Card activation (UseCase 1849966)]]
- ← Dependency: [[12.503 Replace card (UseCase 1849963)]]
- ← Dependency: [[12.503 Replace card (UseCase 1849963)]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (4 diagrams)

- Logical: Card Management - E-commerce
- Logical: Card management - Interface diagram
- Logical: Card Management - Related functionalities
- Logical: Card Management - Update card delivery address
