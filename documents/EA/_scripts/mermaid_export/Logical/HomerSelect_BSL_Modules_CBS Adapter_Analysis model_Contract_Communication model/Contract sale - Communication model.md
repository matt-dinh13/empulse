# Contract sale - Communication model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model
- **Diagram ID**: 60126
- **Elements**: 10
- **Connectors**: 8

```mermaid
classDiagram
    class Determinate_a_result_code_for_output_JMS_message_from_RESULT["Determinate a result code for output JMS message from RESULT190"]
    class Process_RESULT190_record["Process RESULT190 record"]
    class Generating_SaleContractResponse["Generating SaleContractResponse"]
    class DEL_SaleContractResponse["{DEL}SaleContractResponse"]
    class RESULT190["RESULT190"]
    class CommResult["CommResult"]
    class Processing_SaleContractRequest["Processing SaleContractRequest"]
    class Legend["Legend"]
    class DEL_SaleContractRequest["{DEL}SaleContractRequest"]
    class SECCREDIT170["SECCREDIT170"]
    DEL_SaleContractRequest ..> SECCREDIT170 : unnamed
    DEL_SaleContractRequest ..> Processing_SaleContractRequest : unnamed
    Generating_SaleContractResponse ..> Determinate_a_result_code_for_output_JMS_message_from_RESULT : unnamed
    Process_RESULT190_record ..> Generating_SaleContractResponse : unnamed
    RESULT190 ..> Process_RESULT190_record : unnamed
    RESULT190 ..> DEL_SaleContractResponse : unnamed
    RESULT190 ..> CommResult : unnamed
    SECCREDIT170 ..> CommResult : unnamed
```
