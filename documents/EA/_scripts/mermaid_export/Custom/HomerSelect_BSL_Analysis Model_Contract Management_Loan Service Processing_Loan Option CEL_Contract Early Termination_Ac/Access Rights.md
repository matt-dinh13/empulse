# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Contract Early Termination/Access Rights
- **Diagram ID**: 146235
- **Elements**: 12
- **Connectors**: 6

```mermaid
graph TD
    ADD_08_273_Create_CET_request_common["{ADD}08.273 Create CET request common"]
    ADD_08_272_Get_CET_data_preview["{ADD}08.272 Get CET data preview"]
    MOD_08_272_Get_CET_data_preview["{MOD}08.272 Get CET data preview"]
    MOD_08_273_Create_CET_request_common["{MOD}08.273 Create CET request common"]
    n_08_270_Show_CET_repayment_preview["08.270 Show CET repayment preview"]
    n_08_271_Create_CET_repayment_request["08.271 Create CET repayment request"]
    n_08_280_Check_and_process_CET_request["08.280 Check and process CET request"]
    n_08_285_Select_contracts_for_CET_evaluation["08.285 Select contracts for CET evaluation"]
    MOD_08_280_Check_and_process_CET_request["{MOD}08.280 Check and process CET request"]
    n_08_271_Create_CET_repayment_request["08.271 Create CET repayment request"]
    n_08_270_Show_CET_repayment_preview["08.270 Show CET repayment preview"]
    n_08_285_Select_contracts_for_CET_evaluation["08.285 Select contracts for CET evaluation"]
    n_08_270_Show_CET_repayment_preview -->|unnamed| n_08_270_Show_CET_repayment_preview
    MOD_08_280_Check_and_process_CET_request -->|unnamed| n_08_280_Check_and_process_CET_request
    MOD_08_272_Get_CET_data_preview -->|unnamed| ADD_08_272_Get_CET_data_preview
    MOD_08_273_Create_CET_request_common -->|unnamed| ADD_08_273_Create_CET_request_common
    n_08_271_Create_CET_repayment_request -->|unnamed| n_08_271_Create_CET_repayment_request
    n_08_285_Select_contracts_for_CET_evaluation -->|unnamed| n_08_285_Select_contracts_for_CET_evaluation
```
