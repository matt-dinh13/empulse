# CBL-9759 (CLM-3088) Loan restructuring offer calculation update

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9759 (CLM-3059) Create API for Loan restructuring
- **Diagram ID**: 144803
- **Elements**: 11
- **Connectors**: 5

```mermaid
graph TD
    n_13_450_Process_supplement_approval_result["13.450 Process supplement approval result"]
    New_term_calculation["New term calculation"]
    el_1688660["Text"]
    MOD_08_403_Create_request_for_loan_restructuring_common["{MOD}08.403 Create request for loan restructuring common"]
    Logical_Data_Model_Loan_restructuring_request_domain["Logical Data Model : Loan restructuring request domain"]
    MOD_Generate_installment_schedule_algorithm["{MOD}Generate installment schedule algorithm"]
    Calculate_financial_parameters_for_loan_restructuring["Calculate financial parameters for loan restructuring"]
    MOD_08_405_Confirm_offer_for_loan_restructuring_common["{MOD}08.405 Confirm offer for loan restructuring common"]
    Annuity_calculation["Annuity calculation"]
    Restructuring_offer_recalculation["Restructuring offer recalculation"]
    Loan_restructuring_offer_calculation_update_to_keep_monthly_["Loan restructuring offer calculation update to keep monthly installment amount provided by LRES offer"]
    Restructuring_offer_recalculation -->|unnamed| New_term_calculation
    Restructuring_offer_recalculation -->|unnamed| Annuity_calculation
    Calculate_financial_parameters_for_loan_restructuring -->|unnamed| MOD_Generate_installment_schedule_algorithm
    MOD_08_405_Confirm_offer_for_loan_restructuring_common -->|unnamed| Calculate_financial_parameters_for_loan_restructuring
    n_13_450_Process_supplement_approval_result -->|unnamed| Restructuring_offer_recalculation
```
