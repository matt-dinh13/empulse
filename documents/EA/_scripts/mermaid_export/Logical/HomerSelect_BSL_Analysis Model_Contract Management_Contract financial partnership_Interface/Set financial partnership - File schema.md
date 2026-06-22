# Set financial partnership - File schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Interface
- **Diagram ID**: 101801
- **Elements**: 11
- **Connectors**: 5

```mermaid
classDiagram
    class ContractJFSPartnership["ContractJFSPartnership"]
    class ContractFinancialPartnership["ContractFinancialPartnership"]
    class RequestBody["RequestBody"]
    class RequestHeader["RequestHeader"]
    class BulkRequestFault["BulkRequestFault"]
    class BulkProcessingResult["BulkProcessingResult"]
    class BulkRequest["BulkRequest"]
    class ProcessingResult["ProcessingResult"]
    class Request["Request"]
    class Result_file_structure["Result file structure"]
    class Request_file_structure["Request file structure"]
    RequestBody ..> Request : unnamed
    BulkRequest ..> RequestHeader : unnamed
    BulkProcessingResult ..> ProcessingResult : unnamed
    BulkRequest ..> RequestBody : unnamed
    ContractFinancialPartnership <|-- ContractJFSPartnership : unnamed
```
