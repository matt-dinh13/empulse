# CLM-864 (CBL-1586) Interest calculation from Disbursement date

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-864 (CBL-1586) Interest calculation from Disbursement date
- **Diagram ID**: 103449
- **Elements**: 10
- **Connectors**: 9

```mermaid
graph TD
    UseCase_Model_Contract_signing["UseCase Model : Contract signing"]
    UseCase_Model_Determine_installment_schedule_processing["UseCase Model : Determine installment schedule processing"]
    System_re_generates_1st_due_date_and_installment_amount_when["System re-generates '1st due date' and 'installment amount' when payment status was changed from 'Unpaid' to 'Paid' for CD|TW (POS) loans."]
    System_generates_installment_schedule_when_payment_status_wa["System generates 'installment schedule' when payment status was changed from 'Unpaid' to 'Paid' for CD|TW (POS) loans."]
    System_supports_generation_of_contract_term_from_the_disburs["System supports generation of 'contract term' from the disbursement date."]
    System_generates_installment_schedule_when_disbursement_conf["System generates 'installment schedule' when disbursement confirmation file was imported for CLW | CLX (CASH) loans."]
    System_re_generates_1st_due_date_and_installment_amount_when["System re-generates '1st due date' and 'installment amount' when disbursement confirmation file was imported for CLW | CLX (CASH) loans."]
    REQ_1_System_supports_configuration_of_functionalty_develope["REQ#1 - System supports configuration of functionalty developed within CBL-1586."]
    REQ_2_System_supports_generation_of_installment_schedule_on_["REQ#2 - System supports generation of 'installment schedule' on a disbursement date and if so then supports generation of the '1st due date' and 'installment amount' on the signed date."]
    CBL_1586_Interest_calculation_from_Disbursement_date["CBL-1586: 'Interest calculation' from Disbursement date"]
    REQ_2_System_supports_generation_of_installment_schedule_on_ -->|unnamed| CBL_1586_Interest_calculation_from_Disbursement_date
    REQ_1_System_supports_configuration_of_functionalty_develope -->|unnamed| CBL_1586_Interest_calculation_from_Disbursement_date
    System_re_generates_1st_due_date_and_installment_amount_when -->|unnamed| REQ_2_System_supports_generation_of_installment_schedule_on_
    System_generates_installment_schedule_when_disbursement_conf -->|unnamed| REQ_2_System_supports_generation_of_installment_schedule_on_
    System_supports_generation_of_contract_term_from_the_disburs -->|unnamed| REQ_2_System_supports_generation_of_installment_schedule_on_
    System_generates_installment_schedule_when_payment_status_wa -->|unnamed| REQ_2_System_supports_generation_of_installment_schedule_on_
    System_re_generates_1st_due_date_and_installment_amount_when -->|unnamed| REQ_2_System_supports_generation_of_installment_schedule_on_
    UseCase_Model_Determine_installment_schedule_processing -->|unnamed| CBL_1586_Interest_calculation_from_Disbursement_date
    UseCase_Model_Contract_signing -->|unnamed| CBL_1586_Interest_calculation_from_Disbursement_date
```
