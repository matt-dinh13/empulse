# CBL-11449 (CSI-314) Loan restructuring printout

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11449 (CSI-314) Loan restructuring printout
- **Diagram ID**: 136455
- **Elements**: 10
- **Connectors**: 8

```mermaid
graph TD
    MOD_Determine_first_due_date_of_restructured_installments["{MOD}Determine first due date of restructured installments"]
    Determine_first_installment_for_loan_restructuring["Determine first installment for loan restructuring"]
    Calculate_financial_parameters_for_loan_restructuring["Calculate financial parameters for loan restructuring"]
    MOD_Get_Future_capitalized_installments_for_restructuring["{MOD}Get Future capitalized installments for restructuring"]
    MOD_08_405_Confirm_offer_for_loan_restructuring_common["{MOD}08.405 Confirm offer for loan restructuring common"]
    MOD_08_403_Create_request_for_loan_restructuring_common["{MOD}08.403 Create request for loan restructuring common"]
    MOD_Total_amount_to_restructuring_calculation["{MOD}Total amount to restructuring calculation"]
    HO_SERVICE_REQUEST_DATA_HO_SERVICE_REQUEST_DATA["HO_SERVICE_REQUEST_DATA : HO_SERVICE_REQUEST_DATA"]
    Logical_Data_Model_Loan_restructuring_request_domain["Logical Data Model : Loan restructuring request domain"]
    REQ_1_extension_of_LRES_LoanServiceRequest_and_HO_SERVICE_RE["REQ#1 - extension of  LRES LoanServiceRequest and HO_SERVICE_REQUEST_DATA datasource"]
    MOD_08_405_Confirm_offer_for_loan_restructuring_common -->|unnamed| Calculate_financial_parameters_for_loan_restructuring
    MOD_08_403_Create_request_for_loan_restructuring_common -->|unnamed| MOD_Total_amount_to_restructuring_calculation
    MOD_Total_amount_to_restructuring_calculation -->|unnamed| MOD_Get_Future_capitalized_installments_for_restructuring
    Calculate_financial_parameters_for_loan_restructuring -->|unnamed| MOD_Get_Future_capitalized_installments_for_restructuring
    Calculate_financial_parameters_for_loan_restructuring -->|unnamed| MOD_Determine_first_due_date_of_restructured_installments
    MOD_08_405_Confirm_offer_for_loan_restructuring_common -->|unnamed| Determine_first_installment_for_loan_restructuring
    MOD_08_403_Create_request_for_loan_restructuring_common -->|unnamed| Determine_first_installment_for_loan_restructuring
    MOD_08_403_Create_request_for_loan_restructuring_common -->|unnamed| MOD_Determine_first_due_date_of_restructured_installments
```
