# Insurance based on Contract signature or First Tx

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Insurance based on Contract signature or First Tx
- **Diagram ID**: 161877
- **Elements**: 17
- **Connectors**: 36

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant Insurance_starts_on_First_debet_transaction as Insurance starts on First debet transaction
    participant unnamed as unnamed
    participant Insurance_starts_on_Contract_Signature as Insurance starts on Contract Signature
    participant n_01_290_Activate_contract as 01.290 Activate contract
    participant n_01_184_Process_ContractSignTransactionsSE_event as 01.184 Process ContractSignTransactionsSE event
    participant REL_Account as REL Account
    participant Insurance_Contract as Insurance Contract
    participant n_01_180_Sign_contract as 01.180 Sign contract
    participant n_01_182_Prepare_documentation_to_sign as 01.182 Prepare documentation to sign
    participant n_01_770_Process_account_transaction_notification as 01.770 Process account transaction notification
    participant User as User
    unnamed->>Insurance_starts_on_First_debet_transaction: NoteLink
    unnamed->>Insurance_starts_on_Contract_Signature: NoteLink
    n_01_290_Activate_contract->>+n_01_290_Activate_contract: 05.091 Generate outgoing payment - insurance
    n_01_184_Process_ContractSignTransactionsSE_event->>+REL_Account: ConfirmTransaction
    n_01_290_Activate_contract->>+Insurance_Contract: 11.040 Activate insurance contract
    n_01_180_Sign_contract->>+n_01_180_Sign_contract: SetContractStatus
    n_01_180_Sign_contract->>+REL_Account: ActivateAccount
    n_01_180_Sign_contract->>+n_01_180_Sign_contract: 05.091 Generate outgoing payment - insurance
    n_01_182_Prepare_documentation_to_sign->>+Insurance_Contract: 11.010 Create insurance contract
    n_01_770_Process_account_transaction_notification->>+Insurance_Contract: 11.020 Add insurance period
    n_01_290_Activate_contract->>+Insurance_Contract: 11.020 Add insurance period
    n_01_770_Process_account_transaction_notification->>+n_01_770_Process_account_transaction_notification: Get Account Transaction
    Insurance_Contract->>+Insurance_Contract: SetInsContractStatus
    n_01_180_Sign_contract->>+n_01_180_Sign_contract: CreateTransaction
    Insurance_Contract->>+Insurance_Contract: SetInsContractStatus
    n_01_770_Process_account_transaction_notification->>+n_01_770_Process_account_transaction_notification: CreateTransaction
    User->>+n_01_180_Sign_contract: SignContract
    Insurance_Contract->>+Insurance_Contract: Calculate net revenue share for insurance company
    n_01_770_Process_account_transaction_notification->>+n_01_770_Process_account_transaction_notification: Calculate Sum insured 
    n_01_182_Prepare_documentation_to_sign->>+n_01_182_Prepare_documentation_to_sign: Calculate Sum insured and Premium
    n_01_180_Sign_contract->>+n_01_180_Sign_contract: Set AccountTransaction.Status
    n_01_290_Activate_contract->>+n_01_290_Activate_contract: Calculate Sum insured and Premium
    n_01_770_Process_account_transaction_notification->>+REL_Account: ConfirmTransaction
    REL_Account->>+n_01_770_Process_account_transaction_notification: FirstTransactionNotification
    n_01_180_Sign_contract->>+n_01_184_Process_ContractSignTransactionsSE_event: GenerateSystemEvent
    n_01_770_Process_account_transaction_notification->>+n_01_770_Process_account_transaction_notification: 05.091 Generate outgoing payment - insurance
    User->>+n_01_182_Prepare_documentation_to_sign: Prepare documentation to sign
    n_01_770_Process_account_transaction_notification->>+n_01_770_Process_account_transaction_notification: Set AccountTransaction.Status
    Insurance_Contract->>+Insurance_Contract: Determine register inclusion date
    n_01_184_Process_ContractSignTransactionsSE_event->>+n_01_184_Process_ContractSignTransactionsSE_event: Set AccountTransaction.Status
    n_01_180_Sign_contract->>+Insurance_Contract: 11.030 Sign insurance contract
    n_01_182_Prepare_documentation_to_sign->>+Insurance_Contract: 11.020 Add insurance period
    n_01_770_Process_account_transaction_notification->>+Insurance_Contract: 11.040 Activate insurance contract
    n_01_770_Process_account_transaction_notification->>+n_01_770_Process_account_transaction_notification: Calculate insurance premium
    n_01_182_Prepare_documentation_to_sign->>+Insurance_Contract: Determine first insurance period
    n_01_290_Activate_contract->>+REL_Account: ConfirmTransaction
```
