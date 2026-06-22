# ContractStatusWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/{DEL CLM-4390 /}ContractStatusWS
- **Diagram ID**: 139251
- **Elements**: 5
- **Connectors**: 2

```mermaid
classDiagram
    class CBL_14057_CLM_4390_Decommission_ContractStatusWS_SOAP_CBL_14["CBL-14057 (CLM-4390) Decommission ContractStatusWS SOAP : CBL-14057 (CLM-4390) Decommission ContractStatusWS SOAP"]
    class Collection_system["Collection system"]
    class CloseInstallmentRequest["CloseInstallmentRequest"]
    class PayoffItem["PayoffItem"]
    class ContractStatusWS["ContractStatusWS"]
    ContractStatusWS ..> CloseInstallmentRequest : unnamed
    CloseInstallmentRequest o-- PayoffItem : unnamed
```
