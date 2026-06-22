# LOR-10007 Update /customerOffers

```mermaid
graph TD
    ADD_CustomerOfferPresentedInterestRateTO["{ADD}CustomerOfferPresentedInterestRateTO"]
    CustomerOfferRestTO["CustomerOfferRestTO"]
    LOR_10007_Update_customerOffers["LOR-10007 Update /customerOffers"]
    LOR_9690_Add_Presented_Interest_rate_in_customer_offer["LOR-9690 Add Presented Interest rate in customer offer"]
    ADD_CustomerOfferPresentedInterestRateTO["{ADD}CustomerOfferPresentedInterestRateTO"]
    CustomerOfferRestTO["CustomerOfferRestTO"]
    LOR_10007_Update_customerOffers -->|unnamed| LOR_9690_Add_Presented_Interest_rate_in_customer_offer
    CustomerOfferRestTO -->|unnamed| ADD_CustomerOfferPresentedInterestRateTO
    CustomerOfferRestTO -->|unnamed| ADD_CustomerOfferPresentedInterestRateTO
```
