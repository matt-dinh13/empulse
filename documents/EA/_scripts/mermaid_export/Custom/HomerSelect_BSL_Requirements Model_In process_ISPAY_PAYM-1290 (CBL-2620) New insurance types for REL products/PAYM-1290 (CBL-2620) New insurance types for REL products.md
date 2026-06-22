# PAYM-1290 (CBL-2620) New insurance types for REL products

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1290 (CBL-2620) New insurance types for REL products
- **Diagram ID**: 104288
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph TD
    ADD_Generate_INS_outgoing_payment["{ADD}Generate INS outgoing payment "]
    ADD_Generate_INR_outgoing_payment["{ADD}Generate INR outgoing payment"]
    MOD_05_098_Create_outgoing_payment_on_external_request["{MOD}05.098 Create outgoing payment on external request"]
    MOD_05_091_Generate_outgoing_payment_insurance["{MOD}05.091 Generate outgoing payment - insurance"]
    MOD_05_320_Create_payment_channel_on_external_request["{MOD}05.320 Create payment channel on external request"]
    PaymentChannelWS_PaymentChannelWS["PaymentChannelWS : PaymentChannelWS"]
    OutgoingPaymentsWS_OutgoingPaymentsWS["OutgoingPaymentsWS : OutgoingPaymentsWS"]
    MOD_05_098_Create_outgoing_payment_on_external_request -->|unnamed| ADD_Generate_INR_outgoing_payment
    MOD_05_091_Generate_outgoing_payment_insurance -->|unnamed| ADD_Generate_INR_outgoing_payment
    MOD_05_098_Create_outgoing_payment_on_external_request -->|unnamed| ADD_Generate_INS_outgoing_payment
    MOD_05_091_Generate_outgoing_payment_insurance -->|unnamed| ADD_Generate_INS_outgoing_payment
```
