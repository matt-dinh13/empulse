# ContractDataSource (REST)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Data Source Management/ContractDataSource (REST)
- **Diagram ID**: 138358
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class GET_ContractDataSource["GET ContractDataSource"]
    class ContractDataSource["ContractDataSource"]
    class ContractDataSource["ContractDataSource"]
    class BSL["BSL"]
    BSL o-- ContractDataSource : /contractDataSource
    ContractDataSource --> ContractDataSource : unnamed
    GET_ContractDataSource <|.. ContractDataSource : unnamed
```
