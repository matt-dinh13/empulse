# Offer detail

```mermaid
graph TD
    MOD_Generation_of_Preliminary_Installment_Schedule["{MOD}Generation of Preliminary Installment Schedule"]
    el_1827716["Note"]
    User_Interface_Model_Preliminary_Installment_Schedule["User Interface Model : Preliminary Installment Schedule"]
    n_08_110_Select_insurance_services["08.110 Select insurance services"]
    User_Interface_Model_Change_product_offer_parameters["User Interface Model : Change product offer parameters"]
    MOD_Allow_change_of_Installment_Schedule_method["{MOD}Allow change of Installment Schedule method"]
    MOD_01_076_Display_preliminary_installment_schedule["{MOD}01.076 Display preliminary installment schedule"]
    Allow_change_of_Preferred_Due_day["Allow change of Preferred Due day"]
    n_01_077_Change_product_offer_parameters["01.077 Change product offer parameters"]
    n_01_157_Save_adjusted_offer["01.157 Save adjusted offer"]
    User_Interface_Model_Adjust_Credit_Limit["User Interface Model : Adjust Credit Limit"]
    Allow_credit_amount_adjustment["Allow credit amount adjustment"]
    n_01_156_Adjust_credit_limit["01.156 Adjust credit limit"]
    User_Interface_Model_Optional_offer_detail["User Interface Model : Optional offer detail"]
    Preliminary_installment_schedule["Preliminary installment schedule"]
    Product_offer_detail_Offer_detail["Product offer detail :Offer detail"]
    Insurance_services_selection_Insurance_services_selection["Insurance services selection : Insurance services selection"]
    MOD_01_070_Show_product_offer_detail["{MOD}01.070 Show product offer detail"]
    MOD_01_075_Print_product_offer_detail["{MOD}01.075 Print product offer detail"]
    User["User"]
    n_01_156_Adjust_credit_limit -->|unnamed| Allow_credit_amount_adjustment
    MOD_01_076_Display_preliminary_installment_schedule -->|unnamed| User_Interface_Model_Preliminary_Installment_Schedule
    n_01_077_Change_product_offer_parameters -->|unnamed| User_Interface_Model_Change_product_offer_parameters
    n_01_077_Change_product_offer_parameters -->|unnamed| MOD_Allow_change_of_Installment_Schedule_method
    n_01_077_Change_product_offer_parameters -->|unnamed| Allow_change_of_Preferred_Due_day
    Preliminary_installment_schedule -->|unnamed| MOD_Generation_of_Preliminary_Installment_Schedule
    n_01_156_Adjust_credit_limit -->|unnamed| User_Interface_Model_Adjust_Credit_Limit
    MOD_01_070_Show_product_offer_detail -->|unnamed| User_Interface_Model_Optional_offer_detail
    MOD_01_075_Print_product_offer_detail -->|unnamed| Preliminary_installment_schedule
    MOD_01_076_Display_preliminary_installment_schedule -->|unnamed| Preliminary_installment_schedule
    n_08_110_Select_insurance_services -->|unnamed| Insurance_services_selection_Insurance_services_selection
    Product_offer_detail_Offer_detail -->|unnamed| MOD_01_070_Show_product_offer_detail
    User -->|unnamed| n_01_156_Adjust_credit_limit
    User -->|unnamed| MOD_01_070_Show_product_offer_detail
    User -->|unnamed| n_08_110_Select_insurance_services
    User -->|unnamed| MOD_01_075_Print_product_offer_detail
    User -->|unnamed| MOD_01_076_Display_preliminary_installment_schedule
    User -->|unnamed| n_01_157_Save_adjusted_offer
    User -->|unnamed| n_01_077_Change_product_offer_parameters
```
