# CBL-3735 (CLM-1581) Mandatory Life Insurance support

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3735 (CLM-1581) Mandatory Life Insurance support
- **Diagram ID**: 110238
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    Use_Case_Model_Termination_of_Insurance_contract["Use Case Model : Termination of Insurance contract "]
    REQ_2_Exclusion_of_the_Basic_insurance_from_termination_on_c["REQ #2  - Exclusion of the Basic insurance from termination on contract Paid-off"]
    Use_Case_Model_Replacement_of_standard_insurance_upon_its_ca["Use Case Model :Replacement of standard insurance upon its cancelation or termination"]
    REQ_1_Automatic_adding_a_basic_insurance_on_insurance_cancel["REQ #1 - Automatic adding a basic insurance on insurance cancellation/termination"]
    Use_Case_Model_Replacement_of_standard_insurance_upon_its_ca -->|unnamed| REQ_1_Automatic_adding_a_basic_insurance_on_insurance_cancel
    Use_Case_Model_Termination_of_Insurance_contract -->|unnamed| REQ_2_Exclusion_of_the_Basic_insurance_from_termination_on_c
```
