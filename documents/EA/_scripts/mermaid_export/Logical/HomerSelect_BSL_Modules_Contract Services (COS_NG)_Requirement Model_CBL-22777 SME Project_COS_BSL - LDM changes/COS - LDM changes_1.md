# COS - LDM changes

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
    Contract_Card_Service --> Contract_Service : unnamed
    Contract_Insurance_Service --> Contract_Service : unnamed
    Contract_Service --> Contract_Service_Status_Reason : unnamed
    Contract_Service --> Service : unnamed
    Contract_Service --> Contract_Service_Status : unnamed
    Contract_Service --> MOD_Contract : unnamed
```
