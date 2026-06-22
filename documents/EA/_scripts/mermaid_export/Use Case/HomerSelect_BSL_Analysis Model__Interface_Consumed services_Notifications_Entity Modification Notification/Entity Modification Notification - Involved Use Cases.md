# Entity Modification Notification - Involved Use Cases

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Notifications/Entity Modification Notification
- **Diagram ID**: 162292
- **Elements**: 12
- **Connectors**: 10

```mermaid
graph LR
    DEL_02_260_Activate_product_version_manually(("{DEL}02.260 Activate product version manually"))
    DEL_08_180_Activate_Service_version_manually(("{DEL}08.180 Activate Service version manually"))
    DEL_04_180_Activate_Tariff_version_manually(("{DEL}04.180 Activate Tariff version manually"))
    Entity_Modification_Notification_Entity_Modification_Notific["Entity Modification Notification : Entity Modification Notification - Interface"]
    MOD_00_130_Update_bank_branch(("{MOD} 00.130 Update bank branch"))
    MOD_00_120_Create_bank_branch(("{MOD} 00.120 Create bank branch"))
    MOD_00_170_Update_bank(("{MOD} 00.170 Update bank"))
    MOD_00_160_Create_bank(("{MOD} 00.160 Create bank"))
    DEL_02_460_Deactivate_commodity_type(("{DEL}02.460 Deactivate commodity type"))
    DEL_02_440_Update_commodity_type(("{DEL}02.440 Update commodity type"))
    DEL_02_450_Manage_commodity_categories(("{DEL}02.450 Manage commodity categories"))
    ADD_NotificationWS["{ADD} NotificationWS"]
    DEL_02_440_Update_commodity_type -->|unnamed| ADD_NotificationWS
    DEL_02_460_Deactivate_commodity_type -->|unnamed| ADD_NotificationWS
    DEL_02_450_Manage_commodity_categories -->|unnamed| ADD_NotificationWS
    DEL_02_260_Activate_product_version_manually -->|unnamed| ADD_NotificationWS
    MOD_00_170_Update_bank -->|unnamed| ADD_NotificationWS
    MOD_00_130_Update_bank_branch -->|unnamed| ADD_NotificationWS
    MOD_00_120_Create_bank_branch -->|unnamed| ADD_NotificationWS
    MOD_00_160_Create_bank -->|unnamed| ADD_NotificationWS
    DEL_04_180_Activate_Tariff_version_manually -->|unnamed| ADD_NotificationWS
    DEL_08_180_Activate_Service_version_manually -->|unnamed| ADD_NotificationWS
```
