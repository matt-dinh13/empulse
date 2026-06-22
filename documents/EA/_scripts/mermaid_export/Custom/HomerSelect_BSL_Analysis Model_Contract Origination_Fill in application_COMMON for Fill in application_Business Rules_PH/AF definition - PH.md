# AF definition - PH

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/PH
- **Diagram ID**: 157666
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    AF_configuration_PH["AF configuration - PH"]
    Prefill_application_form_excel_configuration["Prefill application form-excel configuration"]
    Set_visibility_of_the_object_excel_configuration["Set visibility of the object-excel configuration"]
    Set_editability_of_the_object_excel_configuration["Set editability of the object - excel configuration"]
    Set_editability_of_the_object_excel_configuration -->|unnamed| AF_configuration_PH
    Prefill_application_form_excel_configuration -->|unnamed| AF_configuration_PH
    Set_visibility_of_the_object_excel_configuration -->|unnamed| AF_configuration_PH
```
