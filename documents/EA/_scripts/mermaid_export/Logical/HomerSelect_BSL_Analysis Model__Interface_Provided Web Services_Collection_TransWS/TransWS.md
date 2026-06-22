# TransWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS
- **Diagram ID**: 162663
- **Elements**: 16
- **Connectors**: 18

```mermaid
classDiagram
    class Collection_system["Collection system"]
    class GetPaymentsResponse["GetPaymentsResponse"]
    class GetPaymentsFilter["GetPaymentsFilter"]
    class CancelFeesRequest["CancelFeesRequest"]
    class GetFeesResponse["GetFeesResponse"]
    class GetFeesFilter["GetFeesFilter"]
    class ChargeFeesRequest["ChargeFeesRequest"]
    class MOD_04_140_Charge_fees["{MOD}04.140 Charge fees"]
    class MOD_04_130_Cancel_fees["{MOD}04.130 Cancel fees"]
    class ChargeFeeItem["ChargeFeeItem"]
    class CancelFeeItem["CancelFeeItem"]
    class Fee["Fee"]
    class n_04_120_Get_fees["04.120 Get fees"]
    class n_05_340_Get_payments["05.340 Get payments"]
    class PaymentDto["PaymentDto"]
    class TransWS["TransWS"]
    Collection_system --> MOD_04_130_Cancel_fees : unnamed
    Collection_system --> MOD_04_140_Charge_fees : unnamed
    Collection_system --> n_05_340_Get_payments : unnamed
    Collection_system --> n_04_120_Get_fees : unnamed
    TransWS ..> n_04_120_Get_fees : unnamed
    ChargeFeesRequest o-- ChargeFeeItem : unnamed
    CancelFeesRequest o-- CancelFeeItem : unnamed
    GetFeesResponse o-- Fee : unnamed
    TransWS ..> CancelFeesRequest : unnamed
    TransWS ..> GetPaymentsFilter : unnamed
    TransWS ..> MOD_04_130_Cancel_fees : unnamed
    TransWS ..> MOD_04_140_Charge_fees : unnamed
    TransWS ..> ChargeFeesRequest : unnamed
    TransWS ..> GetFeesFilter : unnamed
    TransWS ..> GetPaymentsResponse : unnamed
    TransWS ..> GetFeesResponse : unnamed
    TransWS ..> n_05_340_Get_payments : unnamed
    GetPaymentsResponse o-- PaymentDto : unnamed
```
