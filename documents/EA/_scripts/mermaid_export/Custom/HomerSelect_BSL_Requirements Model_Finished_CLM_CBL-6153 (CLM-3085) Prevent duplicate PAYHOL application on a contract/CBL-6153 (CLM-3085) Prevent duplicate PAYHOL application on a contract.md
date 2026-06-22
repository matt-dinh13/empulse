# CBL-6153 (CLM-3085) Prevent duplicate PAYHOL application on a contract

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-3085) Prevent duplicate PAYHOL application on a contract
- **Diagram ID**: 144800
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    n_01_797_Create_ContractPayholRequest_service["01.797 Create ContractPayholRequest service"]
    n_08_355_Create_request_for_payment_holiday["08.355 Create request for payment holiday"]
    Check_existency_of_active_PAYHOL_request["Check existency of active PAYHOL request"]
    REQ_1_Prevent_duplicate_PAYHOL_request_on_a_contract["REQ#1 - Prevent duplicate PAYHOL request on a contract"]
    n_08_355_Create_request_for_payment_holiday -->|unnamed| Check_existency_of_active_PAYHOL_request
    n_01_797_Create_ContractPayholRequest_service -->|unnamed| Check_existency_of_active_PAYHOL_request
```
