# DirectDebitServiceV5 - Create DDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5
- **Diagram ID**: 147079
- **Elements**: 14
- **Connectors**: 13

```mermaid
classDiagram
    class createDDMAttributes["createDDMAttributes"]
    class MOD_14_421_Create_DDM_via_WS["{MOD}14.421 Create DDM via WS"]
    class DDMResultTypeDto["DDMResultTypeDto"]
    class CreateDDMFault["CreateDDMFault"]
    class CreateDDMResponse["CreateDDMResponse"]
    class DDMLimitDataRELDto["DDMLimitDataRELDto"]
    class DDMLimitDataCELDto["DDMLimitDataCELDto"]
    class DDMLimitDataChoice["DDMLimitDataChoice"]
    class DDMLimitDataDto["DDMLimitDataDto"]
    class AccountTypeDto["AccountTypeDto"]
    class DDMBankAccountTypeDto["DDMBankAccountTypeDto"]
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class CreateDDMRequest["CreateDDMRequest"]
    class DirectDebitService["DirectDebitService"]
    DirectDebitService ..> CreateDDMRequest : unnamed
    CreateDDMRequest ..> DdmJfsPartnerDto : unnamed
    CreateDDMRequest ..> DDMBankAccountTypeDto : unnamed
    DDMBankAccountTypeDto ..> AccountTypeDto : unnamed
    CreateDDMRequest ..> DDMLimitDataDto : unnamed
    DDMLimitDataDto ..> DDMLimitDataChoice : unnamed
    DDMLimitDataChoice ..> DDMLimitDataCELDto : unnamed
    DDMLimitDataChoice ..> DDMLimitDataRELDto : unnamed
    DirectDebitService ..> CreateDDMResponse : unnamed
    DirectDebitService ..> CreateDDMFault : unnamed
    CreateDDMFault ..> DDMResultTypeDto : unnamed
    DirectDebitService ..> MOD_14_421_Create_DDM_via_WS : unnamed
    CreateDDMRequest ..> createDDMAttributes : unnamed
```
