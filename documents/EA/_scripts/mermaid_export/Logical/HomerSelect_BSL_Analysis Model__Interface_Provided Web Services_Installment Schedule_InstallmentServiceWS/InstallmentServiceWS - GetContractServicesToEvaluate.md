# InstallmentServiceWS - GetContractServicesToEvaluate

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/InstallmentServiceWS
- **Diagram ID**: 117216
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_08_002_Check_contract_for_service_evaluation_on_external["{ADD}08.002 Check contract for service evaluation on external request"]
    class ADD_ResultDto["{ADD}ResultDto"]
    class ADD_ContractServicesDto["{ADD}ContractServicesDto"]
    class ADD_GetContractServicesToEvalResponse["{ADD}GetContractServicesToEvalResponse"]
    class ADD_CheckMomentTypeDto["{ADD}CheckMomentTypeDto"]
    class ADD_GetContractServicesToEvalRequest["{ADD}GetContractServicesToEvalRequest"]
    class InstallmentServiceWS["InstallmentServiceWS"]
    ADD_GetContractServicesToEvalResponse ..> ADD_ContractServicesDto : unnamed
    ADD_GetContractServicesToEvalResponse ..> ADD_ResultDto : unnamed
    ADD_GetContractServicesToEvalRequest ..> ADD_CheckMomentTypeDto : unnamed
    InstallmentServiceWS ..> ADD_GetContractServicesToEvalResponse : unnamed
    InstallmentServiceWS ..> ADD_GetContractServicesToEvalRequest : unnamed
```
