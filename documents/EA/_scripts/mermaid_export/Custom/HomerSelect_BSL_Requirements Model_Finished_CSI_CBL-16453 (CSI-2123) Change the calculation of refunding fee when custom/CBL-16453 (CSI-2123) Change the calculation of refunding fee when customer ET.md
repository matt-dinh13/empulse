# CBL-16453 (CSI-2123) Change the calculation of refunding fee when customer ET

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16453 (CSI-2123) Change the calculation of refunding fee when customer ET
- **Diagram ID**: 149104
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    CSI_2208_Change_the_calculation_of_premium_fee_on_insurance_["CSI-2208 Change the calculation of  premium fee on insurance termination"]
    MOD_08_121_Terminate_contract_insurance_common["{MOD}08.121 Terminate contract insurance common"]
    n_11_121_Terminate_insurance_contract_manually["11.121 Terminate insurance contract manually"]
    MOD_Calculate_new_installment_amount_on_service_termination["{MOD}Calculate new installment amount on service termination"]
    Use_case_model_Contract_insurance_termination["Use case model : Contract insurance termination"]
    Use_case_model_Contract_insurance_termination -->|unnamed| MOD_Calculate_new_installment_amount_on_service_termination
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| MOD_08_121_Terminate_contract_insurance_common
    n_11_121_Terminate_insurance_contract_manually -->|unnamed| MOD_Calculate_new_installment_amount_on_service_termination
```
