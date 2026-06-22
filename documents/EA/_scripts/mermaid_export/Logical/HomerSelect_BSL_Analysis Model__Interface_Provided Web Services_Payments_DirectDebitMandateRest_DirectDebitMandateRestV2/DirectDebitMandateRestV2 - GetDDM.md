# DirectDebitMandateRestV2 - GetDDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV2
- **Diagram ID**: 158060
- **Elements**: 14
- **Connectors**: 14

```mermaid
classDiagram
    class DraftBankAccountDataDto["DraftBankAccountDataDto"]
    class RegularPaymentDataDto["RegularPaymentDataDto"]
    class n_14_431_GET_DDM_Get_direct_debit_mandates_based_on_filters["14.431 GET DDM (Get direct debit mandates based on filters)"]
    class MOD_ProviderData["{MOD}ProviderData"]
    class DDMExtendedPropertiesDto["DDMExtendedPropertiesDto"]
    class MoneyDto["MoneyDto"]
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class DocumentDataDto["DocumentDataDto"]
    class MOD_DirectDebitMandateData["{MOD}DirectDebitMandateData"]
    class GetDDMResponse["GetDDMResponse"]
    class BaseDirectDebitMandateResponse["BaseDirectDebitMandateResponse"]
    class BaseDirectDebitMandateInfo["BaseDirectDebitMandateInfo"]
    class DDM["DDM"]
    class BSL["BSL"]
    BSL o-- DDM : /v2.0/ddm
    n_14_431_GET_DDM_Get_direct_debit_mandates_based_on_filters <|.. DDM : unnamed
    DDM --> GetDDMResponse : unnamed
    BaseDirectDebitMandateInfo ..> RegularPaymentDataDto : unnamed
    BaseDirectDebitMandateInfo ..> DraftBankAccountDataDto : unnamed
    BaseDirectDebitMandateInfo ..> MoneyDto : unnamed
    BaseDirectDebitMandateInfo ..> DocumentDataDto : unnamed
    BaseDirectDebitMandateInfo ..> DDMExtendedPropertiesDto : unnamed
    BaseDirectDebitMandateInfo ..> DdmJfsPartnerDto : unnamed
    BaseDirectDebitMandateResponse <|-- GetDDMResponse : unnamed
    GetDDMResponse ..> MOD_DirectDebitMandateData : unnamed
    BaseDirectDebitMandateInfo <|-- MOD_DirectDebitMandateData : unnamed
    MOD_DirectDebitMandateData ..> MOD_ProviderData : unnamed
    RegularPaymentDataDto ..> MoneyDto : unnamed
```
