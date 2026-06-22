# DirectDebitMandateRestV2 - UpdateECSProvider

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2
- **Diagram ID**: 158064
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class UpdateECSProviderForDDMRequest["UpdateECSProviderForDDMRequest"]
    class UpdateECSProviderForDDMResponse["UpdateECSProviderForDDMResponse"]
    class n_14_436_PUT_ECSProvider_Update_ECS_provider_for_direct_debi["14.436 PUT ECSProvider (Update ECS provider for direct debit mandate or direct debit mandate draft)"]
    class ECSProvider["ECSProvider"]
    class BaseDirectDebitMandateResponse["BaseDirectDebitMandateResponse"]
    class DDM["DDM"]
    class BSL["BSL"]
    class DDMOrDraft["DDMOrDraft"]
    DDM o-- DDMOrDraft : /{ddmCode}
    BSL o-- DDM : /v2.0/ddm
    ECSProvider ..> UpdateECSProviderForDDMRequest : unnamed
    ECSProvider --> UpdateECSProviderForDDMResponse : unnamed
    DDMOrDraft o-- ECSProvider : /ecsProvider
    n_14_436_PUT_ECSProvider_Update_ECS_provider_for_direct_debi <|.. ECSProvider : unnamed
    BaseDirectDebitMandateResponse <|-- UpdateECSProviderForDDMResponse : unnamed
```
