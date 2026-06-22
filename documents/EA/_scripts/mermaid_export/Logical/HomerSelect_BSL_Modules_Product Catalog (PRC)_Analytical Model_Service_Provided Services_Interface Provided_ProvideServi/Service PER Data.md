# Service PER Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service PER Data
- **Diagram ID**: 90863
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class ServicePERDataDto["ServicePERDataDto"]
    class MOD_Partial_Early_Repayment_Service["{MOD}Partial Early Repayment Service"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    ServicePERDataDto ..> MOD_Partial_Early_Repayment_Service : unnamed
    ServicePERDataDto ..> MoneyType : unnamed
```
