# Contract search - Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Access Rights
- **Diagram ID**: 158510
- **Elements**: 30
- **Connectors**: 29

```mermaid
graph TD
    n_01_300_Search_contract_by_code["01.300 Search contract by code"]
    ADD_01_300_Search_for_contract_CRM_Search["{ADD}01.300 Search for contract (CRM Search)"]
    ADD_01_300_Search_for_contract_BO_Limited_Search["{ADD}01.300 Search for contract (BO Limited Search)"]
    n_01_300_Search_for_contract_sales_agent["01.300 Search for contract (sales agent)"]
    n_01_300_Search_for_contract_ForRegistration["01.300 Search for contract (ForRegistration) "]
    n_01_300_Search_for_contract_Nonreimbursed["01.300 Search for contract (Nonreimbursed) "]
    n_01_300_Search_for_contract_Reimbursed["01.300 Search for contract (Reimbursed) "]
    n_01_300_Search_for_contract_InProcess["01.300 Search for contract (InProcess) "]
    n_01_300_Search_for_contract_Remote_contracts_for_2BoD_filli["01.300 Search for contract (Remote contracts for 2BoD filling)"]
    n_01_300_Search_for_contract_Remote_contracts_for_signature["01.300 Search for contract (Remote contracts for signature)"]
    n_01_300_Search_for_contract_Drafts["01.300 Search for contract (Drafts) "]
    n_01_300_Search_for_contract_Created_by_me["01.300 Search for contract (Created by me)"]
    n_01_300_Search_for_contract_Canceled_contracts["01.300 Search for contract (Canceled contracts)"]
    n_01_300_Search_for_contract_telesales["01.300 Search for contract (telesales)"]
    n_01_300_Search_for_contract_remotely_created_contracts["01.300 Search for contract (remotely created contracts)"]
    n_01_300_Search_for_contract_remotely_created_not_disbursed["01.300 Search for contract (remotely created not disbursed)"]
    n_01_300_Search_for_contract_hidden_contracts["01.300 Search for contract (hidden contracts)"]
    n_01_300_Search_for_contract_Disbursement_channel_change["01.300 Search for contract (Disbursement channel change)"]
    n_01_300_Search_for_contract_custom_BO_search["01.300 Search for contract (custom BO search)"]
    n_01_300_Search_for_contract_all_sales_areas["01.300 Search for contract (all sales areas)"]
    n_01_300_Search_for_contract_custom_SNM_search["01.300 Search for contract (custom SNM search)"]
    n_01_300_Search_for_contract_predefined_custom_search["01.300 Search for contract (predefined + custom search)"]
    n_01_300_Search_for_contract_custom_search["01.300 Search for contract (custom search)"]
    n_01_300_Search_for_contract_predefined_search["01.300 Search for contract (predefined search)"]
    n_01_300_Search_for_contract_all_salesrooms["01.300 Search for contract (all salesrooms)"]
    n_01_300_Search_for_contract["01.300 Search for contract"]
    MOD_01_300_Search_for_contract["{MOD}01.300 Search for contract"]
    n_01_300_Search_for_contract_filter_for_FO_user["01.300 Search for contract (filter for FO user)"]
    n_01_300_Search_for_contract_filter_for_BO_user["01.300 Search for contract (filter for BO user)"]
    n_01_300_Search_for_contract_filter_for_BO_administrator["01.300 Search for contract (filter for BO administrator)"]
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_Drafts
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_filter_for_BO_user
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_Remote_contracts_for_signature
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_predefined_search
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_custom_BO_search
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_ForRegistration
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_remotely_created_not_disbursed
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_custom_SNM_search
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_predefined_custom_search
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_Remote_contracts_for_2BoD_filli
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_telesales
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_Disbursement_channel_change
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_Nonreimbursed
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_InProcess
    MOD_01_300_Search_for_contract -->|unnamed| ADD_01_300_Search_for_contract_BO_Limited_Search
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_remotely_created_contracts
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_contract_by_code
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_filter_for_FO_user
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_custom_search
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_Canceled_contracts
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_filter_for_BO_administrator
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_Created_by_me
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_hidden_contracts
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_sales_agent
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_all_sales_areas
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_all_salesrooms
    MOD_01_300_Search_for_contract -->|unnamed| ADD_01_300_Search_for_contract_CRM_Search
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_Reimbursed
```
