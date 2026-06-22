# Document validation - ID

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Custom data types definition and validator library/Validation rules/ID
- **Diagram ID**: 162096
- **Elements**: 12
- **Connectors**: 8

```mermaid
graph TD
    Must_be_in_future["Must be in future"]
    Taken_photo["Taken photo"]
    Visibility_in_application_form["Visibility in application form"]
    Resi_KTP_number["Resi KTP number"]
    Resi_KTP_number["Resi KTP number"]
    KTP_number["KTP number"]
    KTP_type["KTP type"]
    KTP_type["KTP type"]
    KTP_expiry_date["KTP expiry date"]
    KTP_number_length["KTP number length"]
    Date["Date"]
    KTP_number["KTP number"]
    KTP_number -->|unnamed| KTP_number
    KTP_number -->|unnamed| KTP_number_length
    KTP_expiry_date -->|unnamed| Date
    KTP_type -->|unnamed| KTP_type
    KTP_type -->|unnamed| Taken_photo
    Resi_KTP_number -->|unnamed| Resi_KTP_number
    Resi_KTP_number -->|unnamed| Visibility_in_application_form
    Visibility_in_application_form -->|unnamed| KTP_type
```
