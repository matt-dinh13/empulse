# Search for Product Profile

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface
- **Diagram ID**: 156488
- **Elements**: 15
- **Connectors**: 3

```mermaid
graph TD
    DEL_02_014_Show_Product_Profile_detail["{DEL}02.014 Show Product Profile detail"]
    DEL_02_012_Create_Product_Profile["{DEL}02.012 Create Product Profile"]
    DEL_02_011_Search_for_Product_Profiles["{DEL}02.011 Search for Product Profiles"]
    Product_Profile_search_result["Product Profile search result"]
    Initial_transaction_type["Initial transaction type"]
    Show_inactive_profiles["Show inactive profiles"]
    Product_type["Product type"]
    MOD_Name["{MOD}Name"]
    MOD_Code["{MOD}Code"]
    Search_for_Product_Profile_criteria["Search for Product Profile criteria"]
    Add_product_profile["Add product profile"]
    Reset["Reset"]
    Search["Search"]
    Search_buttons["Search buttons"]
    Search_for_product_profiles["Search for product profiles"]
    Search_for_product_profiles -->|unnamed| DEL_02_011_Search_for_Product_Profiles
    Add_product_profile -->|unnamed| DEL_02_012_Create_Product_Profile
    Product_Profile_search_result -->|unnamed| DEL_02_014_Show_Product_Profile_detail
```
