# Charging & Canceling fees component integration

- **Diagram Type**: Component
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Component model
- **Diagram ID**: 159986
- **Elements**: 13
- **Connectors**: 6

```mermaid
graph TD
    TransWS(("TransWS"))
    FeeStatusService(("FeeStatusService"))
    FeeStatusService(("FeeStatusService"))
    ProvidedWS(("ProvidedWS"))
    FeeStatusService(("FeeStatusService"))
    TransWS(("TransWS"))
    FeeStatusService(("FeeStatusService"))
    TransWS(("TransWS"))
    OSB[["OSB"]]
    Fees_Penalties[["Fees and Penalties"]]
    BSL["BSL"]
    LCS[["LCS"]]
    REL_Account_Management[["REL Account Management"]]
    TransWS -->|unnamed| ProvidedWS
    TransWS -->|unnamed| TransWS
    OSB -->|unnamed| FeeStatusService
    TransWS -->|unnamed| OSB
    FeeStatusService -->|unnamed| FeeStatusService
    FeeStatusService -->|unnamed| FeeStatusService
```
