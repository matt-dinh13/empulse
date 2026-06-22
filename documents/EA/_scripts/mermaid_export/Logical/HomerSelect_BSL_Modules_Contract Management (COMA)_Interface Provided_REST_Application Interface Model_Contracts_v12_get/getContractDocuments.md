# getContractDocuments

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/getContractDocuments
- **Diagram ID**: 160400
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class RelationQuery["RelationQuery"]
    class ContractRequestPathParam["ContractRequestPathParam"]
    class Contract["Contract"]
    class MOD_Get_documents_for_contract["{MOD}Get documents for contract"]
    class MOD_ContractDocument["{MOD}ContractDocument"]
    class MOD_Get_contract_documents["{MOD}Get contract documents"]
    MOD_Get_contract_documents ..> MOD_Get_documents_for_contract : unnamed
    Contract ..> RelationQuery : Request query
    Contract ..> MOD_ContractDocument : Response
    Contract ..> MOD_Get_contract_documents : unnamed
    Contract ..> ContractRequestPathParam : Request path parameter(s)
```
