# Service CRDPST Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CRDPST Data
- **Diagram ID**: 92405
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class Standard_Payment_Card_Service["Standard Payment Card Service"]
    class ServiceCRDPSTDataDto["ServiceCRDPSTDataDto"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    ServiceCRDPSTDataDto ..> Standard_Payment_Card_Service : unnamed
```
