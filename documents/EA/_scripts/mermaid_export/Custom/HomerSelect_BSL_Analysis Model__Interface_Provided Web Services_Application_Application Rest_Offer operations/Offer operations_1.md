# Offer operations

```mermaid
graph TD
    MOD_Applications["{MOD}Applications"]
    n_01_311_Update_offer_to_application_and_evaluate["01.311 Update offer to application and evaluate"]
    UpdateOffer["UpdateOffer"]
    n_01_168_Refuse_offers_externally["01.168 Refuse offers externally"]
    n_01_167_Accept_offer_externally["01.167 Accept offer externally"]
    RefuseOffer["RefuseOffer"]
    AcceptOffer["AcceptOffer"]
    Offer["Offer"]
    Application["Application"]
    BSL["BSL"]
    RefuseOffer -->|/refuse| Offer
    UpdateOffer -->|/assign| Offer
    AcceptOffer -->|/accept| Offer
    AcceptOffer -->|unnamed| n_01_167_Accept_offer_externally
    RefuseOffer -->|unnamed| n_01_168_Refuse_offers_externally
    UpdateOffer -->|unnamed| n_01_311_Update_offer_to_application_and_evaluate
    Application -->|/{code}| MOD_Applications
    MOD_Applications -->|/v1/applications| BSL
    Offer -->|/offer| Application
```
