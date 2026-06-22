# Products import

```mermaid
graph TD
    MOD_Export_errors["{MOD}Export errors"]
    POST_salesrooms_products["POST salesrooms products"]
    Salesroom_to_product_assignment["Salesroom to product assignment"]
    Close["Close"]
    Run_all["Run all"]
    File_name["File name"]
    MOD_Choose_file["{MOD}Choose file"]
    Products_import["Products import"]
    Salesroom_to_product_assignment -->|unnamed| POST_salesrooms_products
    Run_all -->|unnamed| POST_salesrooms_products
```
