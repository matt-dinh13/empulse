# InstallmentServiceWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS
- **Diagram ID**: 117215
- **Elements**: 16
- **Connectors**: 16

```mermaid
classDiagram
    class n_08_203_Calculate_Gift_Payment_Amount["08.203 Calculate Gift Payment Amount"]
    class Recalculation_Reason["Recalculation Reason"]
    class ADD_GiftPaymentAmountResponse["{ADD}GiftPaymentAmountResponse"]
    class GiftPaymentAmountRequest["GiftPaymentAmountRequest"]
    class CalculationStatus["CalculationStatus"]
    class External_Reference["External Reference"]
    class AmountToPay["AmountToPay"]
    class PayableItem["PayableItem"]
    class PayableItems["PayableItems"]
    class MOD_01_766_Simulate_CEL_service_application_to_IS_on_local_r["{MOD}01.766 Simulate CEL service application to IS on local request"]
    class ServiceParamDto["ServiceParamDto"]
    class MoneyDto["MoneyDto"]
    class CalculationInfoDto["CalculationInfoDto"]
    class ServiceSimulationResponse["ServiceSimulationResponse"]
    class ServiceSimulationRequest["ServiceSimulationRequest"]
    class InstallmentServiceWS["InstallmentServiceWS"]
    ServiceSimulationResponse ..> CalculationInfoDto : unnamed
    ServiceSimulationRequest ..> ServiceParamDto : unnamed
    GiftPaymentAmountRequest ..> Recalculation_Reason : unnamed
    ADD_GiftPaymentAmountResponse ..> MoneyDto : unnamed
    External_Reference ..> MoneyDto : External Reference
    AmountToPay ..> PayableItems : unnamed
    PayableItem ..> MoneyDto : unnamed
    PayableItems ..> PayableItem : unnamed
    CalculationInfoDto ..> CalculationStatus : unnamed
    InstallmentServiceWS ..> ServiceSimulationResponse : unnamed
    InstallmentServiceWS ..> GiftPaymentAmountRequest : unnamed
    InstallmentServiceWS ..> ServiceSimulationRequest : unnamed
    InstallmentServiceWS ..> MOD_01_766_Simulate_CEL_service_application_to_IS_on_local_r : unnamed
    InstallmentServiceWS ..> ADD_GiftPaymentAmountResponse : unnamed
    InstallmentServiceWS ..> n_08_203_Calculate_Gift_Payment_Amount : unnamed
    CalculationInfoDto ..> AmountToPay : unnamed
```
