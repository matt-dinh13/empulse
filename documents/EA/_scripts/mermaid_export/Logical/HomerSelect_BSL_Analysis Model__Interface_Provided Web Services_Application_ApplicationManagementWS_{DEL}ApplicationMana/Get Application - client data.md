# Get Application - client data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types
- **Diagram ID**: 153294
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class Document["Document"]
    class ApplicationManagementWS_v22_ApplicationManagementWS_v23_GetA["ApplicationManagementWS_v22 :ApplicationManagementWS_v23 - GetApplicationData"]
    class MOD_ClientData["{MOD}ClientData"]
    class MOD_ApplicationDetail["{MOD}ApplicationDetail"]
    MOD_ApplicationDetail ..> MOD_ClientData : unnamed
    MOD_ApplicationDetail --> ApplicationManagementWS_v22_ApplicationManagementWS_v23_GetA : unnamed
    MOD_ApplicationDetail ..> Document : unnamed
    MOD_ClientData ..> Document : unnamed
```
