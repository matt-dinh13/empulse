# Create request for loan restructuring (step 1)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/User Interface Model/Create request for loan restructuring (step 1)
- **Diagram ID**: 85879
- **Elements**: 6
- **Connectors**: 1

```mermaid
graph TD
    n_08_402_Create_request_for_loan_restructuring["08.402 Create request for loan restructuring"]
    Create_request_for_loan_restructuring_header["Create request for loan restructuring (header)"]
    Calculate["Calculate"]
    Preferred_monthly_installment["Preferred monthly installment"]
    ADD_Create_request_for_loan_restructuring_step_1["{ADD}Create request for loan restructuring (step 1)"]
    Create_collection_tool_service_request_basic_screen["Create collection tool service request (basic screen)"]
    Calculate -->|unnamed| n_08_402_Create_request_for_loan_restructuring
```
