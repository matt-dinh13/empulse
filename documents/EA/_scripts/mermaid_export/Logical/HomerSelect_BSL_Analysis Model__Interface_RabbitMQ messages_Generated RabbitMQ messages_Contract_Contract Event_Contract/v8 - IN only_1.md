# v8 - IN only

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
    MOD_ContractParameter --> BankAccount : unnamed
    ContractFullInfo --> ContractPerson : unnamed
    ContractPerson --> PersonRoleType : unnamed
    ClosedEndParameter --> MOD_ContractParameter : unnamed
    RevolvingParameter --> MOD_ContractParameter : unnamed
    GroupChoice --> ClosedEndParameter : unnamed
    GroupChoice --> RevolvingParameter : unnamed
    MOD_ContractParameter --> InitialTransactionType : unnamed
    ContractFullInfo --> ContractCommodity : unnamed
    MOD_ContractParameter --> RepaymentChannelType : unnamed
    ContractBase --> MOD_ContractStatusType : unnamed
    ContractFullInfoRequest --> ContractFullInfo : unnamed
    ContractFullInfo --> ContractBase : unnamed
    ContractFullInfo --> BankAccount : unnamed
    ContractFullInfoRequest --> MOD_ContractSystemEventType : unnamed
    ContractBase --> ContractEvent : unnamed
    ContractFullInfo --> ContractService : unnamed
    ContractFullInfo --> GroupChoice : unnamed
    BankAccount --> BankAccountRoleType : unnamed
    MOD_ContractParameter --> ProductOfferLimitType : unnamed
    ContractFullInfo --> ContractDocument : unnamed
    ContractFullInfo --> RefinancedContract : unnamed
    ContractFullInfo --> ContractPartyRole : unnamed
    MOD_ContractParameter --> VersionKey : unnamed
    MOD_ContractParameter --> VersionKey : unnamed
    ContractEvent --> ContractEventType : unnamed
    MOD_ContractParameter --> CreditType : unnamed
```
