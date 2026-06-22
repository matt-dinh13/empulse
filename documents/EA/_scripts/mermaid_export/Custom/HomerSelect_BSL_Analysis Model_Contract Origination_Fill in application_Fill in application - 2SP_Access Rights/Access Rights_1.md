# Access Rights

```mermaid
graph TD
    MOD_01_078_Display_unmasked_client_e_mail_on_CLX["{MOD}01.078 Display unmasked client e-mail on CLX"]
    MOD_Display_email_on_2Bod_CLX_AF["{MOD}Display email on 2Bod CLX AF"]
    n_01_082_Fill_in_application_1BoD_all_salesrooms["01.082 Fill in application - 1BoD (all salesrooms)"]
    n_01_082_Fill_in_application_1BoD["01.082 Fill in application - 1BoD"]
    MOD_01_082_Fill_in_application_1BoD["{MOD}01.082 Fill in application - 1BoD"]
    n_01_089_Invalidate_cross_sell_limit["01.089 Invalidate cross-sell limit"]
    MOD_01_089_Invalidate_cross_sell_limits["{MOD}01.089 Invalidate cross-sell limits"]
    Process_contracts_in_2BoD_queue["Process contracts in 2BoD queue"]
    n_01_083_Fill_in_application_2BoD_all_salesrooms["01.083 Fill in application - 2BoD (all salesrooms)"]
    n_01_083_Fill_in_application_2BoD["01.083 Fill in application - 2BoD"]
    n_01_083_Fill_in_application_2_BoD_contract_in_FO_queue["01.083 Fill in application - 2 BoD (contract in FO queue)"]
    Access_control_to_Contract_by_Salesroom["Access control to Contract by Salesroom"]
    n_01_083_Fill_in_application_2_BoD_contract_in_BO_queue["01.083 Fill in application - 2 BoD (contract in BO queue )"]
    n_01_083_Fill_in_application_2BoD["01.083 Fill in application - 2BoD"]
    n_01_083_Fill_in_application_2BoD -->|unnamed| n_01_083_Fill_in_application_2_BoD_contract_in_FO_queue
    n_01_083_Fill_in_application_2BoD -->|unnamed| n_01_083_Fill_in_application_2_BoD_contract_in_BO_queue
    n_01_083_Fill_in_application_2BoD -->|unnamed| n_01_083_Fill_in_application_2BoD
    n_01_083_Fill_in_application_2BoD -->|unnamed| n_01_083_Fill_in_application_2BoD_all_salesrooms
    n_01_083_Fill_in_application_2BoD -->|unnamed| Access_control_to_Contract_by_Salesroom
    n_01_083_Fill_in_application_2BoD -->|unnamed| Process_contracts_in_2BoD_queue
    MOD_01_078_Display_unmasked_client_e_mail_on_CLX -->|unnamed| MOD_Display_email_on_2Bod_CLX_AF
    MOD_01_089_Invalidate_cross_sell_limits -->|unnamed| n_01_089_Invalidate_cross_sell_limit
    MOD_01_082_Fill_in_application_1BoD -->|unnamed| Access_control_to_Contract_by_Salesroom
    MOD_01_082_Fill_in_application_1BoD -->|unnamed| n_01_082_Fill_in_application_1BoD
    MOD_01_082_Fill_in_application_1BoD -->|unnamed| n_01_082_Fill_in_application_1BoD_all_salesrooms
```
