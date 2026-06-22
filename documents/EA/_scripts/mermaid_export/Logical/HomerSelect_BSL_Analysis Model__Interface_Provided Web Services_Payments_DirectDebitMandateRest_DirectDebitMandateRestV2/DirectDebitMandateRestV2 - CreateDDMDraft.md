# DirectDebitMandateRestV2 - CreateDDMDraft

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2
- **Diagram ID**: 158061
- **Elements**: 14
- **Connectors**: 14

```mermaid
classDiagram
    class BaseDirectDebitMandateInfo["BaseDirectDebitMandateInfo"]
    class DocumentDataDto["DocumentDataDto"]
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class DraftBankAccountDataDto["DraftBankAccountDataDto"]
    class RegularPaymentDataDto["RegularPaymentDataDto"]
    class DDMExtendedPropertiesDto["DDMExtendedPropertiesDto"]
    class MoneyDto["MoneyDto"]
    class n_14_433_POST_Draft_Create_direct_debit_mandate_draft["14.433 POST Draft (Create direct debit mandate draft)"]
    class CreateDDMDraftRequest["CreateDDMDraftRequest"]
    class CreateDDMDraftResponse["CreateDDMDraftResponse"]
    class Draft["Draft"]
    class BaseDirectDebitMandateResponse["BaseDirectDebitMandateResponse"]
    class DDM["DDM"]
    class BSL["BSL"]
    BSL o-- DDM : /v2.0/ddm
    DDM o-- Draft : /draft
    Draft ..> CreateDDMDraftRequest : unnamed
    Draft --> CreateDDMDraftResponse : unnamed
    n_14_433_POST_Draft_Create_direct_debit_mandate_draft <|.. Draft : unnamed
    BaseDirectDebitMandateResponse <|-- CreateDDMDraftResponse : unnamed
    BaseDirectDebitMandateInfo <|-- CreateDDMDraftRequest : unnamed
    RegularPaymentDataDto ..> MoneyDto : unnamed
    BaseDirectDebitMandateInfo ..> RegularPaymentDataDto : unnamed
    BaseDirectDebitMandateInfo ..> DraftBankAccountDataDto : unnamed
    BaseDirectDebitMandateInfo ..> MoneyDto : unnamed
    BaseDirectDebitMandateInfo ..> DocumentDataDto : unnamed
    BaseDirectDebitMandateInfo ..> DDMExtendedPropertiesDto : unnamed
    BaseDirectDebitMandateInfo ..> DdmJfsPartnerDto : unnamed
```
