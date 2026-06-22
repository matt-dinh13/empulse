# CLM-847 (CBL-1619) Printing preliminary IS for PAYHOL service request

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-847 (CBL-1619) Printing preliminary IS for PAYHOL service request
- **Diagram ID**: 103468
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    HO_SERVICE_REQUEST_DATA_HO_SERVICE_REQUEST_DATA["HO_SERVICE_REQUEST_DATA : HO_SERVICE_REQUEST_DATA"]
    Logical_Data_Model_Loan_Service_Request_domain["Logical Data Model : Loan Service Request domain"]
    Use_Case_Model_Payment_holiday_request_creation["Use Case Model : Payment holiday request creation"]
    REQ_1_System_supports_priting_of_Service_Offer_Installments_["REQ#1 - System supports priting of Service Offer Installments for Payment Holiday service"]
    Printing_preliminary_IS_for_PAYHOL_service_request["Printing preliminary IS for PAYHOL service request"]
    REQ_1_System_supports_priting_of_Service_Offer_Installments_ -->|unnamed| Printing_preliminary_IS_for_PAYHOL_service_request
    Use_Case_Model_Payment_holiday_request_creation -->|unnamed| REQ_1_System_supports_priting_of_Service_Offer_Installments_
    Logical_Data_Model_Loan_Service_Request_domain -->|unnamed| REQ_1_System_supports_priting_of_Service_Offer_Installments_
    HO_SERVICE_REQUEST_DATA_HO_SERVICE_REQUEST_DATA -->|unnamed| REQ_1_System_supports_priting_of_Service_Offer_Installments_
```
