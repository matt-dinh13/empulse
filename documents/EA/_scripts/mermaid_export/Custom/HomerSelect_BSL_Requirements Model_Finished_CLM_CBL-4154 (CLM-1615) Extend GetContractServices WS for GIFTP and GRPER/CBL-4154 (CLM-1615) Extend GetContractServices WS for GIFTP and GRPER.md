# CBL-4154 (CLM-1615) Extend GetContractServices WS for GIFTP and GRPER

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4154 (CLM-1615) Extend GetContractServices WS for GIFTP and GRPER
- **Diagram ID**: 111191
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    Logical_Data_Model_GRPER_Setting["Logical Data Model : GRPER Setting"]
    Logical_Data_Model_GIFTP_Setting["Logical Data Model : GIFTP Setting"]
    n_08_206_Evaluate_status_of_Fees_back["08.206 Evaluate status of Fees-back"]
    n_08_204_Evaluate_status_of_Grace_period["08.204 Evaluate status of Grace period"]
    n_08_202_Evaluate_status_of_Gift_payment["08.202 Evaluate status of Gift payment"]
    Contract_Services_Contract_Services_GET_contract_services["Contract Services : Contract Services - GET contract services"]
    REQ_1_extend_GetContractServices_API_by_new_attributes_for_G["REQ#1 - extend GetContractServices API by new attributes for GIFTP and GRPER"]
    Contract_Services_Contract_Services_GET_contract_services -->|unnamed| Logical_Data_Model_GRPER_Setting
    Contract_Services_Contract_Services_GET_contract_services -->|unnamed| Logical_Data_Model_GIFTP_Setting
    REQ_1_extend_GetContractServices_API_by_new_attributes_for_G -->|unnamed| Contract_Services_Contract_Services_GET_contract_services
```
