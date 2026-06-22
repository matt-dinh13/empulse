# Common panel for consent - product AF

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Common panel for consent - product AF
- **Diagram ID**: 158050
- **Elements**: 13
- **Connectors**: 6

```mermaid
graph TD
    Photo_component["Photo component"]
    n_01_085_Capture_Photo["01.085 Capture Photo"]
    Take_photo["Take photo"]
    n_01_088_Upload_file["01.088 Upload file"]
    Verification_panel["Verification panel"]
    Validation_by_Document_Type_Validation_Group["Validation by Document Type Validation Group "]
    n_01_087_Print_consent["01.087 Print consent"]
    Upload_files_product_AF["Upload files - product AF"]
    Consents["Consents"]
    Uploaded_consent_photo["Uploaded consent photo"]
    Upload_consent_photo["Upload consent photo"]
    Print_consent["Print consent"]
    Document_Type["Document Type"]
    Print_consent -->|unnamed| n_01_087_Print_consent
    Upload_consent_photo -->|unnamed| Upload_files_product_AF
    Upload_consent_photo -->|unnamed| n_01_088_Upload_file
    Take_photo -->|unnamed| Photo_component
    Take_photo -->|unnamed| n_01_085_Capture_Photo
    n_01_087_Print_consent -->|unnamed| Validation_by_Document_Type_Validation_Group
```
