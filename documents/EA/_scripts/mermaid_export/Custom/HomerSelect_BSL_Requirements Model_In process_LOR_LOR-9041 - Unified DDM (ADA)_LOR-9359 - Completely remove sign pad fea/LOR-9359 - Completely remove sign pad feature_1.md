# LOR-9359 - Completely remove sign pad feature

```mermaid
graph TD
    Decide_about_applicable_contract_signing_method["Decide about applicable contract signing method"]
    MOD_OTP_consent_verification["{MOD}OTP consent verification"]
    DEL_Electronic_signature_component["{DEL}Electronic signature component"]
    DocumentSignatureType["DocumentSignatureType"]
    MOD_DocumentFile["{MOD}DocumentFile"]
    MOD_DocumentData["{MOD}DocumentData"]
    DocumentFileContent["DocumentFileContent"]
    ConsentDocumentType["ConsentDocumentType"]
    LOR_9359_Completely_remove_sign_pad_feature["LOR-9359 - Completely remove sign pad feature"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    External_Reference["External Reference"]
    MOD_DocumentData -->|{DEL LOR-9359/}| MOD_DocumentFile
    ConsentDocumentType -->|{DEL LOR-9359/}| DocumentFileContent
```
