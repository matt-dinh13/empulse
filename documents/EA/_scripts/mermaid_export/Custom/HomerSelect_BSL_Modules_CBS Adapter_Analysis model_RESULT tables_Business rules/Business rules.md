# Business rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/RESULT tables/Business rules
- **Diagram ID**: 62750
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    Determinate_a_result_code_for_output_JMS_message_from_RESULT["Determinate a result code for output JMS message from RESULT190"]
    Generating_SaleContractResponse["Generating SaleContractResponse"]
    Process_RESULT190_record["Process RESULT190 record"]
    Create_RESULT290_record_from_an_incoming_message["Create RESULT290 record from an incoming message"]
    Determinate_RESULT290_result_code_from_an_incoming_message["Determinate RESULT290 result code  from an incoming message "]
    Create_RESULT290_record_from_an_incoming_message -->|unnamed| Determinate_RESULT290_result_code_from_an_incoming_message
    Process_RESULT190_record -->|unnamed| Generating_SaleContractResponse
    Generating_SaleContractResponse -->|unnamed| Determinate_a_result_code_for_output_JMS_message_from_RESULT
```
