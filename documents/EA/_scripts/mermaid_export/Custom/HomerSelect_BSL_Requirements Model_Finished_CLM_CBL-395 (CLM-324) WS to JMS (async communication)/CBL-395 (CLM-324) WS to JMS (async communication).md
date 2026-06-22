# CBL-395 (CLM-324) WS to JMS (async communication)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-395 (CLM-324) WS to JMS (async communication)
- **Diagram ID**: 111097
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph TD
    Contract_Pay_Off_request_Consumed_JMS_messages_Contract_Pay_["Contract Pay-Off request : Consumed JMS messages - Contract Pay-Off request"]
    Contract_Notifications_Contract_pay_off_request_processing_r["Contract Notifications : Contract pay-off request processing result"]
    UseCase_Model_Pay_off_contracts_from_external_system["UseCase Model : Pay-off contracts from external system"]
    Collections_system_interfaces_LCS_interface_TerminationStatu["Collections system interfaces : LCS interface - TerminationStatusService"]
    ContractStatusWS_ContractStatusWS["ContractStatusWS : ContractStatusWS"]
    REQ_1_New_integration_for_the_contract_pay_off_requests["REQ #1 - New integration for the contract pay-off requests"]
    Contract_Notifications_Contract_pay_off_request_processing_r -->|unnamed| REQ_1_New_integration_for_the_contract_pay_off_requests
    UseCase_Model_Pay_off_contracts_from_external_system -->|unnamed| REQ_1_New_integration_for_the_contract_pay_off_requests
    Collections_system_interfaces_LCS_interface_TerminationStatu -->|unnamed| REQ_1_New_integration_for_the_contract_pay_off_requests
    ContractStatusWS_ContractStatusWS -->|unnamed| REQ_1_New_integration_for_the_contract_pay_off_requests
    Contract_Pay_Off_request_Consumed_JMS_messages_Contract_Pay_ -->|unnamed| REQ_1_New_integration_for_the_contract_pay_off_requests
```
