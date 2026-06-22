# COS - LDM changes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Requirement Model/CBL-22777 SME Project/COS/BSL - LDM changes
- **Diagram ID**: 160182
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class Contract_Service_Role["Contract Service Role"]
    class Contract_Card_Service["Contract Card Service"]
    class Contract_Insurance_Service["Contract Insurance Service"]
    class Contract_Service_Status["Contract Service Status"]
    class Service["Service"]
    class Contract_Service_Status_Reason["Contract Service Status Reason"]
    class Contract_Service["Contract Service"]
    class MOD_Contract["{MOD}Contract"]
    Contract_Service <|-- Contract_Card_Service : unnamed
    Contract_Service <|-- Contract_Insurance_Service : unnamed
    Contract_Service ..> Contract_Service_Status_Reason : unnamed
    Contract_Service --> Service : unnamed
    Contract_Service ..> Contract_Service_Status : unnamed
    MOD_Contract o-- Contract_Service : unnamed
```
