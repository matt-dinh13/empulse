# CBL-4161 (CLM-1598)  Add co-lending partner information in ContractFullInfo and DDM WS

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4161 (CLM-1598)  Add co-lending partner information in ContractFullInfo and DDM WS
- **Diagram ID**: 109436
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph TD
    REQ_2_Add_co_lending_partner_information_in_ContractFullInfo["REQ#2 - Add co-lending partner information in ContractFullInfo"]
    Contract_Notifications_Contract_full_info_notification["Contract Notifications : Contract full info notification"]
    createDDM_DirectDebitService_createDDM["createDDM : DirectDebitService.createDDM"]
    MOD_14_421_Create_DDM_via_WS["{MOD}14.421 Create DDM via WS"]
    Logical_Data_Model_Contract_Party_roles["Logical Data Model : Contract - Party roles"]
    n_01_776_Create_contract_DDM_service["01.776 Create contract DDM service"]
    Contract_Payment_Channel_Management_ContractPaymentChannelMa["Contract Payment Channel Management : ContractPaymentChannelManagementWS - CreateContractDDM API"]
    REQ_1_Add_co_lending_partner_information_in_DDM_WS["REQ#1 - Add co-lending partner information in DDM WS"]
    REQ_1_Add_co_lending_partner_information_in_DDM_WS -->|unnamed| n_01_776_Create_contract_DDM_service
    REQ_2_Add_co_lending_partner_information_in_ContractFullInfo -->|unnamed| Contract_Notifications_Contract_full_info_notification
    MOD_14_421_Create_DDM_via_WS -->|unnamed| createDDM_DirectDebitService_createDDM
```
