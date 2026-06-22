# CBL-6286 (CLM-2709) Gift Payment Service for REL Products (POS on Card)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6286 (CLM-2709) Gift Payment Service for REL Products (POS on Card)
- **Diagram ID**: 124986
- **Elements**: 11
- **Connectors**: 2

```mermaid
graph TD
    BIZ_Display_Number_of_gift_payments_in_Cardless_POS_transact["BIZ -  Display Number of gift payments in Cardless POS transaction request UI and Cardless cash transaction request UI"]
    el_1495599["Note"]
    List_of_installment_plan_offers["List of installment plan offers"]
    el_1495595["Note"]
    n_12_632_Create_request_for_POS_transaction_without_card["12.632 Create request for POS transaction without card"]
    n_12_630_Create_request_for_CASH_transaction_without_card["12.630 Create request for CASH transaction without card"]
    REQ_2_Extend_List_of_installment_plan_offers_grid["REQ #2 - Extend List of installment plan offers grid"]
    REQ_1_Integrate_CABUS_AM_REST_GET_instalmentPlanOffers_v3["REQ #1 - Integrate CABUS AM REST.GET instalmentPlanOffers v3"]
    Cabus_AM_REST_Get_instalmentPlanOffersV3["Cabus AM REST :Get instalmentPlanOffersV3"]
    User_Interface_Model_Cardless_cash_transaction_request_User_["User Interface Model : Cardless cash transaction request - User Interface"]
    User_Interface_Model_Cardless_POS_transaction_request_User_I["User Interface Model : Cardless POS transaction request - User Interface"]
    el_1495599 -->|unnamed| REQ_2_Extend_List_of_installment_plan_offers_grid
    el_1495595 -->|unnamed| REQ_1_Integrate_CABUS_AM_REST_GET_instalmentPlanOffers_v3
```
