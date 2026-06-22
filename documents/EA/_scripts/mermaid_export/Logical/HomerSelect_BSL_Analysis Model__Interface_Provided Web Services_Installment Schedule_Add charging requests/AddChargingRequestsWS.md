# AddChargingRequestsWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/Add charging requests
- **Diagram ID**: 51577
- **Elements**: 7
- **Connectors**: 4

```mermaid
classDiagram
    class n_04_123_Automatic_add_charging_requests["04.123 Automatic add charging requests"]
    class TRS_WUS["TRS (WUS)"]
    class diagram_25243EA4_D216_40ea_971E_1361116F184F["$diagram://{25243EA4-D216-40ea-971E-1361116F184F}"]
    class ROW["ROW"]
    class ROWSET["ROWSET"]
    class AutomaticChargingRequestsImportWS["AutomaticChargingRequestsImportWS"]
    class BSL["BSL"]
    AutomaticChargingRequestsImportWS --> ROWSET : unnamed
    AutomaticChargingRequestsImportWS ..> ROWSET : use
    ROW --> ROWSET : unnamed
    TRS_WUS --> n_04_123_Automatic_add_charging_requests : unnamed
```
