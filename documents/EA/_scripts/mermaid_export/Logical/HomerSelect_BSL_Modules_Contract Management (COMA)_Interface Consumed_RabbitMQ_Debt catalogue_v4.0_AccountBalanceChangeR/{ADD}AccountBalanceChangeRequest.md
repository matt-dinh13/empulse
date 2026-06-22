# {ADD}AccountBalanceChangeRequest

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Consumed/RabbitMQ/Debt catalogue/v4.0/AccountBalanceChangeRequest
- **Diagram ID**: 156229
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class MoneyDto["MoneyDto"]
    class AccountBalanceChangeDto["AccountBalanceChangeDto"]
    class ContractTypeDto["ContractTypeDto"]
    class ADD_AccountBalanceChangeRequest["{ADD}AccountBalanceChangeRequest"]
    AccountBalanceChangeDto ..> ContractTypeDto : unnamed
    ADD_AccountBalanceChangeRequest ..> AccountBalanceChangeDto : unnamed
    AccountBalanceChangeDto ..> MoneyDto : unnamed
```
