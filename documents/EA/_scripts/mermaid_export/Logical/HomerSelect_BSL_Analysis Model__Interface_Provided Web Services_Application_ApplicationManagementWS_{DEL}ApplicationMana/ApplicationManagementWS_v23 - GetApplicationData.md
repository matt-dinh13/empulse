# ApplicationManagementWS_v23 - GetApplicationData

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23
- **Diagram ID**: 153281
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class Types_Get_Application_client_data["Types : Get Application - client data"]
    class Types_Get_Application_data["Types :Get Application - data"]
    class n_01_040_Get_application_data["01.040 Get application data"]
    class MOD_ApplicationDetail["{MOD}ApplicationDetail"]
    class GetApplicationDataResultCode["GetApplicationDataResultCode"]
    class MOD_ApplicationDataSet["{MOD}ApplicationDataSet"]
    class GetApplicationDataResponse["GetApplicationDataResponse"]
    class GetApplicationDataRequest["GetApplicationDataRequest"]
    class GetApplicationDataFault["GetApplicationDataFault"]
    class ApplicationManagementWS_v23["ApplicationManagementWS_v23"]
    ApplicationManagementWS_v23 ..> GetApplicationDataFault : unnamed
    ApplicationManagementWS_v23 ..> GetApplicationDataRequest : unnamed
    ApplicationManagementWS_v23 ..> GetApplicationDataResponse : unnamed
    GetApplicationDataRequest ..> MOD_ApplicationDataSet : unnamed
    GetApplicationDataFault ..> GetApplicationDataResultCode : unnamed
    GetApplicationDataResponse ..> MOD_ApplicationDetail : unnamed
    n_01_040_Get_application_data <|.. ApplicationManagementWS_v23 : unnamed
    MOD_ApplicationDetail --> Types_Get_Application_data : unnamed
    MOD_ApplicationDetail --> Types_Get_Application_client_data : unnamed
```
