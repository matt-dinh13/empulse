# PAYM-1787 (CBL-4815) EMI schedule for JL contracts

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1787 (CBL-4815) EMI schedule for JL contracts
- **Diagram ID**: 114121
- **Elements**: 10
- **Connectors**: 8

```mermaid
graph TD
    Change_due_date_request_creation_and_processing["Change due date request creation and processing"]
    Deducting_interest_overcharge_while_shortening_first_interes["Deducting interest overcharge while shortening first interest period"]
    Contract_Management_Global_Parameter["Contract Management Global Parameter"]
    Pay_off_instalment_schedule["Pay off instalment schedule"]
    Common_for_Early_repayment_Request_and_Processing["Common for Early repayment Request and Processing "]
    CONF_EMI_schedule_for_JL_contracts["CONF EMI schedule for JL contracts"]
    Generate_installment_schedule["Generate installment schedule"]
    DEV_EMI_schedule_for_JL_contracts["DEV EMI schedule for JL contracts"]
    PAYM_1787_CBL_4815_EMI_schedule_for_JL_contracts["PAYM-1787 (CBL-4815) EMI schedule for JL contracts"]
    el_1379083["Text"]
    Generate_installment_schedule -->|unnamed| DEV_EMI_schedule_for_JL_contracts
    Common_for_Early_repayment_Request_and_Processing -->|unnamed| DEV_EMI_schedule_for_JL_contracts
    Pay_off_instalment_schedule -->|unnamed| DEV_EMI_schedule_for_JL_contracts
    Deducting_interest_overcharge_while_shortening_first_interes -->|unnamed| DEV_EMI_schedule_for_JL_contracts
    Change_due_date_request_creation_and_processing -->|unnamed| DEV_EMI_schedule_for_JL_contracts
    CONF_EMI_schedule_for_JL_contracts -->|unnamed| PAYM_1787_CBL_4815_EMI_schedule_for_JL_contracts
    DEV_EMI_schedule_for_JL_contracts -->|unnamed| PAYM_1787_CBL_4815_EMI_schedule_for_JL_contracts
    Contract_Management_Global_Parameter -->|unnamed| CONF_EMI_schedule_for_JL_contracts
```
