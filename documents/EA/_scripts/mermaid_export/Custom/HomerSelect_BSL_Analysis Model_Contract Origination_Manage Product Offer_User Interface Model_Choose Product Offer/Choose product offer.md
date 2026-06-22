# Choose product offer

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer
- **Diagram ID**: 158556
- **Elements**: 24
- **Connectors**: 10

```mermaid
graph TD
    n_01_072_Redirect_to_client_center["01.072 Redirect to client center"]
    Client_detail["Client detail"]
    Product_offer_detail_info_overview["Product offer detail info (overview)"]
    ADD_Clear_Filter["{ADD}Clear Filter"]
    ADD_Filter["{ADD}Filter"]
    ADD_Filter_by_Text["{ADD}Filter by Text"]
    Debit_card_account_selection["Debit card account selection"]
    Product_offer_search_result["Product offer search result"]
    Product_Calculator_Search_Grouped_Result_Grid_Parameters["Product Calculator Search Grouped Result Grid Parameters"]
    n_01_010_Choose_product_offer["01.010 Choose product offer"]
    Search_Log["Search Log"]
    Create_contract["Create contract"]
    Contract_detail_Panel_of_buttons["Contract detail - Panel of buttons"]
    Application_form["Application form"]
    Product_Calculator_Search_Result_Grid_Parameters["Product Calculator Search Result Grid Parameters"]
    CEL_loans["CEL loans"]
    REL_loans["REL loans"]
    REL_and_CEL_loans["REL and CEL loans"]
    Search_result_filter["Search result filter"]
    DEL_02_906_Marketing_Offers_Management["{DEL}02.906 Marketing Offers Management"]
    Product_Calculator["Product Calculator"]
    n_01_071_Show_product_offer_info_overview["01.071 Show product offer info (overview)"]
    Offer_detail["Offer detail"]
    Choose_product_offer["Choose product offer"]
    Choose_product_offer -->|unnamed| n_01_010_Choose_product_offer
    DEL_02_906_Marketing_Offers_Management -->|unnamed| n_01_010_Choose_product_offer
    Contract_detail_Panel_of_buttons -->|unnamed| Choose_product_offer
    Create_contract -->|unnamed| Choose_product_offer
    Product_offer_search_result -->|unnamed| n_01_071_Show_product_offer_info_overview
    Product_offer_search_result -->|unnamed| Offer_detail
    Product_offer_search_result -->|unnamed| Application_form
    Debit_card_account_selection -->|unnamed| Choose_product_offer
    Client_detail -->|unnamed| n_01_072_Redirect_to_client_center
    n_01_071_Show_product_offer_info_overview -->|unnamed| Product_offer_detail_info_overview
```
