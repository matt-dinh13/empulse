# GetDebtPairingConditions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/GetDebtPairingConditions
- **Diagram ID**: 155606
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Highest_DPD_historically_priority_pairing_method["Highest DPD historically priority pairing method"]
    class pairingConditionsResponse["pairingConditionsResponse"]
    class pairingConditionsRequest["pairingConditionsRequest"]
    class GetDebtPairingConditions["GetDebtPairingConditions"]
    GetDebtPairingConditions ..> pairingConditionsRequest : unnamed
    GetDebtPairingConditions ..> pairingConditionsResponse : unnamed
    GetDebtPairingConditions ..> Highest_DPD_historically_priority_pairing_method : unnamed
```
