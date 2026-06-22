# CBL-7036 (CLM-2233) Restrict Contract search function for SA

```mermaid
graph TD
    Include_mistakes["Include mistakes"]
    Document_ID_number["Document ID number"]
    Document_type["Document type"]
    Date_of_birth["Date of birth"]
    Contract_number["Contract number"]
    Sales_agent_search["Sales agent search"]
    MOD_Contract_search_filter["{MOD}Contract search filter"]
    REQ_1_Restrict_Contract_search_function_for_SA["REQ #1 - Restrict Contract search function for SA"]
    Sales_agent_search["Sales agent search"]
    n_01_300_Search_for_contract_sales_agent["01.300 Search for contract (sales agent)"]
    Sales_agent_search_criteria_restriction["Sales agent search criteria restriction"]
    Sales_agent_search["Sales agent search"]
    Remote_contracts_for_signature["Remote contracts for signature"]
    Remote_contracts_for_2BoD_filling["Remote contracts for 2BoD filling"]
    Telesales_Search["Telesales Search"]
    Remotely_created_and_not_disbursed_contracts["Remotely created and not disbursed contracts"]
    Drafts["Drafts"]
    Contracts_in_process["Contracts in process"]
    Items_for_registration["Items for registration"]
    Reimbursed_Contracts["Reimbursed Contracts"]
    Nonreimbursed_Contracts["Nonreimbursed Contracts"]
    Cancelled_Contracts["Cancelled Contracts"]
    Custom_Search["Custom Search"]
    Show_contracts_created_by_me["Show contracts created by me"]
    Contracts_for_2BoD_filling["Contracts for 2BoD filling"]
    Custom_SNM_search["Custom SNM search"]
    Custom_BO_Search["Custom BO Search"]
    Contracts_for_disbursement_channel_verification["Contracts for disbursement channel verification"]
    MOD_Predefined_search_filters["{MOD}Predefined search filters"]
    Grid_of_results["Grid of results"]
    Total_number_of_found_contracts["Total number of found contracts"]
    Page_number["Page number"]
    Pages["Pages"]
    Search["Search"]
    Search_for_contract["Search for contract"]
    MOD_01_300_Search_for_contract["{MOD}01.300 Search for contract"]
    Buttons["Buttons"]
    Sales_agent_search -->|unnamed| n_01_300_Search_for_contract_sales_agent
    Date_of_birth -->|unnamed| Sales_agent_search_criteria_restriction
    Document_type -->|unnamed| Sales_agent_search_criteria_restriction
    Document_ID_number -->|unnamed| Sales_agent_search_criteria_restriction
    Search_for_contract -->|unnamed| MOD_01_300_Search_for_contract
    Contract_number -->|unnamed| Sales_agent_search_criteria_restriction
    MOD_01_300_Search_for_contract -->|unnamed| MOD_Contract_search_filter
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_for_contract_sales_agent
```
