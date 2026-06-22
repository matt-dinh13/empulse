# Find Supplement definition service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Supplement definition services/Getting Supplement definition service
- **Diagram ID**: 161697
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class n_13_500_Find_Supplement_setting_service_SUP["13.500 Find Supplement setting service (SUP)"]
    class EvaluationRequestDefinition["EvaluationRequestDefinition"]
    class Supplement_Type["Supplement Type"]
    class Contract_Supplement_Status_Type["Contract Supplement Status Type"]
    class SupplementDocumentType["SupplementDocumentType"]
    class SupplementProcessSetting["SupplementProcessSetting"]
    class Supplement["Supplement"]
    class FindSupplementDetail["FindSupplementDetail"]
    class Supplements["Supplements"]
    Supplements --> FindSupplementDetail : unnamed
    Supplements --> Supplement : unnamed
    Supplement --> SupplementProcessSetting : unnamed
    Supplement --> SupplementDocumentType : unnamed
    SupplementProcessSetting --> Contract_Supplement_Status_Type : unnamed
    Supplement --> Supplement_Type : unnamed
    Supplement --> EvaluationRequestDefinition : unnamed
    Supplements --> n_13_500_Find_Supplement_setting_service_SUP : unnamed
```
