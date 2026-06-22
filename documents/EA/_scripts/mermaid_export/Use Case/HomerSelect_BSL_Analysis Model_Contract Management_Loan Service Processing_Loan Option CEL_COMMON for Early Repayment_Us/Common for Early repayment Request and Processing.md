# Common for Early repayment Request and Processing 

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Use Case model
- **Diagram ID**: 164163
- **Elements**: 18
- **Connectors**: 7

```mermaid
graph LR
    Installment_schedule_manipulations_Installment_schedule_mani["Installment schedule manipulations : Installment schedule manipulations"]
    Initial_setting_for_future_installments["Initial setting for future installments"]
    Algorithm_Find_tariff_items_by_usage["Algorithm: Find tariff items by usage"]
    MOD_Algorithm_Calculate_tariff_item_amount["{MOD}Algorithm: Calculate tariff item amount"]
    MOD_05_200_Perform_decoupling(("{MOD}05.200 Perform decoupling"))
    Use_Case_Grace_period_processing["Use Case : Grace period processing"]
    Use_Case_Contract_Early_Termination_processing["Use Case : Contract Early Termination processing"]
    Use_Case_Contract_Early_Termination_request_creation["Use Case :Contract Early Termination request creation"]
    Use_Case_Model_Cooling_off_period_processing["Use Case Model : Cooling-off period processing"]
    Use_Case_Model_Cooling_off_period_request["Use Case Model : Cooling-off period request"]
    Use_Case_Full_early_repayment_processing["Use Case : Full early repayment processing"]
    Use_Case_Full_Early_repayment_of_contract["Use Case : Full Early repayment of contract"]
    Early_repayment_result_Early_repayment_result["Early repayment result : Early repayment result"]
    ALG_Get_involved_Installment_part["ALG_Get involved Installment part"]
    MOD_ALG_Early_repayment_calculation_A1["{MOD}ALG_Early repayment calculation A1"]
    MOD_03_110_Perform_early_repayment_installment_schedule(("{MOD} 03.110 Perform early repayment installment schedule"))
    MOD_03_070_Calculate_early_repayment_amount(("{MOD}03.070 Calculate early repayment amount"))
    Data_manipulations_and_MBeans["Data manipulations and MBeans"]
    Early_repayment_result_Early_repayment_result -->|unnamed| MOD_03_070_Calculate_early_repayment_amount
    MOD_03_070_Calculate_early_repayment_amount -->|unnamed| MOD_ALG_Early_repayment_calculation_A1
    Initial_setting_for_future_installments -->|unnamed| ALG_Get_involved_Installment_part
    MOD_03_070_Calculate_early_repayment_amount -->|unnamed| ALG_Get_involved_Installment_part
    MOD_03_110_Perform_early_repayment_installment_schedule -.->|include| MOD_05_200_Perform_decoupling
    MOD_ALG_Early_repayment_calculation_A1 -->|unnamed| MOD_Algorithm_Calculate_tariff_item_amount
    MOD_ALG_Early_repayment_calculation_A1 -->|unnamed| Algorithm_Find_tariff_items_by_usage
```
