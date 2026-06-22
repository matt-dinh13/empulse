# List of communication

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/ClientCommunicationHistoryWS
- **Diagram ID**: 146245
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class Muid["Muid"]
    class ResultDetail["ResultDetail"]
    class CommunicationRecord["CommunicationRecord"]
    class ClientCommunicationHistoryResponse["ClientCommunicationHistoryResponse"]
    class ClientCommunicationHistoryRequest["ClientCommunicationHistoryRequest"]
    class OSB_Get_communication_history["OSB Get communication history"]
    class ClientCommunicationHistoryWS["ClientCommunicationHistoryWS"]
    ClientCommunicationHistoryWS --> ClientCommunicationHistoryRequest : unnamed
    ClientCommunicationHistoryWS --> ClientCommunicationHistoryResponse : unnamed
    OSB_Get_communication_history ..> ClientCommunicationHistoryWS : unnamed
    ClientCommunicationHistoryResponse ..> CommunicationRecord : unnamed
    CommunicationRecord ..> Muid : unnamed
    CommunicationRecord ..> ResultDetail : unnamed
```
