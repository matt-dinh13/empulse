# LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM
- **Diagram ID**: 151327
- **Elements**: 10
- **Connectors**: 4

```mermaid
graph TD
    ExternalIdentifiersType["ExternalIdentifiersType"]
    PartyAttributeType["PartyAttributeType"]
    ContractPartyRole["ContractPartyRole"]
    ExtendedProperty["ExtendedProperty"]
    MOD_RefinancedContractType["{MOD}RefinancedContractType"]
    SellerType["SellerType"]
    MOD_DocumentData["{MOD}DocumentData"]
    documentData["documentData"]
    LOR_9343_Use_ApplicationManagement_REST_instead_of_Applicati["LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM"]
    LOR_9041_Unified_DDM_ADA["LOR-9041 - Unified DDM (ADA)"]
    MOD_DocumentData -->|unnamed| ContractPartyRole
    ContractPartyRole -->|unnamed| PartyAttributeType
    MOD_DocumentData -->|unnamed| ExternalIdentifiersType
    MOD_DocumentData -->|unnamed| SellerType
```
