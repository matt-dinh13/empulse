# CBL-3421 (CLM-1328) Paperless Contracts in Registration Queue

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3421 (CLM-1328) Paperless Contracts in Registration Queue
- **Diagram ID**: 102878
- **Elements**: 3
- **Connectors**: 1

```mermaid
graph TD
    REQ_2_Assign_contract_in_registration_queue_with_defined_del["REQ#2 - Assign contract in registration queue with defined delay after sign"]
    REQ_1_Use_only_paperless_contracts_in_the_Registration_queue["REQ#1 - Use only 'paperless' contracts in the Registration queue (for PH only)"]
    MOD_Sign_contract_finalization["{MOD}Sign contract finalization"]
    REQ_1_Use_only_paperless_contracts_in_the_Registration_queue -->|unnamed| MOD_Sign_contract_finalization
```
