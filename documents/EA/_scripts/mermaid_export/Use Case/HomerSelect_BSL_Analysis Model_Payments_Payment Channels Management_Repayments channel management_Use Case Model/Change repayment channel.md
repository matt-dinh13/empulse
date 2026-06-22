# Change repayment channel

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Repayments channel management/Use Case Model
- **Diagram ID**: 143137
- **Elements**: 7
- **Connectors**: 7

```mermaid
graph LR
    Get_allowed_repayment_methods_for_contract["Get allowed repayment methods for contract"]
    Tab6_Repayment_Tab6_Repayment["Tab6-Repayment : Tab6-Repayment"]
    MOD_Saving_of_Payment_Channels["{MOD}Saving of Payment Channels"]
    Repayments_Change_repayment_channels["Repayments : Change repayment channels"]
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    User[/"User"/]
    n_01_660_Change_repayment_channel(("01.660 Change repayment channel"))
    Tab6_Repayment_Tab6_Repayment -->|unnamed| n_01_660_Change_repayment_channel
    Tab6_Repayment_Tab6_Repayment -->|unnamed| MOD_01_210_Show_contract_detail
    n_01_660_Change_repayment_channel -->|unnamed| Repayments_Change_repayment_channels
    n_01_660_Change_repayment_channel -->|unnamed| MOD_Saving_of_Payment_Channels
    n_01_660_Change_repayment_channel -->|unnamed| Get_allowed_repayment_methods_for_contract
    User --- MOD_01_210_Show_contract_detail
    User --> n_01_660_Change_repayment_channel
```
