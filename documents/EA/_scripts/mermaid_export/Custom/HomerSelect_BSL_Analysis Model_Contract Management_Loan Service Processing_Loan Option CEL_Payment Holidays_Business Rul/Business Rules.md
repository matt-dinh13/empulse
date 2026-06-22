# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules
- **Diagram ID**: 137566
- **Elements**: 9
- **Connectors**: 2

```mermaid
graph TD
    Check_availability_for_rollback_of_PAYHOL_request["Check availability for rollback of PAYHOL request"]
    Check_existency_of_active_PAYHOL_request["Check existency of active PAYHOL request"]
    Check_ContractPayholRequest_input_parameters["Check ContractPayholRequest input parameters"]
    DEL_Payment_holiday_service_request_validation["{DEL}Payment holiday service request validation"]
    MOD_Determine_first_installment_for_deferral["{MOD}Determine first installment for deferral"]
    MOD_Algorithm_Calculate_tariff_item_amount["{MOD}Algorithm: Calculate tariff item amount"]
    Algorithm_Find_tariff_items_by_usage["Algorithm: Find tariff items by usage"]
    Calculate_Payment_holiday_financial_parameters["Calculate Payment holiday financial parameters"]
    ADD_Check_ContractCHDDRequest_input_parameters["{ADD}Check ContractCHDDRequest input parameters"]
    Calculate_Payment_holiday_financial_parameters -->|unnamed| Algorithm_Find_tariff_items_by_usage
    Calculate_Payment_holiday_financial_parameters -->|unnamed| MOD_Algorithm_Calculate_tariff_item_amount
```
