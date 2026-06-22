# SNM Bank Account Synchronization

```mermaid
classDiagram
    class SN_synchronization_Bank_accounts["SN synchronization - Bank accounts"]
    class Bank["Bank"]
    class Bank_Branch["Bank Branch"]
    class Bank_Account["Bank Account"]
    class Bank_account_type["Bank account type"]
    Bank_account_type --> Bank_Account : unnamed
    Bank_account_type --> Bank_Account : unnamed
    Bank_account_type --> Bank_Account : unnamed
    Bank_account_type --> Bank_Account : unnamed
    Bank_account_type --> Bank_Branch : unnamed
    Bank --> Bank_Branch : unnamed
    Bank_Account --> Bank_Branch : {DEL CBL-4414 PAYM-1613 /}
```
