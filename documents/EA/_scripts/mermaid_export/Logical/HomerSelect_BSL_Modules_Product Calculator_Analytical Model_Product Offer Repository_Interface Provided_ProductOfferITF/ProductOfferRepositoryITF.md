# ProductOfferRepositoryITF

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Interface Provided/ProductOfferITF
- **Diagram ID**: 92881
- **Elements**: 7
- **Connectors**: 3

```mermaid
classDiagram
    class Choose_Offer_Result["Choose Offer Result"]
    class Get_Offer_Result["Get Offer Result"]
    class Get_Offer_Request["Get Offer Request"]
    class ProductOfferITF_GetOfferResult["ProductOfferITF - GetOfferResult"]
    class ProductOfferITF_ChooseOfferResult["ProductOfferITF - ChooseOfferResult"]
    class ProductOfferITF_GetOfferRequest["ProductOfferITF - GetOfferRequest"]
    class ProductOfferRepositoryITF["ProductOfferRepositoryITF"]
    ProductOfferRepositoryITF ..> ProductOfferITF_GetOfferRequest : External Reference
    ProductOfferRepositoryITF ..> ProductOfferITF_ChooseOfferResult : External Reference
    ProductOfferRepositoryITF ..> ProductOfferITF_GetOfferResult : External Reference
```
