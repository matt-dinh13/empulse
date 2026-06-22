# IS-209 (CBL-399) Adding info about active FER/CET request

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-209 (CBL-399) Adding info about active FER/CET request
- **Diagram ID**: 105524
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    n_01_483_Calculate_debt_on_external_request["01.483 Calculate debt on external request"]
    Calculate_debt_on_interest_to_the_passed_date_from_installme["Calculate debt on interest to the passed date (from installment schedule)"]
    diagram_68CE3D52_E08F_4c83_BE5D_5D71EB9DA667["$diagram://{68CE3D52-E08F-4c83-BE5D-5D71EB9DA667}"]
    REQ_2_Modify_business_logic_of_OnlineDebtWS_CalculateDebt_me["REQ#2 Modify business logic of OnlineDebtWS.CalculateDebt() method"]
    REQ_1_Add_ignorePrepaymentsOnInactiveCETFER_parameter_to_Onl["REQ#1 Add ignorePrepaymentsOnInactiveCETFER parameter to OnlineDebtWS.CalculateDebt() request"]
    CBL_399_Adding_info_about_active_FER_CET_request["CBL-399 Adding info about active FER/CET request"]
    REQ_2_Modify_business_logic_of_OnlineDebtWS_CalculateDebt_me -->|unnamed| CBL_399_Adding_info_about_active_FER_CET_request
    REQ_1_Add_ignorePrepaymentsOnInactiveCETFER_parameter_to_Onl -->|unnamed| CBL_399_Adding_info_about_active_FER_CET_request
    diagram_68CE3D52_E08F_4c83_BE5D_5D71EB9DA667 -->|unnamed| REQ_1_Add_ignorePrepaymentsOnInactiveCETFER_parameter_to_Onl
```
