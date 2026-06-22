# COS - LDM changes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Requirement Model/CBL-22777 SME Project/COS/BSL - LDM changes
- **Diagram ID**: 157352
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class COS_Contract_Service_Role["COS.Contract Service Role"]
    class Contract_Card_Service["Contract Card Service"]
    class Contract_Service_Status["Contract Service Status"]
    class Contract_Insurance_Service["Contract Insurance Service"]
    class Contract_Service_Status_Reason["Contract Service Status Reason"]
    class Service["Service"]
    class Contract_Service["Contract Service"]
    class MOD_Contract["{MOD}Contract"]
    Contract_Service <|-- Contract_Card_Service : unnamed
    Contract_Service ..> Contract_Service_Status_Reason : unnamed
    Contract_Service ..> Contract_Service_Status : unnamed
    Contract_Service <|-- Contract_Insurance_Service : unnamed
    Contract_Service --> Service : unnamed
    MOD_Contract o-- Contract_Service : unnamed
```
