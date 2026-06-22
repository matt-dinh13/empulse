# HC Debit card account selection - choose HC debit card

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/COMMON for Payment Channel Management/User Interface Model
- **Diagram ID**: 146424
- **Elements**: 6
- **Connectors**: 1

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
