# ProvideServiceDataWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS
- **Diagram ID**: 162785
- **Elements**: 10
- **Connectors**: 6

```mermaid
classDiagram
    class Use_case_ProvideServiceDataWS["Use case :ProvideServiceDataWS"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    class Service_Versions_Service_Versions["Service Versions : Service Versions"]
    class DEL_08_205_Provide_List_of_Service_Versions["{DEL}08.205 Provide List of Service Versions"]
    class DEL_08_200_Provide_Service_Data["{DEL}08.200 Provide Service Data"]
    class GetServiceVersionsResponse["GetServiceVersionsResponse"]
    class GetServiceVersionsRequest["GetServiceVersionsRequest"]
    class GetServiceDataRequest["GetServiceDataRequest"]
    class GetServiceDataResponse["GetServiceDataResponse"]
    class DEL_ProvideServiceDataWS["{DEL}ProvideServiceDataWS"]
    DEL_ProvideServiceDataWS ..> GetServiceDataResponse : unnamed
    DEL_ProvideServiceDataWS ..> GetServiceDataRequest : unnamed
    DEL_ProvideServiceDataWS ..> GetServiceVersionsRequest : unnamed
    DEL_ProvideServiceDataWS ..> GetServiceVersionsResponse : unnamed
    DEL_08_200_Provide_Service_Data <|.. DEL_ProvideServiceDataWS : unnamed
    DEL_08_205_Provide_List_of_Service_Versions <|.. DEL_ProvideServiceDataWS : unnamed
```
