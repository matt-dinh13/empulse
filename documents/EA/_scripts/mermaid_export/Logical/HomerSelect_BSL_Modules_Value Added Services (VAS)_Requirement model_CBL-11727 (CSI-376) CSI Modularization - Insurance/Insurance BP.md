# Insurance BP

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance business processes
- **Diagram ID**: 134811
- **Elements**: 27
- **Connectors**: 38

```mermaid
classDiagram
    class Replace_insurance_on_contract["Replace insurance on contract"]
    class Deactivate_insurance["Deactivate insurance"]
    class Loan_contract_paid_off["Loan contract paid-off"]
    class EoM["EoM"]
    class Cancel_loan_contract["Cancel loan contract"]
    class Pay_off_loan_contract["Pay-off loan contract"]
    class Finish_loan_contract["Finish loan contract"]
    class Cancel_Insurance_on_Loan_contract["Cancel Insurance on Loan contract"]
    class Terminate_Insurance_on_loan_contract["Terminate Insurance on loan contract"]
    class Insurance_termination["Insurance termination"]
    class Insurance_cancellation["Insurance cancellation"]
    class User_via_GUI["User via GUI"]
    class External_application["External application"]
    class Insurance_Data_Eligibility["Insurance Data Eligibility"]
    class Update_Insurance_Period["Update Insurance Period"]
    class Time["Time"]
    class Insurance_prolongation_based_on_defined_period["Insurance prolongation based on defined period"]
    class Add_insurance_on_active_contract["Add insurance on active contract"]
    class Activate_loan_contract["Activate loan contract"]
    class First_Transaction_REL["First Transaction REL"]
    class Activate_Insurance["Activate Insurance"]
    class Add_Insurance_on_Contract["Add Insurance on Contract"]
    class Sign_loan_application["Sign loan application"]
    class Prepare_and_print_loan_documents["Prepare and print loan documents"]
    class Loan_application_origination["Loan application origination"]
    class Get_insurance_offer["Get insurance offer"]
    User_via_GUI --> Insurance_cancellation : unnamed
    External_application --> Insurance_termination : unnamed
    User_via_GUI --> Insurance_termination : unnamed
    Time --> Insurance_prolongation_based_on_defined_period : unnamed
    Loan_contract_paid_off --> Insurance_termination : unnamed
    EoM --> Insurance_prolongation_based_on_defined_period : unnamed
    Insurance_termination ..> Terminate_Insurance_on_loan_contract : unnamed
    Insurance_cancellation ..> Cancel_Insurance_on_Loan_contract : unnamed
    Cancel_loan_contract ..> Cancel_Insurance_on_Loan_contract : unnamed
    Activate_loan_contract --> Finish_loan_contract : unnamed
    Pay_off_loan_contract --> Finish_loan_contract : unnamed
    Activate_loan_contract --> Pay_off_loan_contract : unnamed
    Sign_loan_application --> Cancel_loan_contract : unnamed
    Finish_loan_contract --> Insurance_termination : unnamed
    First_Transaction_REL ..> Activate_Insurance : unnamed
    Insurance_termination --> Replace_insurance_on_contract : unnamed
    Loan_contract_paid_off --> Deactivate_insurance : unnamed
    Insurance_prolongation_based_on_defined_period ..> Deactivate_insurance : unnamed
    Add_insurance_on_active_contract ..> Get_insurance_offer : unnamed
    unnamed --> Get_insurance_offer : unnamed
    Loan_application_origination --> Prepare_and_print_loan_documents : unnamed
    Prepare_and_print_loan_documents --> Sign_loan_application : unnamed
    Insurance_prolongation_based_on_defined_period ..> Update_Insurance_Period : unnamed
    Add_insurance_on_active_contract ..> Add_Insurance_on_Contract : unnamed
    Insurance_cancellation --> Replace_insurance_on_contract : unnamed
    Activate_loan_contract ..> Activate_Insurance : unnamed
    Add_insurance_on_active_contract ..> Activate_Insurance : unnamed
    Sign_loan_application ..> Activate_Insurance : unnamed
    Sign_loan_application --> Activate_loan_contract : unnamed
    External_application --> Add_insurance_on_active_contract : unnamed
    User_via_GUI --> Add_insurance_on_active_contract : unnamed
    Replace_insurance_on_contract --> Add_insurance_on_active_contract : unnamed
    Prepare_and_print_loan_documents ..> Add_Insurance_on_Contract : unnamed
    Insurance_prolongation_based_on_defined_period ..> Terminate_Insurance_on_loan_contract : unnamed
    Activate_loan_contract --> Cancel_loan_contract : unnamed
    Insurance_prolongation_based_on_defined_period ..> Insurance_Data_Eligibility : unnamed
    Add_insurance_on_active_contract ..> Insurance_Data_Eligibility : unnamed
    External_application --> Insurance_cancellation : unnamed
```
