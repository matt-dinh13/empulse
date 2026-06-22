# ApplicationOfferManagementWS_v7 - Update Offer

```mermaid
classDiagram
    class ValidationError["ValidationError"]
    class Service["Service"]
    class External_Reference["External Reference"]
    class External_Reference["External Reference"]
    class External_Reference["External Reference"]
    class External_Reference["External Reference"]
    class External_Reference["External Reference"]
    class DEL_RewardService["{DEL}RewardService"]
    class DEL_UpdateOfferResultCode["{DEL}UpdateOfferResultCode"]
    class MOD_01_170_Update_offer_externally["{MOD}01.170 Update offer externally"]
    class DEL_ApplicationOfferManagementWS_v7["{DEL}ApplicationOfferManagementWS_v7"]
    class DEL_UpdateOfferFault["{DEL}UpdateOfferFault"]
    class DEL_UpdateOfferResponse["{DEL}UpdateOfferResponse"]
    class DEL_UpdateOfferRequest["{DEL}UpdateOfferRequest"]
    DEL_ApplicationOfferManagementWS_v7 --> DEL_UpdateOfferRequest : unnamed
    DEL_ApplicationOfferManagementWS_v7 --> DEL_UpdateOfferResponse : unnamed
    DEL_ApplicationOfferManagementWS_v7 --> DEL_UpdateOfferFault : unnamed
    DEL_ApplicationOfferManagementWS_v7 --> MOD_01_170_Update_offer_externally : unnamed
    DEL_UpdateOfferFault --> DEL_UpdateOfferResultCode : unnamed
    DEL_UpdateOfferRequest --> Service : unnamed
    External_Reference --> Service : External Reference
    External_Reference --> Service : External Reference
    DEL_RewardService --> Service : unnamed
    External_Reference --> External_Reference : External Reference
    External_Reference --> External_Reference : External Reference
    ValidationError --> External_Reference : External Reference
    DEL_UpdateOfferFault --> ValidationError : unnamed
```
