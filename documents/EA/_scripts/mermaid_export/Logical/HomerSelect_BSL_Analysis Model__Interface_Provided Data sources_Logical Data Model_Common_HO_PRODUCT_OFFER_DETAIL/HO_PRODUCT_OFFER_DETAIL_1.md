# HO_PRODUCT_OFFER_DETAIL

```mermaid
classDiagram
    class InterestRateType["InterestRateType"]
    class ServiceDetail["ServiceDetail"]
    class RELIPOfferDetailType["RELIPOfferDetailType"]
    class productOfferDetail["productOfferDetail"]
    class PresentedInterestRateType["PresentedInterestRateType"]
    class InstallmentType["InstallmentType"]
    class MoneyType["MoneyType"]
    class ProductOfferFeesAndServices["ProductOfferFeesAndServices"]
    class ProductOfferDetailType["ProductOfferDetailType"]
    ServiceDetail --> RELIPOfferDetailType : unnamed
    productOfferDetail --> ProductOfferDetailType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    InstallmentType --> MoneyType : unnamed
    ProductOfferFeesAndServices --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    InstallmentType --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    InstallmentType --> MoneyType : unnamed
    InstallmentType --> MoneyType : unnamed
    InstallmentType --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    InstallmentType --> MoneyType : unnamed
    ProductOfferDetailType --> MoneyType : unnamed
    ProductOfferDetailType --> InstallmentType : unnamed
    PresentedInterestRateType --> InterestRateType : unnamed
    ProductOfferDetailType --> ServiceDetail : unnamed
    ProductOfferDetailType --> ProductOfferFeesAndServices : unnamed
```
