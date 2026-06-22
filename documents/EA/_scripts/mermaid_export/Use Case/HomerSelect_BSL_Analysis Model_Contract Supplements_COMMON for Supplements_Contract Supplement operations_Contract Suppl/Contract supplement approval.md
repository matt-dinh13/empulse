# Contract supplement approval

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement approval/Use Case Model
- **Diagram ID**: 163029
- **Elements**: 9
- **Connectors**: 9

```mermaid
graph LR
    LAP_vector_filter_for_output_data["LAP vector filter for output data"]
    Annuity_factor_ACT_definition["Annuity factor ACT definition"]
    Annuity_factor_30_360_definition["Annuity factor 30/360 definition"]
    Annuity_calculation["Annuity calculation"]
    Restructuring_offer_recalculation["Restructuring offer recalculation"]
    Credit_limit_change_request_bulk_processing["Credit limit change request bulk processing"]
    Loan_restructuring_request_creation["Loan restructuring request creation"]
    n_13_450_Process_supplement_approval_result(("13.450 Process supplement approval result"))
    n_13_150_Send_supplement_to_approval(("13.150 Send supplement to approval"))
    Credit_limit_change_request_bulk_processing -->|unnamed| n_13_150_Send_supplement_to_approval
    Loan_restructuring_request_creation -->|unnamed| n_13_150_Send_supplement_to_approval
    Loan_restructuring_request_creation -->|unnamed| n_13_450_Process_supplement_approval_result
    Credit_limit_change_request_bulk_processing -->|unnamed| n_13_450_Process_supplement_approval_result
    n_13_450_Process_supplement_approval_result -->|unnamed| Restructuring_offer_recalculation
    Restructuring_offer_recalculation -->|unnamed| Annuity_calculation
    Annuity_calculation -->|unnamed| Annuity_factor_30_360_definition
    Annuity_calculation -->|unnamed| Annuity_factor_ACT_definition
    n_13_150_Send_supplement_to_approval -->|unnamed| LAP_vector_filter_for_output_data
```
