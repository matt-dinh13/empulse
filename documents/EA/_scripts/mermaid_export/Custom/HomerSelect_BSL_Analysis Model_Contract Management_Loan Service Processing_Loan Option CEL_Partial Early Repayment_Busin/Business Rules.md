# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules
- **Diagram ID**: 163428
- **Elements**: 9
- **Connectors**: 4

```mermaid
graph TD
    ADD_Minimal_Remaining_Principal_calculation["{ADD}Minimal Remaining Principal calculation"]
    Calculate_Minimal_New_PCA_after_PER["Calculate Minimal New PCA after PER"]
    CheckContractPERRequest_input_parameters["CheckContractPERRequest input parameters"]
    MOD_Check_PER_request_availability["{MOD}Check PER request availability"]
    New_term_calculation["New term calculation"]
    New_annuity_calculation_for_Lower_annuity_PER_type["New annuity calculation for 'Lower annuity' PER type"]
    Finalize_paid_part_of_installment_schedule["Finalize paid part of installment schedule"]
    Calculate_Partial_ER_preview_Step2["Calculate Partial ER preview - Step2"]
    Calculate_Partial_ER_preview_Step1["Calculate Partial ER preview - Step1"]
    Calculate_Partial_ER_preview_Step2 -->|unnamed| New_annuity_calculation_for_Lower_annuity_PER_type
    Calculate_Partial_ER_preview_Step2 -->|unnamed| New_term_calculation
    Calculate_Partial_ER_preview_Step1 -->|unnamed| MOD_Check_PER_request_availability
    Calculate_Partial_ER_preview_Step1 -->|unnamed| Calculate_Minimal_New_PCA_after_PER
```
