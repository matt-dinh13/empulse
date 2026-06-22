# CBL-17316 (CLM-5164) Registration based on REM module

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-17316 (CLM-5164) Registration based on REM module
- **Diagram ID**: 149306
- **Elements**: 11
- **Connectors**: 5

```mermaid
graph TD
    DEL_01_278_Register_contract_automatically["{DEL}01.278 Register contract automatically"]
    checkAll_checkAll["checkAll : checkAll"]
    register_register["register : register"]
    MOD_Map_REM_API_Register_result_codes_to_GUI_codes["{MOD}Map REM API Register result codes to GUI codes"]
    MOD_Map_REM_API_Register_result_codes_to_SOAP_codes["{MOD}Map REM API Register result codes to SOAP codes"]
    n_01_271_Register_contract_remotely["01.271 Register contract remotely"]
    Process_ContractRegisteredSE_CLM["Process ContractRegisteredSE [CLM]"]
    n_01_270_Register_contract_manually["01.270 Register contract manually"]
    el_1732367["Boundary"]
    MOD_CLM_feature_flags["{MOD}CLM feature flags"]
    CBL_17316_CLM_5164_Registration_based_on_REM_module["CBL-17316 (CLM-5164) Registration based on REM module"]
    n_01_270_Register_contract_manually -->|unnamed| MOD_Map_REM_API_Register_result_codes_to_GUI_codes
    n_01_271_Register_contract_remotely -->|unnamed| MOD_Map_REM_API_Register_result_codes_to_SOAP_codes
    n_01_271_Register_contract_remotely -->|unnamed| checkAll_checkAll
    n_01_270_Register_contract_manually -->|unnamed| register_register
    n_01_271_Register_contract_remotely -->|unnamed| register_register
```
