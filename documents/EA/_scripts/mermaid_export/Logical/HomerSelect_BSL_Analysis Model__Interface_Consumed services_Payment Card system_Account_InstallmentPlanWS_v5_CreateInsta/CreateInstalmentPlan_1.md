# CreateInstalmentPlan

```mermaid
classDiagram
    class CreateInstallmentPlanResultCodeDto["CreateInstallmentPlanResultCodeDto"]
    class InstallmentPlanOriginationDetailsDto["InstallmentPlanOriginationDetailsDto"]
    class InstallmentPlanOriginationDetailsBaseDto["InstallmentPlanOriginationDetailsBaseDto"]
    class n_01_184_Process_ContractSignTransactionsSE_event["01.184 Process ContractSignTransactionsSE event"]
    class MOD_05_350_Process_disbursement_confirmation_message["{MOD}05.350 Process disbursement confirmation message"]
    class MOD_05_310_Process_disbursement_confirmations["{MOD}05.310 Process disbursement confirmations"]
    class CreateInstallmentPlanResponse["CreateInstallmentPlanResponse"]
    class CreateInstallmentPlanRequest["CreateInstallmentPlanRequest"]
    class InstalmentPlanWS["InstalmentPlanWS"]
    CreateInstallmentPlanRequest --> InstallmentPlanOriginationDetailsDto : unnamed
    CreateInstallmentPlanResponse --> CreateInstallmentPlanResultCodeDto : unnamed
    InstallmentPlanOriginationDetailsDto --> InstallmentPlanOriginationDetailsBaseDto : unnamed
    InstalmentPlanWS --> CreateInstallmentPlanResponse : unnamed
    InstalmentPlanWS --> CreateInstallmentPlanRequest : unnamed
    InstalmentPlanWS --> MOD_05_310_Process_disbursement_confirmations : unnamed
    InstalmentPlanWS --> n_01_184_Process_ContractSignTransactionsSE_event : unnamed
    InstalmentPlanWS --> MOD_05_350_Process_disbursement_confirmation_message : unnamed
```
