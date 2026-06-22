# Business Rules

```mermaid
graph TD
    Get_validation_parameters_for_commodity_data_update["Get validation parameters for commodity data update"]
    Get_event_type_for_commodity_data_update["Get event type for commodity data update"]
    Get_update_mode_for_commodity_data_update["Get update mode for commodity data update"]
    Access_control_to_edit_commodity_fields["Access control to edit commodity fields"]
    Get_update_mode_for_commodity_data_update -->|unnamed| Access_control_to_edit_commodity_fields
    Get_validation_parameters_for_commodity_data_update -->|{ADD LOR-3603/}| Get_event_type_for_commodity_data_update
```
