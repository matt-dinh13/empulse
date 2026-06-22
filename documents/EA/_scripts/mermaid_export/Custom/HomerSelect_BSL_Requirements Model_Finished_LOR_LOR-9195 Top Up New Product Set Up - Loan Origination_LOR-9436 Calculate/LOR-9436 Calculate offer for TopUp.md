# LOR-9436 Calculate offer for TopUp

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination/LOR-9436 Calculate offer for TopUp
- **Diagram ID**: 152421
- **Elements**: 6
- **Connectors**: 2

```mermaid
graph TD
    n_01_010_Choose_product_offer["01.010 Choose product offer"]
    MOD_Calculation_of_customer_offer["{MOD}Calculation of customer offer"]
    CashLoanCalculationOptionsTO["CashLoanCalculationOptionsTO"]
    MOD_Switches_for_LOR_tasks["{MOD}Switches for LOR tasks"]
    LOR_9436_Calculate_offer_for_TopUp["LOR-9436 Calculate offer for TopUp"]
    LOR_9195_Top_Up_New_Product_Set_Up_Loan_Origination["LOR-9195 Top Up New Product Set Up - Loan Origination"]
    LOR_9436_Calculate_offer_for_TopUp -->|unnamed| LOR_9195_Top_Up_New_Product_Set_Up_Loan_Origination
    n_01_010_Choose_product_offer -->|unnamed| MOD_Calculation_of_customer_offer
```
