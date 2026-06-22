# Contract securitization - file structure 

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Interface model
- **Diagram ID**: 109358
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class TrancheHeader["TrancheHeader"]
    class SecuritizedContractDto["SecuritizedContractDto"]
    class SecuritizedContractListDto["SecuritizedContractListDto"]
    class SecuritizationTrancheDto["SecuritizationTrancheDto"]
    class ContractSecuritizationImportFile["ContractSecuritizationImportFile"]
    ContractSecuritizationImportFile ..> SecuritizationTrancheDto : unnamed
    SecuritizationTrancheDto ..> SecuritizedContractListDto : unnamed
    SecuritizedContractListDto ..> SecuritizedContractDto : unnamed
    SecuritizationTrancheDto ..> TrancheHeader : unnamed
```
