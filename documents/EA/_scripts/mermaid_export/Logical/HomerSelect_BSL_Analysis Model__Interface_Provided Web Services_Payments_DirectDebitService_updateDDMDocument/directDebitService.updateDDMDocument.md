# directDebitService.updateDDMDocument

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/updateDDMDocument
- **Diagram ID**: 126825
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ValidationResultDto["ValidationResultDto"]
    class DDMResultTypeDto["DDMResultTypeDto"]
    class updateDDMDocumentFault["updateDDMDocumentFault"]
    class updateDDMDocumentResponse["updateDDMDocumentResponse"]
    class updateDDMDocumentRequest["updateDDMDocumentRequest"]
    class DirectDebitService["DirectDebitService"]
    updateDDMDocumentFault ..> ValidationResultDto : unnamed
    updateDDMDocumentFault ..> DDMResultTypeDto : unnamed
    updateDDMDocumentRequest ..> DirectDebitService : unnamed
    DirectDebitService ..> updateDDMDocumentFault : unnamed
    DirectDebitService ..> updateDDMDocumentResponse : unnamed
```
