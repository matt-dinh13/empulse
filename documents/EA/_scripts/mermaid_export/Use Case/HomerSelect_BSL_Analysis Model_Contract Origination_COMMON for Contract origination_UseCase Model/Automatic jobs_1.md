# Automatic jobs

```mermaid
graph TD
    n_01_682_Anonymize_archived_temporary_applications["01.682 Anonymize archived temporary applications"]
    n_01_685_Hide_contracts["01.685 Hide contracts"]
    Time["Time"]
    n_01_680_Delete_temporary_applications["01.680 Delete temporary applications"]
    n_01_682_Anonymize_archived_temporary_applications -->|unnamed| Time
    Time -->|unnamed| n_01_685_Hide_contracts
    Time -->|unnamed| n_01_680_Delete_temporary_applications
```
