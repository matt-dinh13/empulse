# CBL-16401 (CLM-4644) Post activation docs review - REM - register - validate contract + commodities

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-16401 (CLM-4644) Post activation docs review - REM - register - validate contract + commodity
- **Diagram ID**: 156788
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph TD
    getContract_getContract["getContract : getContract"]
    getContractServices_getContractServices["getContractServices : getContractServices"]
    searchContracts_searchContracts["searchContracts : searchContracts"]
    getCommodities_getCommodities["getCommodities : getCommodities"]
    validateCommodities_validateCommodities["validateCommodities : validateCommodities"]
    Use_Cases_Get_registration_documents["Use Cases :Get registration documents"]
    CLM_4644_register_validate_contract_commodity["CLM-4644 - register - validate contract + commodity"]
    CLM_4644_register_validate_contract_commodity -->|unnamed| Use_Cases_Get_registration_documents
    CLM_4644_register_validate_contract_commodity -->|unnamed| validateCommodities_validateCommodities
    CLM_4644_register_validate_contract_commodity -->|unnamed| getCommodities_getCommodities
    CLM_4644_register_validate_contract_commodity -->|unnamed| searchContracts_searchContracts
    CLM_4644_register_validate_contract_commodity -->|unnamed| getContractServices_getContractServices
    CLM_4644_register_validate_contract_commodity -->|unnamed| getContract_getContract
```
