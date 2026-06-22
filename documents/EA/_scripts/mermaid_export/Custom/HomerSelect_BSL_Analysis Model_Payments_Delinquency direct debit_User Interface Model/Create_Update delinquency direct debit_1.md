# Create/Update delinquency direct debit

```mermaid
graph TD
    Whole_bank_account_must_be_filled["Whole bank account must be filled"]
    Cancel["Cancel"]
    Save["Save"]
    Edit_Bank_Account["Edit Bank Account"]
    Limit["Limit"]
    Debiting_method["Debiting method"]
    Create_Update_delinquency_direct_debit["Create/Update delinquency direct debit"]
    Debiting_method -->|unnamed| Whole_bank_account_must_be_filled
    Limit -->|unnamed| Whole_bank_account_must_be_filled
    Edit_Bank_Account -->|unnamed| Whole_bank_account_must_be_filled
```
