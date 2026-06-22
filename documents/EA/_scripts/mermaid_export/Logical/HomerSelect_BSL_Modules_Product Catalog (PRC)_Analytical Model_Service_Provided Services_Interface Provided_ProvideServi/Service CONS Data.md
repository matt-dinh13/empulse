# Service CONS Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CONS Data
- **Diagram ID**: 103807
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class ServiceCONSDataDto["ServiceCONSDataDto"]
    class Consolidation_Service["Consolidation Service"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    ServiceCONSDataDto ..> Consolidation_Service : unnamed
    ServiceCONSDataDto ..> MoneyType : unnamed
```
