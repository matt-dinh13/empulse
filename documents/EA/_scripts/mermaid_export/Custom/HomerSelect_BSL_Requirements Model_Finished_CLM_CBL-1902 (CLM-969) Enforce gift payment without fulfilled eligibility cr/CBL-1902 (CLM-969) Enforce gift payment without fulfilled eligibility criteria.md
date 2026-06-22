# CBL-1902 (CLM-969) Enforce gift payment without fulfilled eligibility criteria

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1902 (CLM-969) Enforce gift payment without fulfilled eligibility criteria
- **Diagram ID**: 158909
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    Contract_Service_Parameter_Type["Contract Service Parameter Type"]
    User_Interface_Model_ADD_Gift_Payment["User Interface Model :{ADD}Gift Payment"]
    MOD_08_207_Set_Enforce_gift_payment_flag["{MOD}08.207 Set Enforce gift payment flag"]
    ADD_08_207_Set_Enforce_gift_payment_flag["{ADD}08.207 Set Enforce gift payment flag"]
    Tab_Services_Tab_Services["Tab-Services : Tab-Services"]
    REQ_1_new_Contract_Service_Parameters_and_action_button_for_["REQ#1 - new Contract Service Parameters and action button for GIFTP"]
    Tab_Services_Tab_Services -->|unnamed| MOD_08_207_Set_Enforce_gift_payment_flag
    MOD_08_207_Set_Enforce_gift_payment_flag -->|unnamed| ADD_08_207_Set_Enforce_gift_payment_flag
    MOD_08_207_Set_Enforce_gift_payment_flag -->|unnamed| User_Interface_Model_ADD_Gift_Payment
```
