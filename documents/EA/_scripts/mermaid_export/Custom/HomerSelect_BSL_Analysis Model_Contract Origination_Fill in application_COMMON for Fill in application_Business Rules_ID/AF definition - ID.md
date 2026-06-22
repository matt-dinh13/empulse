# AF definition - ID

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/ID
- **Diagram ID**: 148791
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph TD
    Cleared_fields_on_application_form_ID["Cleared fields on application form - ID"]
    Cleared_fields_on_application_form["Cleared fields on application form"]
    Set_editability_of_the_object_excel_configuration["Set editability of the object - excel configuration"]
    Set_visibility_of_the_object_excel_configuration["Set visibility of the object-excel configuration"]
    Prefill_application_form["Prefill application form"]
    AF_Configuration_ID["AF Configuration - ID"]
    Mapping_CIF_data_to_application_form["Mapping CIF data to application form"]
    Application_form_prefill_ID["Application form prefill - ID"]
    AF_Configuration_ID -->|unnamed| Application_form_prefill_ID
    Application_form_prefill_ID -->|unnamed| Prefill_application_form
    Cleared_fields_on_application_form_ID -->|unnamed| Cleared_fields_on_application_form
    Prefill_application_form -->|unnamed| Mapping_CIF_data_to_application_form
    Set_editability_of_the_object_excel_configuration -->|unnamed| AF_Configuration_ID
    Set_visibility_of_the_object_excel_configuration -->|unnamed| AF_Configuration_ID
```
