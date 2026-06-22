# Big

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Document Management System/Big
- **Diagram ID**: 77489
- **Elements**: 10
- **Connectors**: 5

```mermaid
classDiagram
    class GetContentBatchResponse["GetContentBatchResponse"]
    class GetContentBatchRequest["GetContentBatchRequest"]
    class GetBigDocumentDataResponse["GetBigDocumentDataResponse"]
    class GetBigDocumentDataRequest["GetBigDocumentDataRequest"]
    class UpdateBigDocumentResponse["UpdateBigDocumentResponse"]
    class UpdateBigDocumentRequest["UpdateBigDocumentRequest"]
    class CreateBigDocumentRequest["CreateBigDocumentRequest"]
    class CreateBigDocumentResponse["CreateBigDocumentResponse"]
    class AbstractDocumentRequest["AbstractDocumentRequest"]
    class AbstractRequest["AbstractRequest"]
    AbstractRequest <|-- GetContentBatchRequest : unnamed
    AbstractRequest <|-- CreateBigDocumentRequest : unnamed
    AbstractRequest <|-- AbstractDocumentRequest : unnamed
    AbstractDocumentRequest <|-- GetBigDocumentDataRequest : unnamed
    AbstractDocumentRequest <|-- UpdateBigDocumentRequest : unnamed
```
