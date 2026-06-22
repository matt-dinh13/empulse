# Access Rights

```mermaid
graph TD
    ADD_01_143_Recalculate_client_s_x_sell_offer_Update_phone["{ADD}01.143 Recalculate client's x-sell offer - Update phone"]
    n_01_072_Redirect_to_client_center["01.072 Redirect to client center"]
    n_01_072_Redirect_to_client_center["01.072 Redirect to client center"]
    n_01_071_Show_product_offer_info_overview["01.071 Show product offer info (overview)"]
    n_01_071_Show_product_offer_info_overview["01.071 Show product offer info (overview)"]
    n_01_013_Collect_real_offer_qualification_criteria["01.013 Collect real offer qualification criteria"]
    n_01_013_Collect_real_offer_qualification_criteria["01.013 Collect real offer qualification criteria"]
    n_01_143_Recalculate_client_s_x_sell_offer["01.143 Recalculate client's x-sell offer"]
    n_01_143_Recalculate_client_s_x_sell_offer["01.143 Recalculate client's x-sell offer"]
    n_01_010_Choose_product_offer_logging["01.010 Choose product offer - logging"]
    n_01_077_Change_product_offer_parameters_Installment_schedul["01.077 Change product offer parameters - Installment schedule method"]
    n_01_077_Change_product_offer_Preferred_due_day["01.077 Change product offer - Preferred due day"]
    n_01_077_Change_product_offer_parameters["01.077 Change product offer parameters"]
    n_01_077_Change_product_offer_parameters["01.077 Change product offer parameters"]
    n_01_076_Display_preliminary_installment_schedule["01.076 Display preliminary installment schedule"]
    MOD_01_076_Display_preliminary_installment_schedule["{MOD}01.076 Display preliminary installment schedule"]
    n_01_075_Print_product_offer_detail["01.075 Print product offer detail"]
    MOD_01_075_Print_product_offer_detail["{MOD}01.075 Print product offer detail"]
    n_01_070_Show_product_offer_detail["01.070 Show product offer detail"]
    n_01_010_Choose_product_offer["01.010 Choose product offer"]
    MOD_01_070_Show_product_offer_detail["{MOD}01.070 Show product offer detail"]
    n_01_010_Choose_product_offer["01.010 Choose product offer"]
    n_01_157_Save_adjusted_offer["01.157 Save adjusted offer"]
    n_01_156_Adjust_credit_limit["01.156 Adjust credit limit"]
    n_01_157_Save_adjusted_offer["01.157 Save adjusted offer"]
    n_01_156_Adjust_credit_limit["01.156 Adjust credit limit"]
    n_01_155_Generate_optional_offers["01.155 Generate optional offers"]
    n_01_155_Generate_optional_offers["01.155 Generate optional offers"]
    n_01_681_Invalidate_offers["01.681 Invalidate offers"]
    n_01_154_Postpone_decision_about_optional_offers["01.154 Postpone decision about optional offers"]
    MOD_01_681_Invalidate_offers["{MOD}01.681 Invalidate offers"]
    n_01_154_Postpone_decision_about_optional_offers["01.154 Postpone decision about optional offers"]
    n_01_159_Reject_offer_all_salesrooms["01.159 Reject offer (all salesrooms)"]
    n_01_159_Reject_offer["01.159 Reject offer"]
    n_01_158_Accept_offer_all_salesrooms["01.158 Accept offer (all salesrooms)"]
    n_01_158_Accept_offer["01.158 Accept offer"]
    Access_control_to_Contract_by_Salesroom["Access control to Contract by Salesroom"]
    MOD_01_159_Reject_offer["{MOD}01.159 Reject offer"]
    n_01_158_Accept_offer["01.158 Accept offer"]
    n_01_155_Generate_optional_offers -->|unnamed| n_01_155_Generate_optional_offers
    MOD_01_681_Invalidate_offers -->|unnamed| n_01_681_Invalidate_offers
    MOD_01_076_Display_preliminary_installment_schedule -->|unnamed| n_01_076_Display_preliminary_installment_schedule
    MOD_01_075_Print_product_offer_detail -->|unnamed| n_01_075_Print_product_offer_detail
    MOD_01_070_Show_product_offer_detail -->|unnamed| n_01_070_Show_product_offer_detail
    MOD_01_159_Reject_offer -->|unnamed| Access_control_to_Contract_by_Salesroom
    MOD_01_159_Reject_offer -->|unnamed| n_01_159_Reject_offer_all_salesrooms
    MOD_01_159_Reject_offer -->|unnamed| n_01_159_Reject_offer
    n_01_157_Save_adjusted_offer -->|unnamed| n_01_157_Save_adjusted_offer
    n_01_072_Redirect_to_client_center -->|unnamed| n_01_072_Redirect_to_client_center
    n_01_143_Recalculate_client_s_x_sell_offer -->|unnamed| ADD_01_143_Recalculate_client_s_x_sell_offer_Update_phone
    n_01_143_Recalculate_client_s_x_sell_offer -->|unnamed| n_01_010_Choose_product_offer
    n_01_143_Recalculate_client_s_x_sell_offer -->|unnamed| n_01_143_Recalculate_client_s_x_sell_offer
    n_01_154_Postpone_decision_about_optional_offers -->|unnamed| n_01_154_Postpone_decision_about_optional_offers
    n_01_010_Choose_product_offer -->|unnamed| n_01_013_Collect_real_offer_qualification_criteria
    n_01_010_Choose_product_offer -->|unnamed| n_01_010_Choose_product_offer_logging
    n_01_010_Choose_product_offer -->|unnamed| n_01_010_Choose_product_offer
    n_01_071_Show_product_offer_info_overview -->|unnamed| n_01_071_Show_product_offer_info_overview
    n_01_077_Change_product_offer_parameters -->|unnamed| n_01_077_Change_product_offer_Preferred_due_day
    n_01_077_Change_product_offer_parameters -->|unnamed| n_01_077_Change_product_offer_parameters_Installment_schedul
    n_01_077_Change_product_offer_parameters -->|unnamed| n_01_077_Change_product_offer_parameters
    n_01_158_Accept_offer -->|unnamed| n_01_158_Accept_offer
    n_01_158_Accept_offer -->|unnamed| n_01_158_Accept_offer_all_salesrooms
    n_01_158_Accept_offer -->|unnamed| Access_control_to_Contract_by_Salesroom
    n_01_156_Adjust_credit_limit -->|unnamed| n_01_156_Adjust_credit_limit
    n_01_013_Collect_real_offer_qualification_criteria -->|unnamed| n_01_013_Collect_real_offer_qualification_criteria
```
