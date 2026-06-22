# DDS Requests - file structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model/DDSRequest - file structure
- **Diagram ID**: 98543
- **Elements**: 10
- **Connectors**: 7

```mermaid
classDiagram
    class AttributeDto["AttributeDto"]
    class DDSRequestProcessingResultItemDto["DDSRequestProcessingResultItemDto"]
    class Use_Case_DDS_requests["Use Case : DDS requests"]
    class DDSRequestProcessingResultTypeDto["DDSRequestProcessingResultTypeDto"]
    class DDSRequestProcessingResultDto["DDSRequestProcessingResultDto"]
    class DDSRequestTypeDto["DDSRequestTypeDto"]
    class DDSRequestsDataProcessingResultTypeDto["DDSRequestsDataProcessingResultTypeDto"]
    class DDSRequestDto["DDSRequestDto"]
    class DDSRequestDataProcessingResultDto["DDSRequestDataProcessingResultDto"]
    class DDSRequestDataDto["DDSRequestDataDto"]
    DDSRequestDataDto ..> DDSRequestDto : unnamed
    DDSRequestDataProcessingResultDto ..> DDSRequestsDataProcessingResultTypeDto : unnamed
    DDSRequestDataProcessingResultDto ..> DDSRequestProcessingResultDto : unnamed
    DDSRequestDto ..> AttributeDto : unnamed
    DDSRequestDto ..> DDSRequestTypeDto : unnamed
    DDSRequestProcessingResultDto ..> DDSRequestProcessingResultItemDto : unnamed
    DDSRequestProcessingResultDto ..> DDSRequestProcessingResultTypeDto : unnamed
```
