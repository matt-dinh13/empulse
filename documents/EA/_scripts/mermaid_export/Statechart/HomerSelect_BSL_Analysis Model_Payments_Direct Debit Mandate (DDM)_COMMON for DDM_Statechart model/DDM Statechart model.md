# DDM Statechart model

- **Diagram Type**: Statechart
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Statechart model
- **Diagram ID**: 80221
- **Elements**: 15
- **Connectors**: 25

```mermaid
stateDiagram-v2
    state "CNC (Canceled)" as CNC_Canceled
    state "DDM creation" as DDM_creation
    state "Final" as Final
    state "R (Rejected)" as R_Rejected
    state "A (Approved)" as A_Approved
    state "Confirmation received?" as Confirmation_received
    state "U (Unknown)" as U_Unknown
    state "Final" as Final
    state "FIN (Finished)" as FIN_Finished
    state "RFC (Received From Confirmation)" as RFC_Received_From_Confirmation
    state "SFC (Sent For Confirmation)" as SFC_Sent_For_Confirmation
    state "AVAIL (Available)" as AVAIL_Available
    state "NEW (New)" as NEW_New
    state "01.080 DDM created in application form" as n_01_080_DDM_created_in_application_form
    state "01.420 DDM created at back office" as n_01_420_DDM_created_at_back_office
    RFC_Received_From_Confirmation --> FIN_Finished : unnamed
    SFC_Sent_For_Confirmation --> CNC_Canceled : unnamed
    AVAIL_Available --> CNC_Canceled : unnamed
    NEW_New --> CNC_Canceled : unnamed
    R_Rejected --> Final : unnamed
    A_Approved --> Final : unnamed
    Confirmation_received --> R_Rejected : unnamed
    Confirmation_received --> A_Approved : unnamed
    U_Unknown --> Confirmation_received : unnamed
    NEW_New --> U_Unknown : unnamed
    DDM_creation --> U_Unknown : unnamed
    RFC_Received_From_Confirmation --> CNC_Canceled : unnamed
    FIN_Finished --> Final : unnamed
    n_01_420_DDM_created_at_back_office --> NEW_New : unnamed
    Confirmation_received --> RFC_Received_From_Confirmation : unnamed
    RFC_Received_From_Confirmation --> RFC_Received_From_Confirmation : unnamed
    SFC_Sent_For_Confirmation --> RFC_Received_From_Confirmation : unnamed
    SFC_Sent_For_Confirmation --> SFC_Sent_For_Confirmation : unnamed
    AVAIL_Available --> SFC_Sent_For_Confirmation : unnamed
    NEW_New --> AVAIL_Available : unnamed
    NEW_New --> AVAIL_Available : unnamed
    AVAIL_Available --> AVAIL_Available : unnamed
    NEW_New --> NEW_New : unnamed
    n_01_080_DDM_created_in_application_form --> NEW_New : unnamed
    CNC_Canceled --> Final : unnamed
```
