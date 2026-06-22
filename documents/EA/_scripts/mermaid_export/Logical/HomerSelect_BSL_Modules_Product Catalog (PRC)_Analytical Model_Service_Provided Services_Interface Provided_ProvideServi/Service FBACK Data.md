# Service FBACK Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service FBACK Data
- **Diagram ID**: 90859
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class PaymentDisciplineParametersDto["PaymentDisciplineParametersDto"]
    class Payment_Discipline_Parameters["Payment Discipline Parameters"]
    class ServiceFBACKDataDto["ServiceFBACKDataDto"]
    class Fees_back_Service["Fees-back Service "]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    ServiceFBACKDataDto ..> Fees_back_Service : unnamed
    ServiceFBACKDataDto ..> PaymentDisciplineParametersDto : unnamed
    PaymentDisciplineParametersDto ..> MoneyType : unnamed
    PaymentDisciplineParametersDto ..> Payment_Discipline_Parameters : unnamed
    Fees_back_Service o-- Payment_Discipline_Parameters : unnamed
```
