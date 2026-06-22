# Assign product to salesroom

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/User Interface
- **Diagram ID**: 149536
- **Elements**: 16
- **Connectors**: 3

```mermaid
graph TD
    Commodity_type["Commodity type"]
    Manufacturer_code["Manufacturer code"]
    Product_name["Product name"]
    Search["Search"]
    Filter_available_products_for_an_assignment_to_salesroom["Filter available products for an assignment to salesroom"]
    Product_code["Product code"]
    Cancel["Cancel"]
    n_09_270_Assign_product_to_salesroom["09.270 Assign product to salesroom"]
    OK["OK"]
    Available_Products["Available Products"]
    Salesroom_code["Salesroom code"]
    End_of_validity["End of validity"]
    Start_of_validity["Start of validity"]
    Salesroom_name["Salesroom name"]
    Assign_Product_to_salesroom["Assign Product to salesroom"]
    Assign_Products_to_Salesroom["Assign Products to Salesroom"]
    Assign_Products_to_Salesroom -->|unnamed| n_09_270_Assign_product_to_salesroom
    Available_Products -->|unnamed| Filter_available_products_for_an_assignment_to_salesroom
    n_09_270_Assign_product_to_salesroom -->|unnamed| Filter_available_products_for_an_assignment_to_salesroom
```
