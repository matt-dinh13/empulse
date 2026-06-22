# CBL-18150 (CLM-5001) contract APIs event with status trans history and business events

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-18150 (CLM-5001) contract APIs event with status trans history and business events
- **Diagram ID**: 156106
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    getRefinancedContracts_getRefinancedContracts["getRefinancedContracts : getRefinancedContracts"]
    getStatusTransitions_getStatusTransitions["getStatusTransitions : getStatusTransitions"]
    ADD_Validate_contract["{ADD}Validate contract"]
    getBusinessEvents_getBusinessEvents["getBusinessEvents : getBusinessEvents"]
    CBL_18150_CLM_5001_contract_APIs_event_with_status_trans_his["CBL-18150 (CLM-5001) contract APIs event with status trans history and business events"]
    CBL_18150_CLM_5001_contract_APIs_event_with_status_trans_his -->|unnamed| getBusinessEvents_getBusinessEvents
    CBL_18150_CLM_5001_contract_APIs_event_with_status_trans_his -->|unnamed| getStatusTransitions_getStatusTransitions
    CBL_18150_CLM_5001_contract_APIs_event_with_status_trans_his -->|unnamed| getRefinancedContracts_getRefinancedContracts
```
