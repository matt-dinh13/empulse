# Client search

```mermaid
graph TD
    Mask_fields_rule_for_AUI["Mask fields rule for AUI"]
    n_01_080_Fill_in_application["01.080 Fill in application"]
    User["User"]
    MOD_01_160_Search_client["{MOD}01.160 Search client"]
    MOD_01_160_Search_client -->|unnamed| n_01_080_Fill_in_application
    MOD_01_160_Search_client -->|unnamed| Mask_fields_rule_for_AUI
    User -->|unnamed| MOD_01_160_Search_client
```
