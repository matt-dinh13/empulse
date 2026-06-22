# Generate installment schedule

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model
- **Diagram ID**: 164463
- **Elements**: 25
- **Connectors**: 29

```mermaid
graph LR
    Recalculate_financial_parameters_after_fee_activation["Recalculate financial parameters after fee activation"]
    n_03_031_Regenerate_installment_schedule_after_fee_activatio(("03.031 Regenerate installment schedule after fee activation"))
    ADD_Day_count_ratio_calculation["{ADD}Day count ratio calculation"]
    Installment_schedule_manipulations_Installment_schedule_mani["Installment schedule manipulations : Installment schedule manipulations"]
    MOD_Check_if_contract_is_co_financed["{MOD}Check if contract is co-financed"]
    Interest_factor_ACT["Interest factor ACT"]
    ADD_Interest_rate_recalculation["{ADD}Interest rate recalculation"]
    ADD_Generate_installment_schedule_Equal_Annuity_algorithm["{ADD}Generate installment schedule - Equal Annuity algorithm"]
    ADD_Process_newly_imported_non_working_days["{ADD}Process newly imported non-working days"]
    Non_working_Day["Non-working Day"]
    Partially_regenerate_installment_schedule_algorithm["Partially regenerate installment schedule algorithm"]
    Deferred_Interest_calculation["Deferred Interest calculation"]
    MOD_Generate_installment_schedule_Equal_principal["{MOD}Generate installment schedule - Equal principal"]
    Generate_installment_schedule_Annuity_principal["Generate installment schedule - Annuity principal"]
    Internal_Rate_of_Return_calculation["Internal Rate of Return calculation"]
    EIR_calculation["EIR calculation"]
    Example_of_IS_generating_Basic_algorithm["Example of IS generating - Basic algorithm"]
    Example_of_IS_generating_Extended1_algorithm["Example of IS generating - Extended1 algorithm"]
    Generate_installment_schedule_Extended1_algorithm["Generate installment schedule - Extended1 algorithm"]
    Generate_installment_schedule_Basic_algorithm["Generate installment schedule - Basic algorithm"]
    Calculate_number_of_days_for_30_360_day_count_convention["Calculate number of days for 30/360 day count convention"]
    n_03_030_Regenerate_installment_schedule(("03.030 Regenerate installment schedule"))
    MOD_Generate_installment_schedule_algorithm["{MOD}Generate installment schedule algorithm"]
    n_03_010_Generate_installment_schedule(("03.010 Generate installment schedule"))
    Data_manipulations_and_MBeans["Data manipulations and MBeans"]
    Generate_installment_schedule_Annuity_principal -->|unnamed| Interest_factor_ACT
    n_03_031_Regenerate_installment_schedule_after_fee_activatio -->|unnamed| Recalculate_financial_parameters_after_fee_activation
    ADD_Interest_rate_recalculation -->|unnamed| ADD_Day_count_ratio_calculation
    ADD_Interest_rate_recalculation -->|unnamed| Internal_Rate_of_Return_calculation
    ADD_Generate_installment_schedule_Equal_Annuity_algorithm -->|unnamed| MOD_Generate_installment_schedule_algorithm
    ADD_Generate_installment_schedule_Equal_Annuity_algorithm -->|unnamed| ADD_Interest_rate_recalculation
    ADD_Generate_installment_schedule_Equal_Annuity_algorithm -->|unnamed| Deferred_Interest_calculation
    ADD_Generate_installment_schedule_Equal_Annuity_algorithm -->|unnamed| Interest_factor_ACT
    ADD_Process_newly_imported_non_working_days -->|unnamed| Non_working_Day
    Deferred_Interest_calculation -->|unnamed| Interest_factor_ACT
    MOD_Generate_installment_schedule_Equal_principal -->|unnamed| MOD_Generate_installment_schedule_algorithm
    MOD_Generate_installment_schedule_Equal_principal -->|unnamed| Deferred_Interest_calculation
    MOD_Generate_installment_schedule_Equal_principal -->|unnamed| Interest_factor_ACT
    n_03_031_Regenerate_installment_schedule_after_fee_activatio -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Generate_installment_schedule_Annuity_principal -->|unnamed| Deferred_Interest_calculation
    n_03_010_Generate_installment_schedule -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Example_of_IS_generating_Basic_algorithm -->|unnamed| Generate_installment_schedule_Basic_algorithm
    Example_of_IS_generating_Extended1_algorithm -->|unnamed| Generate_installment_schedule_Extended1_algorithm
    Generate_installment_schedule_Extended1_algorithm -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Generate_installment_schedule_Extended1_algorithm -->|unnamed| Partially_regenerate_installment_schedule_algorithm
    Generate_installment_schedule_Extended1_algorithm -->|unnamed| Calculate_number_of_days_for_30_360_day_count_convention
    Generate_installment_schedule_Extended1_algorithm -->|unnamed| Internal_Rate_of_Return_calculation
    Generate_installment_schedule_Basic_algorithm -->|unnamed| MOD_Generate_installment_schedule_algorithm
    Generate_installment_schedule_Basic_algorithm -->|unnamed| Partially_regenerate_installment_schedule_algorithm
    Generate_installment_schedule_Basic_algorithm -->|unnamed| EIR_calculation
    n_03_030_Regenerate_installment_schedule -->|unnamed| MOD_Generate_installment_schedule_algorithm
    MOD_Generate_installment_schedule_algorithm -->|unnamed| Non_working_Day
    MOD_Generate_installment_schedule_algorithm -->|unnamed| MOD_Check_if_contract_is_co_financed
    Generate_installment_schedule_Annuity_principal -->|unnamed| MOD_Generate_installment_schedule_algorithm
```
