# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules
- **Diagram ID**: 151943
- **Elements**: 12
- **Connectors**: 6

```mermaid
graph TD
    Application_canceled_by_underwriting_decision["Application canceled by underwriting decision"]
    Access_control_to_remote_application["Access control to remote application"]
    Last_scoring_type["Last scoring type"]
    Allowed_repeated_recalculation["Allowed repeated recalculation"]
    MOD_Show_documents_based_on_security_level["{MOD}Show documents based on security level"]
    Commodity_elements_visibility_VN["Commodity elements visibility - VN"]
    Commodity_elements_visibility_KZ["Commodity elements visibility - KZ"]
    Commodity_elements_visibility_ID["Commodity elements visibility - ID"]
    Commodity_elements_visibility_IN["Commodity elements visibility - IN"]
    Commodity_elements_visibility["Commodity elements visibility"]
    Access_control_to_Contract_by_Salesroom_for_contract_detail["Access control to Contract by Salesroom for contract detail"]
    Process_contracts_in_2BoD_queue_from_contract_detail["Process contracts in 2BoD queue (from contract detail)"]
    Commodity_elements_visibility_IN -->|unnamed| Commodity_elements_visibility
    Commodity_elements_visibility_ID -->|unnamed| Commodity_elements_visibility
    Commodity_elements_visibility_KZ -->|unnamed| Commodity_elements_visibility
    Allowed_repeated_recalculation -->|unnamed| Last_scoring_type
    Application_canceled_by_underwriting_decision -->|{ADD LOR-4191/}| Last_scoring_type
    Commodity_elements_visibility_VN -->|unnamed| Commodity_elements_visibility
```
