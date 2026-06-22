# Logical Data Model - Contract Signing

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Logical Data Model
- **Diagram ID**: 145855
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class DMS_File["DMS File"]
    class Verification_result["Verification result"]
    class Agreement_Verification["Agreement Verification"]
    class Agreement["Agreement"]
    class Document_Verification["Document Verification"]
    class Verification["Verification"]
    class Document["Document"]
    Verification <|-- Agreement_Verification : unnamed
    Verification <|-- Document_Verification : unnamed
    DMS_File --> DMS_File : unnamed
    Agreement --> DMS_File : has
    Verification ..> Verification_result : unnamed
    Document o-- Document_Verification : unnamed
    Agreement o-- Agreement_Verification : unnamed
```
