# Offer Store API - Offer Controller (Management of customer offers)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store
- **Diagram ID**: 154150
- **Elements**: 14
- **Connectors**: 14

```mermaid
classDiagram
    class OfferStatus["OfferStatus"]
    class OfferStatus["OfferStatus"]
    class Status["Status"]
    class PartyOffers["PartyOffers"]
    class Offer["Offer"]
    class NewOffers["NewOffers"]
    class NewOffer["NewOffer"]
    class NewOffers["NewOffers"]
    class Response["Response"]
    class ADD_Offers["{ADD}Offers"]
    class OFS["OFS"]
    class PartyOffers["PartyOffers"]
    class PossibleResponse["PossibleResponse"]
    class Offer["Offer"]
    Offer ..> Response : unnamed
    Offer ..> PossibleResponse : unnamed
    PartyOffers ..> Offer : unnamed
    OFS o-- ADD_Offers : /offers
    ADD_Offers --> NewOffers : unnamed
    ADD_Offers ..> NewOffers : unnamed
    NewOffers o-- NewOffer : unnamed
    Offer --> Offer : unnamed
    ADD_Offers o-- Offer : /{id}
    PartyOffers --> PartyOffers : unnamed
    ADD_Offers o-- PartyOffers : /partyId/{partyId}
    Status --> OfferStatus : unnamed
    Offer o-- Status : /status
    Status ..> OfferStatus : unnamed
```
