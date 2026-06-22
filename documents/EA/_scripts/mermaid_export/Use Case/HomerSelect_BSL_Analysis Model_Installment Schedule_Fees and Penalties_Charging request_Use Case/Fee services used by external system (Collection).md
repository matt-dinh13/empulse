# Fee services used by external system (Collection)

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Use Case
- **Diagram ID**: 162152
- **Elements**: 23
- **Connectors**: 19

```mermaid
graph LR
    ADD_Calculate_tariff_item_amount["{ADD} Calculate tariff item amount"]
    Calculate_base_per_day["Calculate base per day"]
    External_Reference["External Reference"]
    Logical_Data_Model_Penalty_Over_Limit["Logical Data Model : Penalty Over Limit"]
    External_Reference["External Reference"]
    Logical_Data_Model_Penalties_Limit_Parameters["Logical Data Model : Penalties Limit Parameters"]
    Calculate_Available_amount_in_Penalty_limit["Calculate Available amount in Penalty limit"]
    Evaluate_Period_for_Penalty_limit["Evaluate Period for Penalty limit"]
    Is_Flag_on_Tariff_Item_Type["Is Flag on Tariff Item Type"]
    Algorithm_Find_tariff_by_Current_Tariff_Use_flag["Algorithm: Find tariff by Current Tariff Use flag"]
    n_04_120_Get_fees(("04.120 Get fees"))
    MOD_03_091_Remove_installment_by_external_system(("{MOD}03.091 Remove installment by external system"))
    MOD_04_130_Cancel_fees(("{MOD}04.130 Cancel fees"))
    Collections_system_interfaces_LCS_interfaces_FeeStatusServic["Collections system interfaces : LCS interfaces - FeeStatusService"]
    Adjust_penalty_amount_by_limit["Adjust penalty amount by limit"]
    Account_Transactions_AccountTransactionWS_fee_services["Account Transactions : AccountTransactionWS - fee services"]
    Calculate_Tariff_Item_amount_for_period_from_debt["Calculate Tariff Item amount for period from debt"]
    MOD_Check_fee_request_and_find_corresponding_tariff_item["{MOD}Check fee request and find corresponding tariff item"]
    TransWS_TransWS["TransWS : TransWS"]
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    MOD_03_080_Add_installment(("{MOD}03.080 Add installment"))
    Collection_system[/"Collection system"/]
    MOD_04_140_Charge_fees(("{MOD}04.140 Charge fees"))
    MOD_04_130_Cancel_fees -.->|include| MOD_03_091_Remove_installment_by_external_system
    Adjust_penalty_amount_by_limit -->|unnamed| Evaluate_Period_for_Penalty_limit
    Adjust_penalty_amount_by_limit -->|unnamed| Calculate_Available_amount_in_Penalty_limit
    MOD_04_140_Charge_fees -->|unnamed| Adjust_penalty_amount_by_limit
    MOD_04_140_Charge_fees -->|unnamed| Calculate_Tariff_Item_amount_for_period_from_debt
    MOD_04_140_Charge_fees -->|unnamed| MOD_Check_fee_request_and_find_corresponding_tariff_item
    MOD_04_140_Charge_fees -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_04_140_Charge_fees -->|unnamed| ADD_Calculate_tariff_item_amount
    MOD_04_140_Charge_fees -.->|include| MOD_03_080_Add_installment
    MOD_04_140_Charge_fees -->|unnamed| Algorithm_Find_tariff_by_Current_Tariff_Use_flag
    Collection_system --> MOD_04_130_Cancel_fees
    Collection_system --> MOD_04_140_Charge_fees
    Collection_system --> n_04_120_Get_fees
    Algorithm_Find_tariff_by_Current_Tariff_Use_flag -->|unnamed| Is_Flag_on_Tariff_Item_Type
    MOD_03_091_Remove_installment_by_external_system -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    Calculate_Tariff_Item_amount_for_period_from_debt -->|unnamed| ADD_Calculate_tariff_item_amount
    Calculate_Tariff_Item_amount_for_period_from_debt -->|unnamed| Calculate_base_per_day
    MOD_Check_fee_request_and_find_corresponding_tariff_item -->|unnamed| Is_Flag_on_Tariff_Item_Type
    MOD_Check_fee_request_and_find_corresponding_tariff_item -->|unnamed| Algorithm_Find_tariff_by_Current_Tariff_Use_flag
```
