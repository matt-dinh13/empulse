# Access Rights

```mermaid
graph TD
    ADD_11_030_Replace_deal_service_VAS["{ADD}11.030 Replace deal service (VAS)"]
    ADD_11_030_Replace_deal_service_VAS["{ADD}11.030 Replace deal service (VAS)"]
    ADD_11_070_Prolong_Deal_Period_VAS["{ADD}11.070 Prolong Deal Period (VAS)"]
    ADD_11_080_Cancel_Deal_VAS["{ADD}11.080 Cancel Deal (VAS)"]
    ADD_11_080_Cancel_Deal_VAS["{ADD}11.080 Cancel Deal (VAS)"]
    ADD_11_070_Prolong_Deal_Period_VAS["{ADD}11.070 Prolong Deal Period (VAS)"]
    ADD_11_060_Terminate_Deal_VAS["{ADD}11.060 Terminate Deal (VAS)"]
    ADD_11_060_Terminate_Deal_VAS["{ADD}11.060 Terminate Deal (VAS)"]
    ADD_11_050_Deactivate_deal_VAS["{ADD}11.050 Deactivate deal (VAS)"]
    ADD_11_050_Deactivate_Deal_VAS["{ADD}11.050 Deactivate Deal (VAS)"]
    n_11_040_Activate_Deal_VAS["11.040 Activate Deal (VAS)"]
    n_11_040_Activate_deal_VAS["11.040 Activate deal (VAS)"]
    ADD_11_002_Find_deal_VAS["{ADD}11.002 Find deal (VAS)"]
    n_11_002_Find_deal_VAS["11.002 Find deal (VAS)"]
    n_11_022_Update_deal_period_VAS["11.022 Update deal period (VAS)"]
    n_11_020_Create_deal_period_VAS["11.020 Create deal period (VAS)"]
    ADD_11_001_Get_deal_VAS["{ADD}11.001 Get deal (VAS)"]
    n_11_001_Get_deal_VAS["11.001 Get deal (VAS)"]
    n_11_020_Create_deal_period["11.020 Create deal period"]
    n_11_022_Update_deal_period["11.022 Update deal period"]
    n_11_010_Create_deal_VAS["11.010 Create deal (VAS)"]
    n_11_010_Create_deal_VAS["11.010 Create deal (VAS)"]
    n_11_022_Update_deal_period -->|unnamed| n_11_022_Update_deal_period_VAS
    ADD_11_030_Replace_deal_service_VAS -->|unnamed| ADD_11_030_Replace_deal_service_VAS
    ADD_11_070_Prolong_Deal_Period_VAS -->|unnamed| ADD_11_070_Prolong_Deal_Period_VAS
    ADD_11_080_Cancel_Deal_VAS -->|unnamed| ADD_11_080_Cancel_Deal_VAS
    n_11_002_Find_deal_VAS -->|unnamed| ADD_11_002_Find_deal_VAS
    ADD_11_050_Deactivate_Deal_VAS -->|unnamed| ADD_11_050_Deactivate_deal_VAS
    n_11_040_Activate_Deal_VAS -->|unnamed| n_11_020_Create_deal_period
    n_11_040_Activate_Deal_VAS -->|unnamed| n_11_040_Activate_deal_VAS
    n_11_010_Create_deal_VAS -->|unnamed| n_11_010_Create_deal_VAS
    n_11_020_Create_deal_period -->|unnamed| n_11_020_Create_deal_period_VAS
    ADD_11_060_Terminate_Deal_VAS -->|unnamed| ADD_11_060_Terminate_Deal_VAS
    n_11_001_Get_deal_VAS -->|unnamed| ADD_11_001_Get_deal_VAS
```
