# Consumed messages - REL Account balance change

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)
- **Diagram ID**: 161746
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class AccountBalanceChangeRequest["AccountBalanceChangeRequest"]
    class ContractTypeDto["ContractTypeDto"]
    class MoneyDto["MoneyDto"]
    class AccountBalanceChangeDto["AccountBalanceChangeDto"]
    AccountBalanceChangeRequest ..> AccountBalanceChangeDto : unnamed
    AccountBalanceChangeDto ..> ContractTypeDto : unnamed
```
