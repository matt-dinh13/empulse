# CBL-17134 (CLM-4785) Migrate ContractSecuritizationNotification to RabbitMQ

```mermaid
graph TD
    ContractSecuritizationNotification_ContractSecuritizationNot["ContractSecuritizationNotification : ContractSecuritizationNotification"]
    n_01_864_Generate_notifications_about_contract_securitizatio["01.864 Generate notifications about contract securitization"]
    Migrate_ContractSecuritizationNotification_to_RabbitMQ["Migrate ContractSecuritizationNotification to RabbitMQ"]
    n_01_864_Generate_notifications_about_contract_securitizatio -->|unnamed| ContractSecuritizationNotification_ContractSecuritizationNot
```
