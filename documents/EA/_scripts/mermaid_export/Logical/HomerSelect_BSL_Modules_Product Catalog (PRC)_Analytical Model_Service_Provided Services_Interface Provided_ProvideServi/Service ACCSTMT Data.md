# Service ACCSTMT Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/{ADD}Service ACCSTMT Data
- **Diagram ID**: 116300
- **Elements**: 3
- **Connectors**: 1

```mermaid
classDiagram
    class Account_statement["Account statement"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    class ADD_ServiceACCSTMTData["{ADD}ServiceACCSTMTData "]
    ADD_ServiceACCSTMTData ..> Account_statement : unnamed
```
