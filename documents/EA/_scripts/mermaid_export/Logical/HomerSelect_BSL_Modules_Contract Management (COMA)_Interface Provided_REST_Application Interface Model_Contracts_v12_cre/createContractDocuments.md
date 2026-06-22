# createContractDocuments

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/createContractDocuments
- **Diagram ID**: 160394
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ContractDocumentsBulkRequestPathParam["ContractDocumentsBulkRequestPathParam"]
    class CreateContractDocumentDtoV12["CreateContractDocumentDtoV12"]
    class ContractDocumentsBulkRequestBody["ContractDocumentsBulkRequestBody"]
    class DocumentId["DocumentId"]
    class ADD_Create_contract_documents_bulk["{ADD}Create contract documents (bulk)"]
    ContractDocumentsBulkRequestBody ..> CreateContractDocumentDtoV12 : unnamed
    DocumentId ..> ContractDocumentsBulkRequestBody : Request Body
    DocumentId ..> ContractDocumentsBulkRequestPathParam : Request path parameter(s)
    DocumentId ..> ADD_Create_contract_documents_bulk : unnamed
```
