# Access: Account blockage

```mermaid
graph TD
    Account_Blocking_Reason_Type["Account Blocking Reason Type"]
    n_12_607_Show_Account_blocking_overview["12.607 Show Account blocking overview"]
    n_12_609_Block_account["12.609 Block account"]
    n_12_610_Unblock_account["12.610 Unblock account"]
    n_12_607_Show_account_blocking_overview["12.607 Show account blocking overview"]
    n_12_610_Unblock_account["12.610 Unblock account"]
    n_12_609_Block_account["12.609 Block account"]
    n_12_609_Block_account -->|unnamed| n_12_607_Show_Account_blocking_overview
    n_12_610_Unblock_account -->|unnamed| n_12_607_Show_Account_blocking_overview
    n_12_607_Show_account_blocking_overview -->|unnamed| n_12_607_Show_Account_blocking_overview
    n_12_607_Show_account_blocking_overview -->|unnamed| Account_Blocking_Reason_Type
    n_12_609_Block_account -->|unnamed| n_12_609_Block_account
    n_12_610_Unblock_account -->|unnamed| n_12_610_Unblock_account
```
