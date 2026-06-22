# v8 - IN only

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only
- **Diagram ID**: 164686
- **Elements**: 25
- **Connectors**: 27

```mermaid
classDiagram
    class MOD_ContractSystemEventType["{MOD}ContractSystemEventType"]
    class ContractEventType["ContractEventType"]
    class VersionKey["VersionKey"]
    class ContractPartyRole["ContractPartyRole"]
    class RefinancedContract["RefinancedContract"]
    class ContractDocument["ContractDocument"]
    class ProductOfferLimitType["ProductOfferLimitType"]
    class BankAccountRoleType["BankAccountRoleType"]
    class GroupChoice["GroupChoice"]
    class ContractFullInfoRequest["ContractFullInfoRequest"]
    class ContractService["ContractService"]
    class ContractEvent["ContractEvent"]
    class BankAccount["BankAccount"]
    class CreditType["CreditType"]
    class ContractFullInfo["ContractFullInfo"]
    class MOD_ContractStatusType["{MOD}ContractStatusType"]
    class RepaymentChannelType["RepaymentChannelType"]
    class ContractCommodity["ContractCommodity"]
    class InitialTransactionType["InitialTransactionType"]
    class RevolvingParameter["RevolvingParameter"]
    class ClosedEndParameter["ClosedEndParameter"]
    class MOD_ContractParameter["{MOD}ContractParameter"]
    class PersonRoleType["PersonRoleType"]
    class ContractPerson["ContractPerson"]
    class ContractBase["ContractBase"]
    MOD_ContractParameter ..> BankAccount : unnamed
    ContractFullInfo ..> ContractPerson : unnamed
    ContractPerson ..> PersonRoleType : unnamed
    MOD_ContractParameter <|-- ClosedEndParameter : unnamed
    MOD_ContractParameter <|-- RevolvingParameter : unnamed
    GroupChoice ..> ClosedEndParameter : unnamed
    GroupChoice ..> RevolvingParameter : unnamed
    MOD_ContractParameter ..> InitialTransactionType : unnamed
    ContractFullInfo ..> ContractCommodity : unnamed
    MOD_ContractParameter ..> RepaymentChannelType : unnamed
    ContractBase ..> MOD_ContractStatusType : unnamed
    ContractFullInfoRequest ..> ContractFullInfo : unnamed
    ContractBase <|-- ContractFullInfo : unnamed
    ContractFullInfo ..> BankAccount : unnamed
    ContractFullInfoRequest ..> MOD_ContractSystemEventType : unnamed
    ContractBase ..> ContractEvent : unnamed
    ContractFullInfo ..> ContractService : unnamed
    ContractFullInfo --> GroupChoice : unnamed
    BankAccount ..> BankAccountRoleType : unnamed
    MOD_ContractParameter ..> ProductOfferLimitType : unnamed
    ContractFullInfo ..> ContractDocument : unnamed
    ContractFullInfo ..> RefinancedContract : unnamed
    ContractFullInfo ..> ContractPartyRole : unnamed
    MOD_ContractParameter ..> VersionKey : unnamed
    MOD_ContractParameter ..> VersionKey : unnamed
    ContractEvent ..> ContractEventType : unnamed
    MOD_ContractParameter ..> CreditType : unnamed
```
