# Product AF

```mermaid
graph TD
    List_of_country_application_forms["List of country application forms"]
    Client_search_detail["Client search detail"]
    Client_search["Client search"]
    Create_contract["Create contract"]
    Contract_detail["Contract detail"]
    Cancel["Cancel"]
    Application_Form_Parameters["Application Form Parameters"]
    MOD_01_081_Fill_in_application_1SP["{MOD}01.081 Fill in application - 1SP"]
    n_01_083_Fill_in_application_2BoD["01.083 Fill in application - 2BoD"]
    MOD_01_082_Fill_in_application_1BoD["{MOD}01.082 Fill in application - 1BoD"]
    n_01_080_Fill_in_application["01.080 Fill in application"]
    Logical_Data_Model_Logical_Data_Model["Logical Data Model : Logical Data Model"]
    Payment_information_product_AF["Payment information - product AF"]
    Queue_control_panel_product_AF["Queue control panel - product AF"]
    Send_to_evaluation["Send to evaluation"]
    Save["Save"]
    Other_information_product_AF["Other information - product AF"]
    Commodities_product_AF["Commodities - product AF"]
    Insurance_product_AF["Insurance - product AF"]
    Employment_information_product_AF["Employment information - product AF"]
    Documents_product_AF["Documents - product AF"]
    Contact_information_product_AF["Contact information - product AF"]
    Header_product_AF["Header - product AF"]
    Personal_information_product_AF["Personal information - product AF"]
    Product_AF["Product AF"]
    Save -->|unnamed| n_01_080_Fill_in_application
    Cancel -->|unnamed| Contract_detail
    Product_AF -->|unnamed| Application_Form_Parameters
    Product_AF -->|unnamed| MOD_01_081_Fill_in_application_1SP
    Product_AF -->|unnamed| n_01_083_Fill_in_application_2BoD
    Product_AF -->|unnamed| MOD_01_082_Fill_in_application_1BoD
    Send_to_evaluation -->|no verification| Contract_detail
    Client_search -->|unnamed| Product_AF
    Send_to_evaluation -->|unnamed| n_01_080_Fill_in_application
    MOD_01_081_Fill_in_application_1SP -->|unnamed| n_01_080_Fill_in_application
    Product_AF -->|unnamed| Logical_Data_Model_Logical_Data_Model
    Client_search_detail -->|unnamed| Product_AF
    Create_contract -->|unnamed| Product_AF
    Cancel -->|unnamed| n_01_080_Fill_in_application
    n_01_083_Fill_in_application_2BoD -->|unnamed| n_01_080_Fill_in_application
    MOD_01_082_Fill_in_application_1BoD -->|unnamed| n_01_080_Fill_in_application
```
