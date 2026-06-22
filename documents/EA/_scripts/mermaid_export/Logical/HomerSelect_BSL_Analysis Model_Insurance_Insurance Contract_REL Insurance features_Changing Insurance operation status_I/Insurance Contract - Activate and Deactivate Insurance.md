# Insurance Contract - Activate and Deactivate Insurance

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services
- **Diagram ID**: 162074
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class InsuranceContract["InsuranceContract"]
    class InsuranceContract_structure_InsuranceContract_structures["InsuranceContract structure :InsuranceContract structures"]
    class SetInsuranceInactive["SetInsuranceInactive"]
    class InsuranceContract["InsuranceContract"]
    class SetInsuranceActive["SetInsuranceActive"]
    class n_11_149_Deactivate_insurance_on_contract["11.149 Deactivate insurance on contract"]
    class n_11_147_Activate_insurance_on_contract["11.147 Activate insurance on contract"]
    InsuranceContract ..> n_11_147_Activate_insurance_on_contract : unnamed
    InsuranceContract ..> n_11_147_Activate_insurance_on_contract : unnamed
    InsuranceContract ..> n_11_149_Deactivate_insurance_on_contract : unnamed
    InsuranceContract ..> n_11_149_Deactivate_insurance_on_contract : unnamed
    InsuranceContract ..> SetInsuranceActive : unnamed
    InsuranceContract ..> InsuranceContract : unnamed
    InsuranceContract ..> SetInsuranceInactive : unnamed
```
