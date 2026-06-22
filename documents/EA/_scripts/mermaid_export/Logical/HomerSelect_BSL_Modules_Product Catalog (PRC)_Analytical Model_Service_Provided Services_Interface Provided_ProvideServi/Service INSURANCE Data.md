# Service INSURANCE Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service INSURANCE Data
- **Diagram ID**: 126043
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class Insurance_Service["Insurance Service"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    class MOD_ServiceINSURANCEDataDto["{MOD}ServiceINSURANCEDataDto"]
    MOD_ServiceINSURANCEDataDto ..> Insurance_Service : unnamed
    MOD_ServiceINSURANCEDataDto ..> MoneyType : unnamed
```
