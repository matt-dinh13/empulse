# Web Services - Resource overview

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services
- **Diagram ID**: 142892
- **Elements**: 10
- **Connectors**: 7

```mermaid
classDiagram
    class EligibilityDefinition["EligibilityDefinition"]
    class CustomDataDefinition["CustomDataDefinition"]
    class InsurancePrograms["InsurancePrograms"]
    class Data_Eligibility_Validation_Data_Eligibility_Validation["Data Eligibility Validation : Data Eligibility Validation"]
    class Getting_Eligibility_definitions_Getting_Eligibility_definiti["Getting Eligibility definitions : Getting Eligibility definitions v1"]
    class Getting_Insurance_Program_data_Getting_Insurance_Program_dat["Getting Insurance Program data : Getting Insurance Program data v1"]
    class Getting_Custom_Data_Definition_Getting_Custom_Data_Definitio["Getting Custom Data Definition : Getting Custom Data Definition v1"]
    class Insurance_operation_status_changing_Deal_operation_status_ch["Insurance operation status changing :Deal operation status changing"]
    class INSR_Insurance["INSR (Insurance)"]
    Data_Eligibility_Validation_Data_Eligibility_Validation --> InsurancePrograms : unnamed
    unnamed --> InsurancePrograms : unnamed
    Getting_Custom_Data_Definition_Getting_Custom_Data_Definitio --> CustomDataDefinition : unnamed
    Getting_Eligibility_definitions_Getting_Eligibility_definiti --> EligibilityDefinition : unnamed
    INSR_Insurance ..> InsurancePrograms : unnamed
    InsurancePrograms ..> EligibilityDefinition : /{insuranceProgramExternalId}
    InsurancePrograms ..> CustomDataDefinition : /{insuranceProgramExternalId}
```
