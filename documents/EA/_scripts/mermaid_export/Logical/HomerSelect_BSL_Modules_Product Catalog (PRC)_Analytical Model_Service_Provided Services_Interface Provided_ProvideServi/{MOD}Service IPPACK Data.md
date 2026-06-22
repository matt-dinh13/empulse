# {MOD}Service IPPACK Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service IPPACK Data
- **Diagram ID**: 107688
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class Installment_Plan_Pack_Service_To_Financing_Package["Installment Plan Pack Service To Financing Package"]
    class Installment_Plan_Pack_Service_To_Financing_Package_Purpose["Installment Plan Pack Service To Financing Package Purpose"]
    class MOD_ServiceIPPACKDataDto["{MOD}ServiceIPPACKDataDto"]
    class MOD_Installment_Plan_Pack_Service["{MOD}Installment Plan Pack Service "]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    MOD_ServiceIPPACKDataDto ..> Installment_Plan_Pack_Service_To_Financing_Package_Purpose : unnamed
    MOD_ServiceIPPACKDataDto ..> Installment_Plan_Pack_Service_To_Financing_Package : unnamed
    MOD_Installment_Plan_Pack_Service o-- Installment_Plan_Pack_Service_To_Financing_Package : unnamed
    MOD_Installment_Plan_Pack_Service o-- Installment_Plan_Pack_Service_To_Financing_Package_Purpose : unnamed
```
