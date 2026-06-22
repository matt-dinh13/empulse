# SNM User Synchronization

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/User
- **Diagram ID**: 71899
- **Elements**: 3
- **Connectors**: 4

```mermaid
classDiagram
    class COMMON_for_SNM_Synchronization_SNM_General_User_Synchronizat["COMMON for SNM Synchronization : SNM General User Synchronization"]
    class MOD_GetUserDataResponse["{MOD}GetUserDataResponse"]
    class User_Type["User Type"]
    MOD_GetUserDataResponse ..> User_Type : unnamed
    MOD_GetUserDataResponse ..> User_Type : unnamed
```
