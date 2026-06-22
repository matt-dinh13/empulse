# Access rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract API providing/Provide contract information/Access rights
- **Diagram ID**: 132770
- **Elements**: 17
- **Connectors**: 8

```mermaid
graph TD
    n_01_175_Get_contracts_credit_limit_changes["01.175 Get contracts credit limit changes"]
    ADD_01_175_Get_contracts_credit_limit_changes["{ADD}01.175 Get contracts credit limit changes"]
    n_01_767_Get_contracts_created_on_salesroom["01.767 Get contracts created on salesroom"]
    n_01_767_Get_contracts_created_on_salesroom["01.767 Get contracts created on salesroom"]
    n_01_771_Get_contracts_for_disbursement_service["01.771 Get contracts for disbursement service"]
    MOD_01_771_Get_contracts_for_disbursement_service["{MOD}01.771 Get contracts for disbursement service"]
    n_01_755_Get_contract["01.755 Get contract"]
    n_01_754_Get_contract_detail["01.754 Get contract detail"]
    n_01_753_Get_contract_list["01.753 Get contract list"]
    MOD_01_754_Get_contract_detail["{MOD}01.754 Get contract detail"]
    MOD_01_753_Get_contract_list["{MOD}01.753 Get contract list"]
    n_01_173_Get_contracts_for_cross_checks["01.173 Get contracts for cross checks"]
    n_01_173_Get_contracts_for_cross_checks["01.173 Get contracts for cross checks"]
    n_01_752_Get_contract_history_by_contract["01.752 Get contract history by contract"]
    n_01_750_Get_contract_by_client["01.750 Get contract by client"]
    n_01_752_Get_contract_history_for_contract["01.752 Get contract history for contract"]
    n_01_750_Get_contracts_by_client["01.750 Get contracts by client"]
    n_01_752_Get_contract_history_for_contract -->|unnamed| n_01_752_Get_contract_history_by_contract
    n_01_175_Get_contracts_credit_limit_changes -->|unnamed| ADD_01_175_Get_contracts_credit_limit_changes
    n_01_173_Get_contracts_for_cross_checks -->|unnamed| n_01_173_Get_contracts_for_cross_checks
    MOD_01_771_Get_contracts_for_disbursement_service -->|unnamed| n_01_771_Get_contracts_for_disbursement_service
    MOD_01_753_Get_contract_list -->|unnamed| n_01_753_Get_contract_list
    n_01_750_Get_contracts_by_client -->|unnamed| n_01_750_Get_contract_by_client
    n_01_767_Get_contracts_created_on_salesroom -->|unnamed| n_01_767_Get_contracts_created_on_salesroom
    MOD_01_754_Get_contract_detail -->|unnamed| n_01_754_Get_contract_detail
```
