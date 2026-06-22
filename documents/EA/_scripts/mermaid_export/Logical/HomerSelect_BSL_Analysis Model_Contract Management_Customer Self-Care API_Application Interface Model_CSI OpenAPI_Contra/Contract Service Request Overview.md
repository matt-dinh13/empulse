# Contract Service Request Overview

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests
- **Diagram ID**: 163322
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class ContractServiceRequest["ContractServiceRequest"]
    class requests["requests"]
    class List_of_used_HTTP_status_codes["List of used HTTP status codes"]
    class Application_Interface_Model_Application_Interface_Model["Application Interface Model : Application Interface Model"]
    class GetContractServiceRequestOverviewResponse["GetContractServiceRequestOverviewResponse"]
    class GetContractServiceRequestOverviewRequest["GetContractServiceRequestOverviewRequest"]
    class n_01_768_Get_Contract_Service_Request_Overview["01.768 Get Contract Service Request Overview"]
    class Contract_Service_Request_Services["Contract Service Request Services"]
    Contract_Service_Request_Services --> n_01_768_Get_Contract_Service_Request_Overview : unnamed
    Contract_Service_Request_Services --> GetContractServiceRequestOverviewRequest : unnamed
    Contract_Service_Request_Services --> GetContractServiceRequestOverviewResponse : unnamed
    Contract_Service_Request_Services --> List_of_used_HTTP_status_codes : unnamed
    requests o-- Contract_Service_Request_Services : unnamed
    GetContractServiceRequestOverviewResponse ..> ContractServiceRequest : unnamed
```
