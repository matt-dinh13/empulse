# Access rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract write-off/Access rights
- **Diagram ID**: 161246
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    n_01_550_Write_off_CEL_contract["01.550 Write-off CEL contract"]
    n_01_552_Set_business_event_on_WO_contact["01.552 Set business event on WO contact"]
    n_01_552_Set_business_event_on_WO_contact["01.552 Set business event on WO contact"]
    n_03_150_Regenerate_terminated_installment_schedule["03.150 Regenerate terminated installment schedule"]
    Access_rights_for_Contract_write_off_support["Access rights for Contract write-off support"]
    DEL_01_550_Process_request_for_contract_write_off["{DEL}01.550 Process request for contract write-off "]
    n_01_550_Process_request_for_contract_write_off["01.550 Process request for contract write-off"]
    Access_rights_for_Contract_write_off_support -->|unnamed| n_01_550_Process_request_for_contract_write_off
    n_01_552_Set_business_event_on_WO_contact -->|unnamed| n_01_552_Set_business_event_on_WO_contact
    n_01_550_Write_off_CEL_contract -->|unnamed| n_01_550_Process_request_for_contract_write_off
    n_01_550_Write_off_CEL_contract -->|unnamed| n_03_150_Regenerate_terminated_installment_schedule
```
