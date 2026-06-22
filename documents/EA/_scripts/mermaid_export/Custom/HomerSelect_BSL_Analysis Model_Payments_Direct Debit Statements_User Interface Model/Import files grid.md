# Import files grid

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/User Interface Model
- **Diagram ID**: 98303
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    n_05_141_Import_DD_statements["05.141 Import DD statements"]
    n_05_142_Import_DDS_confirmations["05.142 Import DDS confirmations"]
    Import_files["Import files"]
    Import_files_grid["Import files grid"]
    Import_files_grid -->|unnamed| n_05_141_Import_DD_statements
    Import_files_grid -->|unnamed| n_05_142_Import_DDS_confirmations
```
