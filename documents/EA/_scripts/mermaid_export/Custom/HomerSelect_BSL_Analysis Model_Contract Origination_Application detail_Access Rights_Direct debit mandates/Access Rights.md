# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Access Rights/Direct debit mandates
- **Diagram ID**: 158049
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    n_01_423_Change_ECS_provider_for_application_DDM["01.423 Change ECS provider for application DDM"]
    n_01_421_Create_application_DDM["01.421 Create application DDM"]
    n_01_423_Change_ECS_provider_for_application_DDM["01.423 Change ECS provider for application DDM"]
    MOD_01_422_Update_application_DDM["{MOD}01.422 Update application DDM"]
    n_01_422_Update_application_DDM["01.422 Update application DDM"]
    n_01_421_Create_application_DDM["01.421 Create application DDM"]
    n_01_423_Change_ECS_provider_for_application_DDM -->|unnamed| n_01_423_Change_ECS_provider_for_application_DDM
    MOD_01_422_Update_application_DDM -->|unnamed| n_01_422_Update_application_DDM
    n_01_421_Create_application_DDM -->|unnamed| n_01_421_Create_application_DDM
```
