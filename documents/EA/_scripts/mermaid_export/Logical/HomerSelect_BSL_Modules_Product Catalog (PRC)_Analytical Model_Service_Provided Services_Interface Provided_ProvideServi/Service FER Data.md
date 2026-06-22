# Service FER Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service FER Data
- **Diagram ID**: 129943
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ServiceFERVariantDto["ServiceFERVariantDto"]
    class Full_Early_Repayment_Service_Variant["Full Early Repayment Service Variant"]
    class MOD_ServiceFERDataDto["{MOD}ServiceFERDataDto"]
    class MOD_Full_Early_Repayment_Service["{MOD}Full Early Repayment Service"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    MOD_ServiceFERDataDto ..> MOD_Full_Early_Repayment_Service : unnamed
    ServiceFERVariantDto ..> Full_Early_Repayment_Service_Variant : unnamed
    MOD_ServiceFERDataDto ..> ServiceFERVariantDto : unnamed
    MOD_Full_Early_Repayment_Service o-- Full_Early_Repayment_Service_Variant : unnamed
```
