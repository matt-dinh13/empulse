# Contract Service Requests

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests
- **Diagram ID**: 163321
- **Elements**: 12
- **Connectors**: 9

```mermaid
classDiagram
    class ADD_LRESServiceRequest["{ADD}LRESServiceRequest"]
    class ADD_CHDDRServiceRequest["{ADD}CHDDRServiceRequest"]
    class PayholServiceRequest["PayholServiceRequest"]
    class Use_Case_Model_Customer_Self_Care_API_Use_Case_Model["Use Case Model :Customer Self-Care API - Use Case Model"]
    class Application_Interface_Model_Application_Interface_Model["Application Interface Model : Application Interface Model"]
    class n_01_761_Get_contract_service_requests_for_self_care["01.761 Get contract service requests for self-care"]
    class Contract_Service_Request_Services["Contract Service Request Services"]
    class EarlyRepaymentServiceRequest["EarlyRepaymentServiceRequest"]
    class LoanServiceRequest["LoanServiceRequest"]
    class GetContractServiceRequestsResponse["GetContractServiceRequestsResponse"]
    class GetContractServiceRequestsRequest["GetContractServiceRequestsRequest"]
    class requests["requests"]
    requests o-- Contract_Service_Request_Services : unnamed
    Contract_Service_Request_Services ..> GetContractServiceRequestsRequest : unnamed
    GetContractServiceRequestsResponse o-- LoanServiceRequest : unnamed
    Contract_Service_Request_Services ..> GetContractServiceRequestsResponse : unnamed
    LoanServiceRequest <|-- ADD_CHDDRServiceRequest : unnamed
    LoanServiceRequest <|-- PayholServiceRequest : unnamed
    LoanServiceRequest <|-- ADD_LRESServiceRequest : unnamed
    LoanServiceRequest <|-- EarlyRepaymentServiceRequest : unnamed
    Contract_Service_Request_Services --> n_01_761_Get_contract_service_requests_for_self_care : unnamed
```
