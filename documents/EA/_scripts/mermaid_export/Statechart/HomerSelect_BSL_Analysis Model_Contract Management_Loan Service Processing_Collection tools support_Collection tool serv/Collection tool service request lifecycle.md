# Collection tool service request lifecycle

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tool service lifecycle
- **Diagram ID**: 75353
- **Elements**: 25
- **Connectors**: 35

```mermaid
stateDiagram-v2
    state "Synch" as Synch
    state "unnamed" as s_965122
    state "unnamed" as s_965121
    state "REJECTED" as REJECTED
    state "Registered" as Registered
    state "Ready for Registration" as Ready_for_Registration
    state "Not Ready for Registration" as Not_Ready_for_Registration
    state "Contract Supplement Document" as Contract_Supplement_Document
    state "unnamed" as s_965123
    state "Final" as Final
    state "EXECUTED" as EXECUTED
    state "SIGNED" as SIGNED
    state "APPROVED" as APPROVED
    state "ACCEPTED" as ACCEPTED
    state "Synch" as Synch
    state "CANCELLED" as CANCELLED
    state "IN_PROCESS" as IN_PROCESS
    state "CREATED" as CREATED
    state "unnamed" as s_965143
    state "Loan Service Request" as Loan_Service_Request
    state "Contract Supplement" as Contract_Supplement
    state "Ask for collection tool service" as Ask_for_collection_tool_service
    state "Service applied on the contract" as Service_applied_on_the_contract
    state "Registration process" as Registration_process
    state "Request creation and approval" as Request_creation_and_approval
    Not_Ready_for_Registration --> Ready_for_Registration : unnamed
    APPROVED --> SIGNED : unnamed
    CREATED --> EXECUTED : unnamed
    REJECTED --> Final : unnamed
    Registered --> Final : unnamed
    CANCELLED --> Final : unnamed
    ACCEPTED --> Final : unnamed
    CREATED --> Synch : unnamed
    Contract_Supplement_Document --> Not_Ready_for_Registration : unnamed
    Not_Ready_for_Registration --> APPROVED : unnamed
    s_965122 --> Ready_for_Registration : unnamed
    Ready_for_Registration --> Registered : unnamed
    s_965122 --> Registered : unnamed
    s_965121 --> REJECTED : unnamed
    Synch --> REJECTED : unnamed
    IN_PROCESS --> Synch : unnamed
    EXECUTED --> Final : unnamed
    SIGNED --> Synch : unnamed
    Contract_Supplement_Document --> Contract_Supplement : unnamed
    Ask_for_collection_tool_service --> s_965143 : unnamed
    Loan_Service_Request --> CREATED : unnamed
    s_965143 --> CREATED : unnamed
    s_965123 --> IN_PROCESS : unnamed
    Contract_Supplement --> IN_PROCESS : unnamed
    Registered --> SIGNED : unnamed
    Synch --> CANCELLED : unnamed
    Ready_for_Registration --> APPROVED : unnamed
    CREATED --> Synch : unnamed
    APPROVED --> Synch : unnamed
    IN_PROCESS --> Synch : unnamed
    SIGNED --> ACCEPTED : unnamed
    s_965121 --> APPROVED : unnamed
    IN_PROCESS --> APPROVED : unnamed
    Loan_Service_Request --> Contract_Supplement : unnamed
    s_965143 --> IN_PROCESS : unnamed
```
