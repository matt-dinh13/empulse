# Service offer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services
- **Diagram ID**: 164632
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class CommodityDataDto["CommodityDataDto"]
    class ServiceOfferDto["ServiceOfferDto"]
    class ServiceOffersDto["ServiceOffersDto"]
    class ClientDto["ClientDto"]
    class MOD_ServiceOfferParametersDto["{MOD}ServiceOfferParametersDto"]
    MOD_ServiceOfferParametersDto ..> ClientDto : unnamed
    ServiceOffersDto ..> ServiceOfferDto : unnamed
    MOD_ServiceOfferParametersDto ..> CommodityDataDto : unnamed
```
