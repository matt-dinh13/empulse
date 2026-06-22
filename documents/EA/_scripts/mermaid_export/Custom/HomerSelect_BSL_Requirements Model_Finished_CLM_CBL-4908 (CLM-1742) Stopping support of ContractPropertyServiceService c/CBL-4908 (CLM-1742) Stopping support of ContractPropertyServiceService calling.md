# CBL-4908 (CLM-1742) Stopping support of ContractPropertyServiceService calling

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4908 (CLM-1742) Stopping support of ContractPropertyServiceService calling
- **Diagram ID**: 116903
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Contract_Notifications_DEL_Early_repayment_request_notificat["Contract Notifications :{DEL}Early repayment request notification"]
    Use_Case_Full_early_repayment_request_via_GUI["Use Case : Full early repayment request - via GUI"]
    Use_Case_Model_Loan_consolidation_use_case_model["Use Case Model : Loan consolidation - use case model"]
    REQ_1_Remove_generation_of_the_FullEarlyRepaymentRequestedSE["REQ#1 - Remove generation of the FullEarlyRepaymentRequestedSE system event and ContractPropertyRQ message"]
    Use_Case_Model_Loan_consolidation_use_case_model -->|unnamed| REQ_1_Remove_generation_of_the_FullEarlyRepaymentRequestedSE
    Use_Case_Full_early_repayment_request_via_GUI -->|unnamed| REQ_1_Remove_generation_of_the_FullEarlyRepaymentRequestedSE
    Contract_Notifications_DEL_Early_repayment_request_notificat -->|unnamed| REQ_1_Remove_generation_of_the_FullEarlyRepaymentRequestedSE
```
