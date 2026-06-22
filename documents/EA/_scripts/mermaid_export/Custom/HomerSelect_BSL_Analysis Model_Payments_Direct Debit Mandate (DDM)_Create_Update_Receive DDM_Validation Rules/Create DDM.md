# Create DDM

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules
- **Diagram ID**: 101055
- **Elements**: 8
- **Connectors**: 7

```mermaid
graph TD
    Higher_then_minimal_installment["Higher then minimal installment"]
    Mandatory["Mandatory"]
    DDM_regular_payment_amount["DDM regular payment amount"]
    DDM_regular_payment_type["DDM regular payment type"]
    Algorithm_Calculate_DDM_limit["Algorithm: Calculate DDM limit"]
    DDM_Limit_height_for_non_APPROVED_contracts_VAL_0119_DDM_LIM["DDM Limit height for 'non-APPROVED' contracts (VAL_0119_DDM_LIMIT)"]
    DDM_Limit_height_for_applications_and_approved_contracts_VAL["DDM Limit height for applications and approved contracts (VAL_0122_OFFER_DDM_LIMIT)"]
    DDM_limit["DDM limit"]
    DDM_limit -->|unnamed| DDM_Limit_height_for_non_APPROVED_contracts_VAL_0119_DDM_LIM
    DDM_limit -->|unnamed| DDM_Limit_height_for_applications_and_approved_contracts_VAL
    DDM_Limit_height_for_applications_and_approved_contracts_VAL -->|unnamed| Algorithm_Calculate_DDM_limit
    DDM_Limit_height_for_non_APPROVED_contracts_VAL_0119_DDM_LIM -->|unnamed| Algorithm_Calculate_DDM_limit
    DDM_regular_payment_type -->|unnamed| Mandatory
    DDM_regular_payment_amount -->|unnamed| Higher_then_minimal_installment
    DDM_regular_payment_amount -->|unnamed| Mandatory
```
