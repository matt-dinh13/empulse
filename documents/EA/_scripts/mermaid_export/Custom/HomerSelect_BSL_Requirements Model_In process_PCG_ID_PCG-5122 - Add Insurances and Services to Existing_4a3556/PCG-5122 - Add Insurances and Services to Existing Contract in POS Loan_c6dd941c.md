# PCG-5122 - Add Insurances and Services to Existing Contract in POS Loan and Cash Loan

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5122 - Add Insurances and Services to Existing Contract in POS Loan and Cash Loan
- **Diagram ID**: 161520
- **Elements**: 15
- **Connectors**: 9

```mermaid
graph TD
    Validation_Rules_Validation_Rules["Validation Rules : Validation Rules"]
    Service_Type["Service Type"]
    MOD_PCG_5122_Service_offer_validation["{MOD PCG-5122}
Service offer - validation"]
    el_1850676["Note"]
    el_1850675["Note"]
    ServiceOfferDto["ServiceOfferDto"]
    ServiceOffersDto["ServiceOffersDto"]
    ServiceOfferResponse["ServiceOfferResponse"]
    MOD_ServiceOfferParametersDto["{MOD}ServiceOfferParametersDto"]
    Requirement_Add_insurance_and_Services_to_Existing_contract_["Requirement - Add insurance and Services to Existing contract in POS and CASH loans"]
    service_offers["service-offers"]
    diagram_C1073248_FAF6_40ce_9FB9_1B99B0462B8F["$diagram://{C1073248-FAF6-40ce-9FB9-1B99B0462B8F}"]
    Product_catalog_API["Product catalog API"]
    Services_Service_API["Services : Service API"]
    MOD_POST_service_offers["{MOD} POST service-offers"]
    Service_Type -->|unnamed| ServiceOfferDto
    Service_Type -->|unnamed| ServiceOfferDto
    Product_catalog_API -->|/service-offers| service_offers
    service_offers -->|unnamed| MOD_ServiceOfferParametersDto
    ServiceOffersDto -->|unnamed| ServiceOfferDto
    ServiceOfferResponse -->|unnamed| ServiceOffersDto
    service_offers -->|unnamed| ServiceOfferResponse
    service_offers -->|unnamed| MOD_POST_service_offers
    MOD_POST_service_offers -->|unnamed| MOD_PCG_5122_Service_offer_validation
```
