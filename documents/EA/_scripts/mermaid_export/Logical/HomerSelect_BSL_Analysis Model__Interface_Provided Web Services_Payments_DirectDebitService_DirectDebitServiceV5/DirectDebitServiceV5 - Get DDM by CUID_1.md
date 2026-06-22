# DirectDebitServiceV5 - Get DDM by CUID

```mermaid
classDiagram
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class ContractDDMBaseDto["ContractDDMBaseDto"]
    class BankAccountInfoDto["BankAccountInfoDto"]
    class GetDDMInfoResultTypeDto["GetDDMInfoResultTypeDto"]
    class DDMStatusTypeDto["DDMStatusTypeDto"]
    class DDMConfirmStatusTypeDto["DDMConfirmStatusTypeDto"]
    class AccountTypeDto["AccountTypeDto"]
    class DDMInfoBaseDto["DDMInfoBaseDto"]
    class GetDDMByCUIDResponse["GetDDMByCUIDResponse"]
    class DDMFilterTypeDto["DDMFilterTypeDto"]
    class n_01_583_Get_DDM_by_CUID["01.583 - Get DDM by CUID"]
    class GetDDMByCUIDRequest["GetDDMByCUIDRequest"]
    class DirectDebitService["DirectDebitService"]
    DirectDebitService --> GetDDMByCUIDRequest : unnamed
    DirectDebitService --> n_01_583_Get_DDM_by_CUID : unnamed
    GetDDMByCUIDRequest --> DDMFilterTypeDto : unnamed
    DirectDebitService --> GetDDMByCUIDResponse : unnamed
    GetDDMByCUIDResponse --> DDMInfoBaseDto : unnamed
    BankAccountInfoDto --> AccountTypeDto : unnamed
    DDMInfoBaseDto --> DDMConfirmStatusTypeDto : unnamed
    DDMInfoBaseDto --> DDMStatusTypeDto : unnamed
    GetDDMByCUIDResponse --> GetDDMInfoResultTypeDto : unnamed
    DDMInfoBaseDto --> BankAccountInfoDto : unnamed
    DDMInfoBaseDto --> ContractDDMBaseDto : unnamed
    DDMInfoBaseDto --> DdmJfsPartnerDto : unnamed
```
