# Document printouts - Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/Access Rights/Document printouts
- **Diagram ID**: 148770
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph TD
    ADD_01_128_Preview_document_printouts["{ADD}01.128 Preview document printouts"]
    ADD_01_128_Preview_document_printout_with_security_level_2["{ADD}01.128 Preview document printout with security level 2"]
    ADD_01_128_Preview_document_printout_with_security_level_1["{ADD}01.128 Preview document printout with security level 1"]
    ADD_01_128_Preview_document_printouts_file_download["{ADD}01.128 Preview document printouts (file download)"]
    ADD_01_128_Preview_document_printout_with_security_level_2_f["{ADD}01.128 Preview document printout with security level 2 (file download)"]
    ADD_01_128_Preview_document_printout_with_security_level_1_f["{ADD}01.128 Preview document printout with security level 1 (file download)"]
    MOD_01_128_Preview_document["{MOD}01.128 Preview document"]
    MOD_01_128_Preview_document -->|unnamed| ADD_01_128_Preview_document_printout_with_security_level_1_f
    MOD_01_128_Preview_document -->|unnamed| ADD_01_128_Preview_document_printout_with_security_level_2
    MOD_01_128_Preview_document -->|unnamed| ADD_01_128_Preview_document_printout_with_security_level_2_f
    MOD_01_128_Preview_document -->|unnamed| ADD_01_128_Preview_document_printout_with_security_level_1
    MOD_01_128_Preview_document -->|unnamed| ADD_01_128_Preview_document_printouts
    MOD_01_128_Preview_document -->|unnamed| ADD_01_128_Preview_document_printouts_file_download
```
