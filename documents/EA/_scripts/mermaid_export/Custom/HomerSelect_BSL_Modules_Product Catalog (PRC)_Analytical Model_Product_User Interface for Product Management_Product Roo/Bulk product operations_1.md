# Bulk product operations

```mermaid
graph TD
    Product_profile["Product profile"]
    User_Interface_Changes["User Interface :Changes"]
    DEL_02_140_Export_product_version_changes["{DEL}02.140 Export product version changes"]
    DEL_02_120_Bulk_activate_product_version["{DEL}02.120 Bulk activate product version"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    Search_results["Search results"]
    Export["Export"]
    Cancel_version["Cancel version"]
    Activate["Activate"]
    Reset["Reset"]
    Search["Search"]
    Action_buttons["Action buttons"]
    All_inactive_versions["All inactive versions"]
    Initial_transaction_type["Initial transaction type"]
    Product_type["Product type"]
    MOD_Name["{MOD}Name"]
    MOD_Code["{MOD}Code"]
    Search_for_product_criteria["Search for product criteria"]
    Bulk_product_operations["Bulk product operations"]
    DEL_02_130_Bulk_cancel_product_version["{DEL}02.130 Bulk cancel product version"]
    Cancel_version -->|unnamed| DEL_02_130_Bulk_cancel_product_version
    Search_results -->|unnamed| DEL_02_070_Show_product_version_detail
    Activate -->|unnamed| DEL_02_120_Bulk_activate_product_version
    Export -->|unnamed| DEL_02_140_Export_product_version_changes
    Search_results -->|unnamed| User_Interface_Changes
```
