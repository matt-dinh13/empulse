# Insurance Commodity domain

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-99 (CBL-31) Commodity Module separation
- **Diagram ID**: 98787
- **Elements**: 8
- **Connectors**: 9

```mermaid
classDiagram
    class Contract_Commodity["Contract Commodity"]
    class MOD_Commodity["{MOD}Commodity"]
    class Contract_Service["Contract Service"]
    class MOD_Contract["{MOD}Contract"]
    class Contract_Insurance_Service["Contract Insurance Service"]
    class Insurance_Commodity["Insurance Commodity"]
    class Insurance_Contract["Insurance Contract"]
    unnamed --> Contract_Service : unnamed
    Insurance_Contract o-- Insurance_Commodity : unnamed
    Insurance_Contract ..> MOD_Contract : unnamed
    Insurance_Commodity ..> MOD_Commodity : unnamed
    Contract_Service <|-- Contract_Insurance_Service : unnamed
    MOD_Contract o-- Contract_Commodity : unnamed
    Contract_Service --> MOD_Commodity : unnamed
    Contract_Insurance_Service ..> Insurance_Contract : unnamed
    MOD_Contract o-- Contract_Service : unnamed
```
