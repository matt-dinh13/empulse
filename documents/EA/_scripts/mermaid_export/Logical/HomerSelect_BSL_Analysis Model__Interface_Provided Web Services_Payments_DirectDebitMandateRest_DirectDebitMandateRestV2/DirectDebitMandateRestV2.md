# DirectDebitMandateRestV2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2
- **Diagram ID**: 158058
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class DirectDebitMandateRestV2_DirectDebitMandateRestV2_UpdateECSP["DirectDebitMandateRestV2 : DirectDebitMandateRestV2 - UpdateECSProvider"]
    class ECSProvider["ECSProvider"]
    class DirectDebitMandateRestV2_DirectDebitMandateRestV2_UpdateDDMO["DirectDebitMandateRestV2 : DirectDebitMandateRestV2 - UpdateDDMOrDraft"]
    class DirectDebitMandateRestV2_DirectDebitMandateRestV2_ValidateDD["DirectDebitMandateRestV2 : DirectDebitMandateRestV2 - ValidateDDM"]
    class ValidateDDM["ValidateDDM"]
    class DDMOrDraft["DDMOrDraft"]
    class Draft["Draft"]
    class DirectDebitMandateRestV2_DirectDebitMandateRestV2_CreateDDMD["DirectDebitMandateRestV2 : DirectDebitMandateRestV2 - CreateDDMDraft"]
    class DirectDebitMandateRestV2_DirectDebitMandateRestV2_CreateDDM["DirectDebitMandateRestV2 : DirectDebitMandateRestV2 - CreateDDM"]
    class DirectDebitMandateRestV2_DirectDebitMandateRestV2_GetDDM["DirectDebitMandateRestV2 : DirectDebitMandateRestV2 - GetDDM"]
    class DDM["DDM"]
    class BSL["BSL"]
    BSL o-- DDM : /v2.0/ddm
    DirectDebitMandateRestV2_DirectDebitMandateRestV2_GetDDM --> DDM : unnamed
    DirectDebitMandateRestV2_DirectDebitMandateRestV2_CreateDDM --> DDM : unnamed
    DirectDebitMandateRestV2_DirectDebitMandateRestV2_CreateDDMD --> Draft : unnamed
    DDM o-- Draft : /draft
    DDM o-- DDMOrDraft : /{ddmCode}
    DDM o-- ValidateDDM : /validate/{ddmCode}
    DirectDebitMandateRestV2_DirectDebitMandateRestV2_ValidateDD --> ValidateDDM : unnamed
    DirectDebitMandateRestV2_DirectDebitMandateRestV2_UpdateDDMO --> DDMOrDraft : unnamed
    DDMOrDraft o-- ECSProvider : /ecsProvider
    ECSProvider --> DirectDebitMandateRestV2_DirectDebitMandateRestV2_UpdateECSP : unnamed
```
