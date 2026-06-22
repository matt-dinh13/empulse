# Document validation - VN

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Custom data types definition and validator library/Validation rules/VN
- **Diagram ID**: 162102
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    Document_number["Document number"]
    Document_number["Document number"]
    Document_number["Document number"]
    Identification_card["Identification card"]
    Family_registration_book["Family registration book"]
    Driving_license["Driving license"]
    Driving_license -->|unnamed| Document_number
    Family_registration_book -->|unnamed| Document_number
    Identification_card -->|unnamed| Document_number
```
