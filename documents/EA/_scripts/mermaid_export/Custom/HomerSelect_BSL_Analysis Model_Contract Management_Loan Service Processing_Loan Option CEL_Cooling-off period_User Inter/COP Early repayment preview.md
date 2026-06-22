# COP Early repayment preview

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Cooling-off period/User Interface
- **Diagram ID**: 146225
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    MOD_08_257_Create_Cooling_off_period_request["{MOD}08.257 Create Cooling-off period request"]
    n_08_255_Show_Cooling_off_period_repayment_preview["08.255 Show Cooling-off period repayment preview"]
    Contract_detail_Tab_Services["Contract detail - Tab Services"]
    Cancel["Cancel"]
    Create_request["Create request"]
    Early_repayment_preview["Early repayment preview"]
    Cancel -->|unnamed| Contract_detail_Tab_Services
    Early_repayment_preview -->|unnamed| n_08_255_Show_Cooling_off_period_repayment_preview
    Create_request -->|unnamed| MOD_08_257_Create_Cooling_off_period_request
```
