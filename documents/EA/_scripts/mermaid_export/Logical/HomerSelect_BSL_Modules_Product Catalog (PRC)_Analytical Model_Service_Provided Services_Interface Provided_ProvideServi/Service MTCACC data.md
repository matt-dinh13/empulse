# Service MTCACC data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/{ADD}Service MTCACC Data
- **Diagram ID**: 120877
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class MOD_Maintenance_of_financial_account["{MOD}Maintenance of financial account"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    class ADD_ServiceMTCACCData["{ADD}ServiceMTCACCData"]
    ADD_ServiceMTCACCData ..> MOD_Maintenance_of_financial_account : unnamed
```
