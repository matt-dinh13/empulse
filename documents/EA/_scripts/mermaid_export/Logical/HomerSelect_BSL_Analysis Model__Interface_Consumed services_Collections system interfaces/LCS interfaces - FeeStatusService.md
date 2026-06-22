# LCS interfaces - FeeStatusService

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces
- **Diagram ID**: 97670
- **Elements**: 10
- **Connectors**: 7

```mermaid
classDiagram
    class Charge_Fee_Result_Type["Charge Fee Result Type"]
    class Cancel_Fee_Result_Type["Cancel Fee Result Type"]
    class MOD_04_130_Cancel_fees["{MOD}04.130 Cancel fees"]
    class MOD_04_140_Charge_fees["{MOD}04.140 Charge fees"]
    class CancelFeeResultDTO["CancelFeeResultDTO"]
    class ChargeFeeResultDTO["ChargeFeeResultDTO"]
    class n_03_090_Remove_installment_manually["03.090 Remove installment manually"]
    class FeeItem["FeeItem"]
    class CancelFeeItem["CancelFeeItem"]
    class FeeStatusService["FeeStatusService"]
    n_03_090_Remove_installment_manually ..> FeeStatusService : unnamed
    ChargeFeeResultDTO ..> FeeItem : unnamed
    FeeStatusService --> ChargeFeeResultDTO : unnamed
    FeeStatusService ..> CancelFeeResultDTO : unnamed
    CancelFeeResultDTO ..> CancelFeeItem : unnamed
    MOD_04_140_Charge_fees ..> FeeStatusService : unnamed
    MOD_04_130_Cancel_fees ..> FeeStatusService : unnamed
```
