# Import XML files

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Business Rules
- **Diagram ID**: 143099
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    Incoming_payment_file_name_format["Incoming payment file name format"]
    Indonesia_XML_structure["Indonesia XML structure"]
    India_XML_structure["India XML structure"]
    Standardized_XML_format["Standardized XML format"]
    Indonesia_XML_structure -->|unnamed| Standardized_XML_format
    India_XML_structure -->|unnamed| Standardized_XML_format
```
