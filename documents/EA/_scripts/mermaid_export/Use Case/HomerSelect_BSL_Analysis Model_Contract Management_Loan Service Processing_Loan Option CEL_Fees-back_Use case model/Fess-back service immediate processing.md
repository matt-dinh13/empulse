# Fess-back service immediate processing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Use case model
- **Diagram ID**: 160288
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph LR
    User[/"User"/]
    n_01_730_Finish_contract_manually(("01.730 Finish contract manually"))
    n_08_262_Process_Fees_back_service(("08.262 Process Fees-back service"))
    ADD_08_260_Check_Fees_back_service(("{ADD}08.260 Check Fees-back service"))
    MOD_08_264_Check_and_process_fees_back_service(("{MOD}08.264 Check and process fees-back service"))
    n_01_730_Finish_contract_manually -.->|include| MOD_08_264_Check_and_process_fees_back_service
    MOD_08_264_Check_and_process_fees_back_service -.->|include| n_08_262_Process_Fees_back_service
    User --> n_01_730_Finish_contract_manually
```
