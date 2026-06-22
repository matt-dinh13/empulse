# Cancel contract manually

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract cancellation/Use Case Model
- **Diagram ID**: 161503
- **Elements**: 26
- **Connectors**: 32

```mermaid
graph LR
    BSL[/"BSL"/]
    COMA[/"COMA"/]
    Process_ContractCancelled(("Process ContractCancelled"))
    Process_ContractCancellationSE(("Process ContractCancellationSE"))
    Loyalty_account_cancellation_function["Loyalty account cancellation function"]
    ContractCancelled_ADD_ContractCancelled["ContractCancelled : {ADD}ContractCancelled"]
    Use_Case_Model_Cancel_contract_after_sign["Use Case Model : Cancel contract after sign"]
    Check_for_active_incoming_payments["Check for active incoming payments"]
    MOD_05_240_Cancel_outgoing_payments(("{MOD}05.240 Cancel outgoing payments"))
    n_11_110_Cancel_insurance_contract(("11.110 Cancel insurance contract"))
    Set_contract_status_to_canceled["Set contract status to canceled"]
    Cancel_application_credit_account["Cancel application credit account"]
    n_01_360_Cancel_contract(("01.360 Cancel contract"))
    Creation_of_contract_cancellation_request_manual_cancel["Creation of contract cancellation request - manual cancel"]
    UseCase_Model_Cancel_contract["UseCase Model :Cancel contract"]
    Cancellation_after_disbursement_check["Cancellation after disbursement check"]
    n_01_592_Cancel_paid_off_contract_manually(("01.592 Cancel paid-off contract manually"))
    n_01_325_Cancel_In_Pre_Process_or_In_Process_contract_manual(("01.325 Cancel In Pre-Process or In Process contract manually"))
    n_01_340_Cancel_contract_with_generated_offers_manually(("01.340 Cancel contract with generated offers manually"))
    n_01_590_Cancel_active_contract_manually(("01.590 Cancel active contract manually"))
    n_01_330_Cancel_signed_contract_manually(("01.330 Cancel signed contract manually"))
    Contract_cancellation_Contract_cancellation["Contract cancellation : Contract cancellation"]
    User[/"User"/]
    n_01_320_Cancel_approved_contract_manually(("01.320 Cancel approved contract manually"))
    LOR["LOR"]
    CLM["CLM"]
    n_01_330_Cancel_signed_contract_manually -->|unnamed| Check_for_active_incoming_payments
    n_01_330_Cancel_signed_contract_manually -->|unnamed| Set_contract_status_to_canceled
    n_01_360_Cancel_contract -->|only for application| Set_contract_status_to_canceled
    n_01_590_Cancel_active_contract_manually -->|unnamed| Set_contract_status_to_canceled
    n_01_360_Cancel_contract -.->|include| n_11_110_Cancel_insurance_contract
    n_01_360_Cancel_contract -.->|include| MOD_05_240_Cancel_outgoing_payments
    n_01_320_Cancel_approved_contract_manually -->|{ADD LOR-7679/}| Cancel_application_credit_account
    n_01_592_Cancel_paid_off_contract_manually -->|unnamed| Check_for_active_incoming_payments
    n_01_320_Cancel_approved_contract_manually -.->|include| n_01_360_Cancel_contract
    n_01_590_Cancel_active_contract_manually -->|unnamed| Loyalty_account_cancellation_function
    n_01_592_Cancel_paid_off_contract_manually -->|unnamed| Loyalty_account_cancellation_function
    n_01_330_Cancel_signed_contract_manually -->|unnamed| Loyalty_account_cancellation_function
    n_01_590_Cancel_active_contract_manually -->|unnamed| Check_for_active_incoming_payments
    n_01_590_Cancel_active_contract_manually -->|unnamed| Creation_of_contract_cancellation_request_manual_cancel
    n_01_590_Cancel_active_contract_manually --- User
    n_01_330_Cancel_signed_contract_manually --- User
    n_01_330_Cancel_signed_contract_manually -->|unnamed| Cancellation_after_disbursement_check
    n_01_592_Cancel_paid_off_contract_manually -->|unnamed| Set_contract_status_to_canceled
    n_01_590_Cancel_active_contract_manually -->|unnamed| Cancellation_after_disbursement_check
    n_01_592_Cancel_paid_off_contract_manually -->|unnamed| Creation_of_contract_cancellation_request_manual_cancel
    n_01_330_Cancel_signed_contract_manually -->|unnamed| Creation_of_contract_cancellation_request_manual_cancel
    n_01_320_Cancel_approved_contract_manually -->|{DEL LOR-7679/}| Creation_of_contract_cancellation_request_manual_cancel
    n_01_340_Cancel_contract_with_generated_offers_manually -.->|include| n_01_360_Cancel_contract
    n_01_325_Cancel_In_Pre_Process_or_In_Process_contract_manual -->|unnamed| n_01_360_Cancel_contract
    n_01_592_Cancel_paid_off_contract_manually -->|unnamed| Cancellation_after_disbursement_check
    BSL --- Process_ContractCancelled
    User --- n_01_592_Cancel_paid_off_contract_manually
    User --- n_01_325_Cancel_In_Pre_Process_or_In_Process_contract_manual
    User --- n_01_320_Cancel_approved_contract_manually
    User --- n_01_340_Cancel_contract_with_generated_offers_manually
    Process_ContractCancelled -->|unnamed| Process_ContractCancellationSE
    Process_ContractCancelled --- COMA
```
