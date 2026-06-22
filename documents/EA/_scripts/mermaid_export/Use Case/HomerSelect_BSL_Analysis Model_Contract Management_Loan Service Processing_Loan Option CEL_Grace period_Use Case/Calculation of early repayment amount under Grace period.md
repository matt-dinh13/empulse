# Calculation of early repayment amount under Grace period

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case
- **Diagram ID**: 163327
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    MOD_ALG_Early_repayment_calculation_A2_Unpaid_principal_only["{MOD}ALG_Early repayment calculation A2 - Unpaid principal only"]
    Status_of_Grace_Period["Status of Grace Period"]
    Use_Case_Generate_installment_schedule["Use Case : Generate installment schedule"]
    Grace_period_processing["Grace period processing"]
    MOD_08_222_Calculate_Grace_period_amount(("{MOD}08.222 Calculate Grace period amount"))
    Annuity_calculation["Annuity calculation"]
    MOD_Generate_installment_schedule_algorithm["{MOD}Generate installment schedule algorithm"]
    ALG_Get_involved_Installment_part["ALG_Get involved Installment part"]
    MOD_ALG_Early_repayment_calculation_A1["{MOD}ALG_Early repayment calculation A1"]
    MOD_08_222_Calculate_Grace_period_amount -->|unnamed| MOD_ALG_Early_repayment_calculation_A1
    MOD_08_222_Calculate_Grace_period_amount -->|unnamed| ALG_Get_involved_Installment_part
    MOD_08_222_Calculate_Grace_period_amount -->|unnamed| MOD_Generate_installment_schedule_algorithm
    MOD_08_222_Calculate_Grace_period_amount -->|unnamed| Annuity_calculation
    Grace_period_processing -->|unnamed| MOD_08_222_Calculate_Grace_period_amount
    Status_of_Grace_Period -->|unnamed| MOD_08_222_Calculate_Grace_period_amount
    MOD_08_222_Calculate_Grace_period_amount -->|unnamed| MOD_ALG_Early_repayment_calculation_A2_Unpaid_principal_only
    MOD_Generate_installment_schedule_algorithm -->|unnamed| Use_Case_Generate_installment_schedule
```
