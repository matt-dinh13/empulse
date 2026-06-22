# Documents (DEPRECATED)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v1.0/Documents (DEPRECATED)
- **Diagram ID**: 159606
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class customer["customer"]
    class MOD_customers["(MOD)customers"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class MOD_01_763_Get_Contract_Documents_for_self_care["{MOD}01.763 Get Contract Documents for self-care"]
    class DocumentFile["DocumentFile"]
    class GetDocumentsResponse["GetDocumentsResponse"]
    class Document["Document"]
    Document o-- DocumentFile : unnamed
    GetDocumentsResponse o-- Document : unnamed
    MOD_customers ..> customer : /{cuid}
    BSL_OpenAPI ..> MOD_customers : /customers
```
