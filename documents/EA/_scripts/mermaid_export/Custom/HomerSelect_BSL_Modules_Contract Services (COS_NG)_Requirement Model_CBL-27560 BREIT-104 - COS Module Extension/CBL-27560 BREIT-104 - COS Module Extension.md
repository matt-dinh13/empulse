# CBL-27560 BREIT-104 - COS Module Extension

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Requirement Model/CBL-27560 BREIT-104 - COS Module Extension
- **Diagram ID**: 160500
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    Contract_Services_Adding_Loan_Service_to_Contract_method_COS["Contract Services : Adding Loan Service to Contract method (COS)"]
    Use_Case_Model_Adding_Service_to_Contract_Use_Case_Model["Use Case Model : Adding Service to Contract - Use Case Model"]
    Contract_Service_Notifications_Contract_Service_Notification["Contract Service Notifications : Contract Service Notifications"]
    CSI_3734_COS_Extend_ContractService_notification_with_additi["CSI-3734 COS - Extend ContractService notification with additional service parameters"]
    CSI_3733_COS_Extend_Create_ContractService_method_with_addit["
CSI-3733 COS - Extend Create ContractService method with additional parameters"]
    Use_Case_Model_Adding_Service_to_Contract_Use_Case_Model -->|unnamed| CSI_3733_COS_Extend_Create_ContractService_method_with_addit
    Contract_Services_Adding_Loan_Service_to_Contract_method_COS -->|unnamed| CSI_3733_COS_Extend_Create_ContractService_method_with_addit
    Contract_Service_Notifications_Contract_Service_Notification -->|unnamed| CSI_3734_COS_Extend_ContractService_notification_with_additi
```
