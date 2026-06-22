# {DEL}Contract full info notification - JMS messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages
- **Diagram ID**: 153192
- **Elements**: 24
- **Connectors**: 25

```mermaid
classDiagram
    class RefinancedContract["RefinancedContract"]
    class ContractDocument["ContractDocument"]
    class ProductOfferLimitType["ProductOfferLimitType"]
    class ContractSystemEventType["ContractSystemEventType"]
    class BankAccountRoleType["BankAccountRoleType"]
    class GroupChoice["GroupChoice"]
    class DEL_ContractFullInfoRequest["{DEL]ContractFullInfoRequest"]
    class External_Reference["External Reference"]
    class ContractService["ContractService"]
    class ContractEventType["ContractEventType"]
    class ContractEvent["ContractEvent"]
    class BankAccount["BankAccount"]
    class CreditType["CreditType"]
    class DEL_ContractFullInfo["{DEL}ContractFullInfo"]
    class ContractStatusType["ContractStatusType"]
    class RepaymentChannelType["RepaymentChannelType"]
    class ContractCommodity["ContractCommodity"]
    class InitialTransactionType["InitialTransactionType"]
    class RevolvingParameter["RevolvingParameter"]
    class ClosedEndParameter["ClosedEndParameter"]
    class ContractParameter["ContractParameter"]
    class PersonRoleType["PersonRoleType"]
    class ContractPerson["ContractPerson"]
    class ContractBase["ContractBase"]
    DEL_ContractFullInfoRequest ..> DEL_ContractFullInfo : unnamed
    DEL_ContractFullInfo ..> ContractDocument : unnamed
    ContractParameter ..> ProductOfferLimitType : unnamed
    DEL_ContractFullInfoRequest ..> ContractSystemEventType : unnamed
    BankAccount ..> BankAccountRoleType : unnamed
    DEL_ContractFullInfo --> GroupChoice : unnamed
    DEL_ContractFullInfo ..> ContractService : unnamed
    ContractEvent ..> ContractEventType : unnamed
    ContractBase ..> ContractEvent : unnamed
    DEL_ContractFullInfo ..> BankAccount : unnamed
    DEL_ContractFullInfo ..> RefinancedContract : unnamed
    ContractParameter ..> CreditType : unnamed
    ContractBase <|-- DEL_ContractFullInfo : unnamed
    ContractBase ..> ContractStatusType : unnamed
    ContractParameter ..> RepaymentChannelType : unnamed
    DEL_ContractFullInfo ..> ContractCommodity : unnamed
    ContractParameter ..> InitialTransactionType : unnamed
    GroupChoice ..> RevolvingParameter : unnamed
    GroupChoice ..> ClosedEndParameter : unnamed
    ContractParameter <|-- RevolvingParameter : unnamed
    ContractParameter <|-- ClosedEndParameter : unnamed
    ContractPerson ..> PersonRoleType : unnamed
    DEL_ContractFullInfo ..> ContractPerson : unnamed
    ContractParameter ..> BankAccount : unnamed
    DEL_ContractFullInfoRequest ..> External_Reference : External Reference
```
