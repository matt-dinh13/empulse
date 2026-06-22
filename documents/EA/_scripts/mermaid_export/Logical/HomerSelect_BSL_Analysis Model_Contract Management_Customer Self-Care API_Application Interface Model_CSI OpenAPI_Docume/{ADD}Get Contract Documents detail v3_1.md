# {ADD}Get Contract Documents detail v3

```mermaid
classDiagram
    class ADD_DmsFile["{ADD}DmsFile"]
    class MOD_DocumentData["{MOD}DocumentData"]
    class DocumentProofCheck["DocumentProofCheck"]
    class ContractDocument["ContractDocument"]
    class DocumentAttribute["DocumentAttribute"]
    class ContractDocuments["ContractDocuments"]
    class GetContractDocumentsRequest["GetContractDocumentsRequest"]
    class n_01_790_Get_Contract_Documents_detail_service["01.790 Get Contract Documents detail service"]
    class Application_Interface_Model_Application_Interface_Model["Application Interface Model : Application Interface Model"]
    class Document_Services["Document Services"]
    class documents["documents"]
    MOD_DocumentData --> DocumentAttribute : unnamed
    ContractDocuments --> ContractDocument : unnamed
    MOD_DocumentData --> DocumentProofCheck : unnamed
    ContractDocument --> MOD_DocumentData : unnamed
    MOD_DocumentData --> ADD_DmsFile : unnamed
    Document_Services --> ContractDocuments : unnamed
    Document_Services --> GetContractDocumentsRequest : unnamed
    Document_Services --> n_01_790_Get_Contract_Documents_detail_service : unnamed
    Document_Services --> documents : unnamed
```
