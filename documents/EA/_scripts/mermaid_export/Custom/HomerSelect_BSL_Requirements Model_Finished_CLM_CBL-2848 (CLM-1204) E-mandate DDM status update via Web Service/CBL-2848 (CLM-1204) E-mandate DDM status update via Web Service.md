# CBL-2848 (CLM-1204) E-mandate DDM status update via Web Service

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2848 (CLM-1204) E-mandate DDM status update via Web Service
- **Diagram ID**: 102542
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    ADD_01_781_Change_contract_DDM_status_service["{ADD}01.781 Change contract DDM status service"]
    Contract_Payment_Channel_Management_ContractPaymentChannelMa["Contract Payment Channel Management : ContractPaymentChannelManagementWS - ChangeContractDDMStatus"]
    REQ_1_Expose_API_for_change_Contract_DDM_status["REQ #1 - Expose API for change Contract DDM status"]
    Contract_Payment_Channel_Management_ContractPaymentChannelMa -->|unnamed| REQ_1_Expose_API_for_change_Contract_DDM_status
    ADD_01_781_Change_contract_DDM_status_service -->|unnamed| REQ_1_Expose_API_for_change_Contract_DDM_status
```
