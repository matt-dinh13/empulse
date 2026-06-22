# Time dependent business objects

```mermaid
graph TD
    ValidFrom_ValidTo["ValidFrom-ValidTo"]
    Reseting_of_time_dependent_atributes_of_property["Reseting of time dependent atributes of property"]
    Summary_PRECONDITIONS_for_setting_of_time_dependent_properti["Summary PRECONDITIONS for setting of time dependent properties"]
    Start_and_end_of_validity_if_only_date_is_entered["Start and end of validity if only date is entered"]
    Summary_VALIDATIONS_for_setting_of_time_dependent_properties["Summary VALIDATIONS for setting of time dependent properties"]
    Summary_PRECONDITIONS_for_setting_of_time_dependent_properti -->|unnamed| Start_and_end_of_validity_if_only_date_is_entered
    Summary_VALIDATIONS_for_setting_of_time_dependent_properties -->|unnamed| Start_and_end_of_validity_if_only_date_is_entered
    ValidFrom_ValidTo -->|unnamed| Summary_VALIDATIONS_for_setting_of_time_dependent_properties
    ValidFrom_ValidTo -->|unnamed| Reseting_of_time_dependent_atributes_of_property
```
