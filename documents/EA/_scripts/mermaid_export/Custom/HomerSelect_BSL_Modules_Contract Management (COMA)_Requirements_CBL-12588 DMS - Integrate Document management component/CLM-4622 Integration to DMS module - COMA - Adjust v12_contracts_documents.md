# CLM-4622 Integration to DMS module - COMA - Adjust v12/contracts/documents

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12588 DMS - Integrate Document management component in HoSel system/CLM-4622 Integration to DMS module - COMA - Adjust v12/contracts/documents
- **Diagram ID**: 156230
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    createContractDocument_createContractDocument["createContractDocument : createContractDocument"]
    getContractDocuments_getContractDocuments["getContractDocuments : getContractDocuments"]
    createContractDocuments_createContractDocuments["createContractDocuments : createContractDocuments"]
    deleteContractDocument_deleteContractDocument["deleteContractDocument : deleteContractDocument"]
    Adjust_v12_contracts_documents["Adjust v12/contracts/documents"]
    Adjust_v12_contracts_documents -->|unnamed| deleteContractDocument_deleteContractDocument
    Adjust_v12_contracts_documents -->|unnamed| createContractDocuments_createContractDocuments
    Adjust_v12_contracts_documents -->|unnamed| getContractDocuments_getContractDocuments
    Adjust_v12_contracts_documents -->|unnamed| createContractDocument_createContractDocument
```
