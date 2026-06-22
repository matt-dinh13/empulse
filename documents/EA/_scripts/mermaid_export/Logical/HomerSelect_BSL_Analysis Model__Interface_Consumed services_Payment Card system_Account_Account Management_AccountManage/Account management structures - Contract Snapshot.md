# Account management structures - Contract Snapshot

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures
- **Diagram ID**: 158213
- **Elements**: 14
- **Connectors**: 12

```mermaid
classDiagram
    class CurrentContractParametersDto["CurrentContractParametersDto"]
    class Account_Types_Account_management_structures_Service_Paramete["Account Types :Account management structures  - Service Parameters"]
    class ContractServiceCategoryDto["ContractServiceCategoryDto"]
    class ContractServiceTypeDto["ContractServiceTypeDto"]
    class ContractServiceDto["ContractServiceDto"]
    class ContractSnapshotDto["ContractSnapshotDto"]
    class InstalmentBaseTypeDto["InstalmentBaseTypeDto"]
    class AccountTypeDto["AccountTypeDto"]
    class PersonDto["PersonDto"]
    class ServiceParametersDto["ServiceParametersDto"]
    class ContractServiceBaseDto["ContractServiceBaseDto"]
    class RevolvingContractParametersDto["RevolvingContractParametersDto"]
    class ContractParametersDto["ContractParametersDto"]
    class MOD_ContractSnapshotBaseDto["{MOD}ContractSnapshotBaseDto"]
    MOD_ContractSnapshotBaseDto ..> AccountTypeDto : unnamed
    MOD_ContractSnapshotBaseDto ..> PersonDto : unnamed
    ContractParametersDto <|-- RevolvingContractParametersDto : unnamed
    RevolvingContractParametersDto ..> InstalmentBaseTypeDto : unnamed
    ContractSnapshotDto ..> ContractParametersDto : unnamed
    ContractSnapshotDto ..> ContractServiceDto : unnamed
    MOD_ContractSnapshotBaseDto <|-- ContractSnapshotDto : unnamed
    ContractServiceBaseDto <|-- ContractServiceDto : unnamed
    ContractServiceDto ..> ServiceParametersDto : unnamed
    ContractServiceDto ..> ContractServiceTypeDto : unnamed
    ContractServiceDto ..> ContractServiceCategoryDto : unnamed
    ContractParametersDto <|-- CurrentContractParametersDto : unnamed
```
