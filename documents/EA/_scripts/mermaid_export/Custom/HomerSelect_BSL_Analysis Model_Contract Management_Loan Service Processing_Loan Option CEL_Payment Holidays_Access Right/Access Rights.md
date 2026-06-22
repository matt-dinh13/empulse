# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Access Rights
- **Diagram ID**: 136476
- **Elements**: 9
- **Connectors**: 6

```mermaid
graph TD
    n_08_358_Create_request_for_payment_holiday_common["08.358 Create request for payment holiday common"]
    MOD_08_358_Create_request_for_payment_holiday_common["{MOD}08.358 Create request for payment holiday common"]
    n_08_354_Show_parameters_of_payment_holiday_can_overrule_eli["08.354 Show parameters of payment holiday (can overrule eligibility)"]
    n_08_362_Process_payment_holiday_request["08.362 Process payment holiday request"]
    n_08_355_Create_request_for_payment_holiday["08.355 Create request for payment holiday"]
    n_08_354_Show_parameters_of_payment_holiday["08.354 Show parameters of payment holiday"]
    MOD_08_362_Process_payment_holiday_request["{MOD}08.362 Process payment holiday request"]
    n_08_355_Create_request_for_payment_holiday["08.355 Create request for payment holiday"]
    n_08_354_Show_parameters_of_payment_holiday["08.354 Show parameters of payment holiday"]
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| n_08_354_Show_parameters_of_payment_holiday_can_overrule_eli
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| n_08_354_Show_parameters_of_payment_holiday
    n_08_355_Create_request_for_payment_holiday -->|unnamed| MOD_08_358_Create_request_for_payment_holiday_common
    n_08_355_Create_request_for_payment_holiday -->|unnamed| n_08_355_Create_request_for_payment_holiday
    MOD_08_362_Process_payment_holiday_request -->|unnamed| n_08_362_Process_payment_holiday_request
    MOD_08_358_Create_request_for_payment_holiday_common -->|unnamed| n_08_358_Create_request_for_payment_holiday_common
```
