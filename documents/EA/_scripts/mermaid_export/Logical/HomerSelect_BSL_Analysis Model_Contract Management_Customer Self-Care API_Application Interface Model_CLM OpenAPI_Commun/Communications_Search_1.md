# Communications/Search

```mermaid
classDiagram
    class ADD_communications_search["{ADD}communications/search"]
    class BSL_OpenAPI["BSL OpenAPI"]
    class communications["communications"]
    class n_07_131_Get_communication_history["07.131 Get communication history"]
    class MUID["MUID"]
    class ResultDetail["ResultDetail"]
    class CommunicationRecord["CommunicationRecord"]
    class CommunicationResponse["CommunicationResponse"]
    class CommunicationRequest["CommunicationRequest"]
    ADD_communications_search --> CommunicationRequest : unnamed
    ADD_communications_search --> CommunicationResponse : unnamed
    CommunicationResponse --> CommunicationRecord : unnamed
    CommunicationRecord --> ResultDetail : unnamed
    CommunicationRecord --> MUID : unnamed
    ADD_communications_search --> n_07_131_Get_communication_history : unnamed
    communications --> ADD_communications_search : /search
```
