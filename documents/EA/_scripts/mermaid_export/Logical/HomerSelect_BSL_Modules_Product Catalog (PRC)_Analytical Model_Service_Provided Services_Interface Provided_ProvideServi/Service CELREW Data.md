# Service CELREW Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service CELREW Data
- **Diagram ID**: 103870
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class Payment_Discipline_Parameters["Payment Discipline Parameters"]
    class PaymentDisciplineParametersDto["PaymentDisciplineParametersDto"]
    class MOD_ServiceCELREWDataDto["{MOD}ServiceCELREWDataDto"]
    class MOD_CEL_Rewards_Service["{MOD}CEL Rewards Service"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    MOD_ServiceCELREWDataDto ..> MOD_CEL_Rewards_Service : unnamed
    MOD_ServiceCELREWDataDto ..> PaymentDisciplineParametersDto : unnamed
    PaymentDisciplineParametersDto ..> Payment_Discipline_Parameters : unnamed
    PaymentDisciplineParametersDto ..> MoneyType : unnamed
    MOD_CEL_Rewards_Service o-- Payment_Discipline_Parameters : unnamed
```
