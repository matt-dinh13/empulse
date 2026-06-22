# DirectDebitMandateRestV2 - UpdateDDMOrDraft

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2
- **Diagram ID**: 158062
- **Elements**: 14
- **Connectors**: 14

```mermaid
classDiagram
    class BaseDirectDebitMandateInfo["BaseDirectDebitMandateInfo"]
    class n_14_434_PUT_DDMOrDraft_Update_direct_debit_mandate_or_direc["14.434 PUT DDMOrDraft (Update direct debit mandate or direct debit mandate draft)"]
    class DocumentDataDto["DocumentDataDto"]
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class UpdateDDMOrDraftResponse["UpdateDDMOrDraftResponse"]
    class UpdateDDMOrDraftRequest["UpdateDDMOrDraftRequest"]
    class DraftBankAccountDataDto["DraftBankAccountDataDto"]
    class DDMOrDraft["DDMOrDraft"]
    class RegularPaymentDataDto["RegularPaymentDataDto"]
    class DDMExtendedPropertiesDto["DDMExtendedPropertiesDto"]
    class MoneyDto["MoneyDto"]
    class BaseDirectDebitMandateResponse["BaseDirectDebitMandateResponse"]
    class DDM["DDM"]
    class BSL["BSL"]
    BSL o-- DDM : /v2.0/ddm
    RegularPaymentDataDto ..> MoneyDto : unnamed
    DDMOrDraft ..> UpdateDDMOrDraftRequest : unnamed
    DDM o-- DDMOrDraft : /{ddmCode}
    n_14_434_PUT_DDMOrDraft_Update_direct_debit_mandate_or_direc <|.. DDMOrDraft : unnamed
    DDMOrDraft --> UpdateDDMOrDraftResponse : unnamed
    BaseDirectDebitMandateInfo <|-- UpdateDDMOrDraftRequest : unnamed
    BaseDirectDebitMandateResponse <|-- UpdateDDMOrDraftResponse : unnamed
    BaseDirectDebitMandateInfo ..> RegularPaymentDataDto : unnamed
    BaseDirectDebitMandateInfo ..> DraftBankAccountDataDto : unnamed
    BaseDirectDebitMandateInfo ..> MoneyDto : unnamed
    BaseDirectDebitMandateInfo ..> DocumentDataDto : unnamed
    BaseDirectDebitMandateInfo ..> DDMExtendedPropertiesDto : unnamed
    BaseDirectDebitMandateInfo ..> DdmJfsPartnerDto : unnamed
```
