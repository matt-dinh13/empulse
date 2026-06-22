# Getting Custom Data Definition v1

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Custom Data Definition
- **Diagram ID**: 134363
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class InsurancePrograms["InsurancePrograms"]
    class CustomDataDefinition["CustomDataDefinition"]
    class n_11_202_Get_insurance_custom_data_definition_service_v2["11.202 Get insurance custom data definition service v2"]
    class Web_Services_Resource_overview["Web Services - Resource overview"]
    class CustomDataDefinition["CustomDataDefinition"]
    class LabelValue["LabelValue"]
    class LocalizedValue["LocalizedValue"]
    InsurancePrograms ..> CustomDataDefinition : /{insuranceProgramExternalId}
    CustomDataDefinition ..> CustomDataDefinition : unnamed
    CustomDataDefinition ..> n_11_202_Get_insurance_custom_data_definition_service_v2 : unnamed
    CustomDataDefinition ..> LabelValue : unnamed
    LabelValue ..> LocalizedValue : unnamed
```
