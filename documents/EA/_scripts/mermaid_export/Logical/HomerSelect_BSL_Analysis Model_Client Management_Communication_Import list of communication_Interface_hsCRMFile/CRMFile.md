# CRMFile

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Import list of communication/Interface/hsCRMFile
- **Diagram ID**: 131458
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class communicationResultPartType["communicationResultPartType"]
    class addressType["addressType"]
    class phoneType["phoneType"]
    class ChoiceGroup["ChoiceGroup"]
    class MOD_communicationRecordType["{MOD}communicationRecordType"]
    class communicationEventType["communicationEventType"]
    class hsCRMFile["hsCRMFile"]
    hsCRMFile ..> communicationEventType : unnamed
    communicationEventType ..> MOD_communicationRecordType : unnamed
    MOD_communicationRecordType --> ChoiceGroup : unnamed
    ChoiceGroup ..> phoneType : unnamed
    ChoiceGroup ..> addressType : unnamed
    MOD_communicationRecordType ..> communicationResultPartType : unnamed
```
