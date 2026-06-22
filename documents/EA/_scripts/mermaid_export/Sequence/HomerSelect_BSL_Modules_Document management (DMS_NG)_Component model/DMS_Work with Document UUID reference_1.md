# DMS:Work with Document UUID reference

```mermaid
sequenceDiagram
    participant Cabinet as Cabinet
    participant Biometrics as Biometrics
    participant External_system as External system
    participant PIF as PIF
    participant DMS as DMS
    participant ApplicationManagement as ApplicationManagement
    Cabinet->>Biometrics: FileContent.stream
    External_system->>PIF: CreateCustomer
    Biometrics->>DMS: GetDocument
    Biometrics->>External_system: CheckResult
    External_system->>ApplicationManagement: CreateApplication
    External_system->>External_system: Get Selfie from applicant
    Biometrics->>Biometrics: Evaluate
    External_system->>DMS: CreateDocument
    External_system->>External_system: CheckClient
    ApplicationManagement->>External_system: Application
    Biometrics->>Cabinet: GetFileContent
    External_system->>Biometrics: CheckClient
    DMS->>Biometrics: Document
    DMS->>External_system: Document.uuid
    External_system->>External_system: Next steps of processing
    External_system->>External_system: Get needed data from client
    DMS->>Cabinet: Cabinet.CreateDocument
    PIF->>External_system: CUID
    Cabinet->>DMS: fileUuid
```
