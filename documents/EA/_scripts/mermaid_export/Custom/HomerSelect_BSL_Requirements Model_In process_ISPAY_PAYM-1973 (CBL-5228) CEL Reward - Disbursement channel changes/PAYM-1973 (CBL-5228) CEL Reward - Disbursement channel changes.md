# PAYM-1973 (CBL-5228) CEL Reward - Disbursement channel changes

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1973 (CBL-5228) CEL Reward - Disbursement channel changes
- **Diagram ID**: 115263
- **Elements**: 9
- **Connectors**: 5

```mermaid
graph TD
    Feature_switches["Feature switches"]
    MOD_01_671_Get_HC_debit_card_account_data["{MOD}01.671 Get HC debit card account data"]
    Debit_Card_Accounts["Debit Card Accounts"]
    General_bank_account["General bank account"]
    HC_Debit_card_account_selection_choose_HC_debit_card["HC Debit card account selection - choose HC debit card"]
    HC_Debit_card_account_selection_panel["HC Debit card account selection - panel"]
    Rewards_payment_channel_management["Rewards payment channel management"]
    DEV_CEL_Reward_Disbursement_channel_changes["DEV CEL Reward - Disbursement channel changes"]
    PAYM_1973_CBL_5228_CEL_Reward_Disbursement_channel_changes["PAYM-1973 (CBL-5228) CEL Reward - Disbursement channel changes"]
    Rewards_payment_channel_management -->|unnamed| DEV_CEL_Reward_Disbursement_channel_changes
    HC_Debit_card_account_selection_panel -->|unnamed| DEV_CEL_Reward_Disbursement_channel_changes
    HC_Debit_card_account_selection_choose_HC_debit_card -->|unnamed| DEV_CEL_Reward_Disbursement_channel_changes
    Feature_switches -->|External Reference| DEV_CEL_Reward_Disbursement_channel_changes
    DEV_CEL_Reward_Disbursement_channel_changes -->|unnamed| PAYM_1973_CBL_5228_CEL_Reward_Disbursement_channel_changes
```
