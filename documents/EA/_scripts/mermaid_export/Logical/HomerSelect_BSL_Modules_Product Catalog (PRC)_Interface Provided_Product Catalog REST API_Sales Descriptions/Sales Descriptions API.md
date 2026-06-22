# Sales Descriptions API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions
- **Diagram ID**: 161068
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class ADD_GET_sales_description_for_entity_by_code_and_version["{ADD} GET sales description for entity by code and version"]
    class PUT_sales_description["PUT sales description"]
    class POST_new_sales_description["POST new sales description"]
    class GET_sales_description_for_entity["GET sales description for entity"]
    class GET_sales_description_by_search["GET sales description by search"]
    class GET_sales_description_by_code["GET sales description by code"]
    class MOD_sales_descriptions["{MOD}sales-descriptions"]
    class Product_catalog_API["Product catalog API"]
    GET_sales_description_by_code <|.. MOD_sales_descriptions : unnamed
    GET_sales_description_by_search <|.. MOD_sales_descriptions : unnamed
    GET_sales_description_for_entity <|.. MOD_sales_descriptions : unnamed
    POST_new_sales_description <|.. MOD_sales_descriptions : unnamed
    PUT_sales_description <|.. MOD_sales_descriptions : unnamed
    ADD_GET_sales_description_for_entity_by_code_and_version <|.. MOD_sales_descriptions : unnamed
    Product_catalog_API ..> MOD_sales_descriptions : /sales-descriptions
```
