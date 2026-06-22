# Validation Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Delinquency direct debit/Validation Rules
- **Diagram ID**: 80199
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    Optional["Optional"]
    Limit["Limit"]
    Debiting_method["Debiting method"]
    Whole_bank_account_must_be_filled["Whole bank account must be filled"]
    Whole_bank_account_must_be_filled["Whole bank account must be filled"]
    Whole_bank_account_must_be_filled -->|unnamed| Whole_bank_account_must_be_filled
    Limit -->|unnamed| Optional
    Debiting_method -->|unnamed| Optional
```
