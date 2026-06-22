# DirectDebitServiceV5 - Update DDM

```mermaid
classDiagram
    class updateDDMAttributes["updateDDMAttributes"]
    class MOD_14_422_Update_DDM_via_WS["{MOD}14.422 Update DDM via WS"]
    class ValidationResultDto["ValidationResultDto"]
    class UpdateDDMFault["UpdateDDMFault"]
    class UpdateDDMResponse["UpdateDDMResponse"]
    class AccountTypeDto["AccountTypeDto"]
    class DDMBankAccountTypeDto["DDMBankAccountTypeDto"]
    class DDMLimitDataRELDto["DDMLimitDataRELDto"]
    class DDMLimitDataCELDto["DDMLimitDataCELDto"]
    class DDMLimitDataChoice["DDMLimitDataChoice"]
    class DDMLimitDataDto["DDMLimitDataDto"]
    class UpdateDDMRequest["UpdateDDMRequest"]
    class DirectDebitService["DirectDebitService"]
    DirectDebitService --> UpdateDDMRequest : unnamed
    UpdateDDMRequest --> DDMLimitDataDto : unnamed
    DDMLimitDataDto --> DDMLimitDataChoice : unnamed
    DDMLimitDataChoice --> DDMLimitDataCELDto : unnamed
    DDMLimitDataChoice --> DDMLimitDataRELDto : unnamed
    UpdateDDMRequest --> DDMBankAccountTypeDto : unnamed
    DDMBankAccountTypeDto --> AccountTypeDto : unnamed
    DirectDebitService --> UpdateDDMResponse : unnamed
    DirectDebitService --> UpdateDDMFault : unnamed
    UpdateDDMFault --> ValidationResultDto : unnamed
    DirectDebitService --> MOD_14_422_Update_DDM_via_WS : unnamed
    UpdateDDMRequest --> updateDDMAttributes : unnamed
```
