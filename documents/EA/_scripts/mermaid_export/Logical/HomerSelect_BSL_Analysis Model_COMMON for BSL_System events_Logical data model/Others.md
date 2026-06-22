# Others

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164619
- **Elements**: 14
- **Connectors**: 14

```mermaid
classDiagram
    class Contract_Service["Contract Service"]
    class COPExecutedSE["COPExecutedSE"]
    class CEL_Reward_Evaluated_Period["CEL Reward Evaluated Period"]
    class ADD_CELRewardMissedSE["{ADD}CELRewardMissedSE"]
    class ADD_CELRewardSuccessSE["{ADD}CELRewardSuccessSE"]
    class Debt_Catalogue["Debt Catalogue"]
    class ADD_EOMBillingFinishedSE["{ADD}EOMBillingFinishedSE"]
    class MOD_EFileBusinessCodes["{MOD}EFileBusinessCodes"]
    class FileSE["FileSE"]
    class SystemEvent["SystemEvent"]
    class Early_Repayment_Request["Early Repayment Request"]
    class Insurance_Contract["Insurance Contract"]
    class InsuranceContractCancelationSE["InsuranceContractCancelationSE"]
    class FullEarlyRepaymentRequestedSE["FullEarlyRepaymentRequestedSE"]
    InsuranceContractCancelationSE --> Insurance_Contract : unnamed
    FullEarlyRepaymentRequestedSE --> Early_Repayment_Request : unnamed
    SystemEvent <|-- FileSE : unnamed
    SystemEvent <|-- ADD_CELRewardMissedSE : unnamed
    SystemEvent <|-- COPExecutedSE : unnamed
    SystemEvent <|-- ADD_CELRewardSuccessSE : unnamed
    SystemEvent <|-- FullEarlyRepaymentRequestedSE : unnamed
    SystemEvent <|-- InsuranceContractCancelationSE : unnamed
    SystemEvent <|-- ADD_EOMBillingFinishedSE : unnamed
    FileSE ..> MOD_EFileBusinessCodes : unnamed
    ADD_EOMBillingFinishedSE --> Debt_Catalogue : unnamed
    ADD_CELRewardSuccessSE --> CEL_Reward_Evaluated_Period : unnamed
    ADD_CELRewardMissedSE --> CEL_Reward_Evaluated_Period : unnamed
    COPExecutedSE --> Contract_Service : unnamed
```
