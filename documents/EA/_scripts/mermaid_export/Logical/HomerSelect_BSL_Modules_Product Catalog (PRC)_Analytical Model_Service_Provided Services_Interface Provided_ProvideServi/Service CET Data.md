# Service CET Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CET Data
- **Diagram ID**: 113649
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class MOD_ServiceCETDataDto["{MOD}ServiceCETDataDto"]
    class MOD_Contract_Early_Termination_Service["{MOD}Contract Early Termination Service"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    MOD_ServiceCETDataDto ..> MOD_Contract_Early_Termination_Service : unnamed
```
