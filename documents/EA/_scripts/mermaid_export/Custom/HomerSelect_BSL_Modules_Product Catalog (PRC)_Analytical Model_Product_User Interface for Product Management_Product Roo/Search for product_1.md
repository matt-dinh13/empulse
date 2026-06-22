# Search for product

```mermaid
graph TD
    Financing_Scheme["Financing Scheme"]
    Initial_transaction_type["Initial transaction type"]
    Show_inactive_profiles["Show inactive profiles"]
    Version_activated_to["Version activated to"]
    Version_activated_from["Version activated from"]
    Show_product_Show_product["Show product : Show product"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    DEL_02_050_Create_product["{DEL}02.050 Create product"]
    DEL_02_090_Search_for_products["{DEL}02.090 Search for products"]
    Product_type["Product type"]
    Version_Status["Version Status"]
    Add_product["Add product"]
    Product_profile["Product profile"]
    MOD_Name["{MOD}Name"]
    Product_valid_on["Product valid on"]
    MOD_Code["{MOD}Code"]
    Search_results["Search results"]
    Search_for_product_criteria["Search for product criteria"]
    Reset["Reset"]
    Search["Search"]
    Search_buttons["Search buttons"]
    Search_for_products["Search for products"]
    Search_for_products -->|unnamed| DEL_02_090_Search_for_products
    Add_product -->|unnamed| DEL_02_050_Create_product
    Search_results -->|unnamed| DEL_02_070_Show_product_version_detail
    Search_results -->|unnamed| Show_product_Show_product
```
