# Change disbursement channel

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/UseCase Model
- **Diagram ID**: 164546
- **Elements**: 20
- **Connectors**: 22

```mermaid
graph LR
    CardEvidenceWS_CardEvidenceWS_VerifyCardData["CardEvidenceWS : CardEvidenceWS - VerifyCardData"]
    Bank_accounts_BankAccountsWS["Bank accounts : BankAccountsWS"]
    Bank_account_Management[/"Bank account Management"/]
    MOD_PAYM_6304_01_676_Verify_bank_account_data_for_contract_d(("{MOD PAYM-6304} 01.676 Verify bank account data for contract disb. channel"))
    CardEvidenceWS_CardEvidenceWS_DeleteCard["CardEvidenceWS : CardEvidenceWS - DeleteCard"]
    CardEvidenceWS_CardEvidenceWS_SaveCard["CardEvidenceWS : CardEvidenceWS - SaveCard"]
    External_system[/"External system"/]
    n_01_675_Verify_card_data_in_external_module_for_contract(("01.675 Verify card data in external module for contract"))
    n_01_673_Save_card_data_to_external_module_for_contract(("01.673 Save card data to external module for contract"))
    n_01_674_Delete_card_data_in_external_module_for_contract(("01.674 Delete card data in external module for contract"))
    MOD_Technical_account_types_KZ["{MOD}Technical account types - KZ"]
    Technical_account_types["Technical account types"]
    MOD_01_668_Create_request_for_change_disbursement_channel(("{MOD}01.668 Create request for change disbursement channel"))
    Update_Contract_Bank_Account_rule["Update Contract Bank Account rule"]
    Tab1_Contract_information_Tab1_Contract_information["Tab1-Contract information : Tab1-Contract information"]
    MOD_Saving_of_Payment_Channels["{MOD}Saving of Payment Channels"]
    Disbursements_Change_disbursement_channel["Disbursements : Change disbursement channel"]
    MOD_01_662_Change_disbursement_channel(("{MOD}01.662 Change disbursement channel"))
    MOD_01_210_Show_contract_detail(("{MOD}01.210 Show contract detail"))
    User[/"User"/]
    External_system --> n_01_673_Save_card_data_to_external_module_for_contract
    MOD_01_662_Change_disbursement_channel -.->|include| n_01_674_Delete_card_data_in_external_module_for_contract
    MOD_PAYM_6304_01_676_Verify_bank_account_data_for_contract_d -->|unnamed| Bank_accounts_BankAccountsWS
    MOD_PAYM_6304_01_676_Verify_bank_account_data_for_contract_d --> Bank_account_Management
    n_01_674_Delete_card_data_in_external_module_for_contract -->|unnamed| CardEvidenceWS_CardEvidenceWS_DeleteCard
    n_01_673_Save_card_data_to_external_module_for_contract -->|unnamed| CardEvidenceWS_CardEvidenceWS_SaveCard
    n_01_675_Verify_card_data_in_external_module_for_contract -->|unnamed| CardEvidenceWS_CardEvidenceWS_VerifyCardData
    MOD_Saving_of_Payment_Channels -->|unnamed| Technical_account_types
    MOD_Technical_account_types_KZ -->|unnamed| Technical_account_types
    MOD_01_662_Change_disbursement_channel -.->|include| MOD_01_668_Create_request_for_change_disbursement_channel
    MOD_01_662_Change_disbursement_channel -->|unnamed| Update_Contract_Bank_Account_rule
    MOD_01_662_Change_disbursement_channel -->|unnamed| MOD_Saving_of_Payment_Channels
    MOD_01_662_Change_disbursement_channel -->|unnamed| Disbursements_Change_disbursement_channel
    Tab1_Contract_information_Tab1_Contract_information -->|unnamed| MOD_01_662_Change_disbursement_channel
    Tab1_Contract_information_Tab1_Contract_information -->|unnamed| MOD_01_210_Show_contract_detail
    MOD_01_662_Change_disbursement_channel -.->|include| n_01_673_Save_card_data_to_external_module_for_contract
    User --> n_01_675_Verify_card_data_in_external_module_for_contract
    User --- MOD_01_210_Show_contract_detail
    User --> MOD_PAYM_6304_01_676_Verify_bank_account_data_for_contract_d
    User --- MOD_01_662_Change_disbursement_channel
    External_system --> n_01_675_Verify_card_data_in_external_module_for_contract
    External_system --> n_01_674_Delete_card_data_in_external_module_for_contract
```
