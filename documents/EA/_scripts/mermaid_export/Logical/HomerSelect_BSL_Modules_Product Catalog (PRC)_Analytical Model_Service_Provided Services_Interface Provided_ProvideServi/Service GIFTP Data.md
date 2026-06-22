# Service GIFTP Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service GIFTP Data
- **Diagram ID**: 90861
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class PaymentDisciplineParametersDto["PaymentDisciplineParametersDto"]
    class Payment_Discipline_Parameters["Payment Discipline Parameters"]
    class ServiceGIFTPDataDto["ServiceGIFTPDataDto"]
    class Gift_Payment_Service["Gift Payment Service "]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    ServiceGIFTPDataDto ..> Gift_Payment_Service : unnamed
    Gift_Payment_Service --> Payment_Discipline_Parameters : unnamed
    ServiceGIFTPDataDto ..> PaymentDisciplineParametersDto : unnamed
    PaymentDisciplineParametersDto ..> MoneyType : unnamed
    PaymentDisciplineParametersDto ..> Payment_Discipline_Parameters : unnamed
```
