# Consumed JMS messages - DisbursementMessage

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/DisbursementMessage
- **Diagram ID**: 92752
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class MOD_05_701_Process_DisbursementMessage["{MOD}05.701 Process DisbursementMessage"]
    class Use_case_Model_Process_DisbursementMessage["Use case Model : Process DisbursementMessage"]
    class Types_Types_AttributesDto["Types : Types - AttributesDto"]
    class AttributesDto["AttributesDto"]
    class TransactionSourceIdDto["TransactionSourceIdDto"]
    class DisbursementMessageDto["DisbursementMessageDto"]
    class DisbursementMessage["DisbursementMessage"]
    Types_Types_AttributesDto --> AttributesDto : unnamed
    Use_case_Model_Process_DisbursementMessage --> DisbursementMessage : unnamed
    DisbursementMessage ..> DisbursementMessageDto : unnamed
    DisbursementMessageDto ..> AttributesDto : unnamed
    DisbursementMessageDto ..> TransactionSourceIdDto : unnamed
```
