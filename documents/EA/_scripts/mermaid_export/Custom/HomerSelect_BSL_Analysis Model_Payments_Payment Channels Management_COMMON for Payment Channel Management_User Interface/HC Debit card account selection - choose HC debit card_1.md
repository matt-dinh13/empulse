# HC Debit card account selection - choose HC debit card

```mermaid
graph TD
    MOD_01_671_Get_HC_debit_card_account_data["{MOD}01.671 Get HC debit card account data"]
    Cancel["Cancel"]
    OK["OK"]
    Debit_Card_Accounts["Debit Card Accounts"]
    HC_Debit_card_accounts["HC Debit card accounts"]
    MOD_HC_Debit_card_account_selection["{MOD}HC Debit card account selection"]
    MOD_HC_Debit_card_account_selection -->|unnamed| MOD_01_671_Get_HC_debit_card_account_data
```
