# Contract Insurance Services - GET: Insurance Service Offers v3

```mermaid
classDiagram
    class n_08_342_Get_contract_insurance_offers_service["08.342 Get contract insurance offers service"]
    class InsuranceService_v3["InsuranceService_v3"]
    class InsuranceServiceOffers_v3["InsuranceServiceOffers_v3"]
    class GetInsuranceServiceOffers["GetInsuranceServiceOffers"]
    class Contract_Insurance_Services["Contract Insurance Services"]
    Contract_Insurance_Services --> InsuranceServiceOffers_v3 : unnamed
    Contract_Insurance_Services --> GetInsuranceServiceOffers : unnamed
    Contract_Insurance_Services --> n_08_342_Get_contract_insurance_offers_service : unnamed
    InsuranceServiceOffers_v3 --> InsuranceService_v3 : unnamed
```
