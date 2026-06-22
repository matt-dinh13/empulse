# ProvideServiceDataWS

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Use case
- **Diagram ID**: 162661
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph LR
    External_Component[/"External Component"/]
    Synchronization_of_Service_ProvideServiceDataWS["Synchronization of Service : ProvideServiceDataWS"]
    DEL_08_205_Provide_List_of_Service_Versions(("{DEL}08.205 Provide List of Service Versions"))
    DEL_08_200_Provide_Service_Data(("{DEL}08.200 Provide Service Data"))
    DEL_08_200_Provide_Service_Data -->|unnamed| Synchronization_of_Service_ProvideServiceDataWS
    DEL_08_205_Provide_List_of_Service_Versions -->|unnamed| Synchronization_of_Service_ProvideServiceDataWS
    External_Component --- DEL_08_205_Provide_List_of_Service_Versions
    External_Component --- DEL_08_200_Provide_Service_Data
```
