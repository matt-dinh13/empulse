# DirectDebitService.createDDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/createDDM
- **Diagram ID**: 139606
- **Elements**: 16
- **Connectors**: 15

```mermaid
classDiagram
    class DDMLimitDataChoice["DDMLimitDataChoice"]
    class ContractStatusType["ContractStatusType"]
    class DDMLimitDataRELDto["DDMLimitDataRELDto"]
    class DDMLimitDataCELDto["DDMLimitDataCELDto"]
    class DDMLimitDataDto["DDMLimitDataDto"]
    class DDMBankAccountTypeDto["DDMBankAccountTypeDto"]
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class DDMResultTypeDto["DDMResultTypeDto"]
    class AccountTypeDto["AccountTypeDto"]
    class ValidationResultDto["ValidationResultDto"]
    class MOD_14_421_Create_DDM_via_WS["{MOD}14.421 Create DDM via WS"]
    class CreateDDMFault["CreateDDMFault"]
    class CreateDDMResponse["CreateDDMResponse"]
    class ContractDDMBaseDto["ContractDDMBaseDto"]
    class CreateDDMRequest["CreateDDMRequest"]
    class DirectDebitService["DirectDebitService"]
    CreateDDMRequest ..> DDMLimitDataDto : unnamed
    CreateDDMRequest ..> DDMBankAccountTypeDto : unnamed
    CreateDDMFault ..> DDMResultTypeDto : unnamed
    CreateDDMFault ..> ValidationResultDto : unnamed
    DirectDebitService ..> MOD_14_421_Create_DDM_via_WS : unnamed
    CreateDDMRequest ..> ContractDDMBaseDto : unnamed
    CreateDDMRequest ..> DdmJfsPartnerDto : unnamed
    DirectDebitService ..> CreateDDMRequest : unnamed
    DirectDebitService ..> CreateDDMFault : unnamed
    DirectDebitService ..> CreateDDMResponse : unnamed
    DDMLimitDataChoice ..> DDMLimitDataCELDto : unnamed
    DDMLimitDataChoice ..> DDMLimitDataRELDto : unnamed
    ContractDDMBaseDto ..> ContractStatusType : unnamed
    DDMLimitDataDto ..> DDMLimitDataChoice : unnamed
    DDMBankAccountTypeDto ..> AccountTypeDto : unnamed
```
