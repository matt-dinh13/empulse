# CustomerOfferRestV2 - GetCustomerOffer

```mermaid
classDiagram
    class ADD_SubventionTO["{ADD}SubventionTO"]
    class ADD_CustomerOfferPresentedInterestRateTO["{ADD}CustomerOfferPresentedInterestRateTO"]
    class ADD_InsuranceCustomDataTO["{ADD}InsuranceCustomDataTO"]
    class ArgumentTO["ArgumentTO"]
    class StructuredParametersTO["StructuredParametersTO "]
    class BSL["BSL"]
    class ServiceParameterTO["ServiceParameterTO"]
    class TariffTO["TariffTO"]
    class ServiceTO["ServiceTO"]
    class ProductTO["ProductTO"]
    class FeeTO["FeeTO"]
    class FinancingSchemeTO["FinancingSchemeTO"]
    class FinancingPackageTO["FinancingPackageTO"]
    class CommodityTO["CommodityTO"]
    class CustomerOfferRestTO["CustomerOfferRestTO"]
    class CustomerOfferRestTO["CustomerOfferRestTO"]
    class n_02_835_Provide_Product_Offers_for_External_system["02.835 Provide Product Offers for External system"]
    class CustomerOffers["CustomerOffers"]
    CustomerOfferRestTO --> ProductTO : unnamed
    ServiceTO --> ServiceParameterTO : unnamed
    ServiceTO --> TariffTO : unnamed
    ServiceTO --> ADD_InsuranceCustomDataTO : unnamed
    ProductTO --> TariffTO : unnamed
    CustomerOfferRestTO --> StructuredParametersTO : unnamed
    CustomerOfferRestTO --> FinancingSchemeTO : unnamed
    StructuredParametersTO --> ArgumentTO : unnamed
    CustomerOfferRestTO --> FinancingPackageTO : unnamed
    CustomerOffers --> BSL : /customerOffers
    CustomerOfferRestTO --> ADD_SubventionTO : unnamed
    CustomerOfferRestTO --> FeeTO : unnamed
    CustomerOfferRestTO --> ADD_CustomerOfferPresentedInterestRateTO : unnamed
    CustomerOfferRestTO --> CommodityTO : unnamed
    CustomerOfferRestTO --> CustomerOfferRestTO : unnamed
    CustomerOffers --> n_02_835_Provide_Product_Offers_for_External_system : unnamed
    CustomerOffers --> CustomerOfferRestTO : unnamed
    CustomerOfferRestTO --> ServiceTO : unnamed
```
