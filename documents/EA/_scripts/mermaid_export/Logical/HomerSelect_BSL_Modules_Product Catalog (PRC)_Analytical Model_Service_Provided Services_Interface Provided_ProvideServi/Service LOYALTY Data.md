# Service LOYALTY Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service LOYALTY Data
- **Diagram ID**: 90845
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class Loyalty_Service["Loyalty Service"]
    class ServiceLOYALTYDataDto["ServiceLOYALTYDataDto"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    ServiceLOYALTYDataDto ..> Loyalty_Service : unnamed
```
