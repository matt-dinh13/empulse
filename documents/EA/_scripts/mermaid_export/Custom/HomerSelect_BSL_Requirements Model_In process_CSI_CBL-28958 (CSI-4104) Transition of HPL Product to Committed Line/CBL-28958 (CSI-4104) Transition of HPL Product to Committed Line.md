# CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line
- **Diagram ID**: 162994
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph TD
    ADD_13_078_Get_CreditLimitChange_Supplement_detail_service["{ADD}13.078 Get CreditLimitChange Supplement detail service"]
    ADD_13_078_Get_CreditLimitChange_Supplement_detail_service["{ADD}13.078 Get CreditLimitChange Supplement detail service"]
    MOD_13_205_Create_contract_supplement_documents_v2["{MOD}13.205 Create contract supplement documents v2"]
    REQ_1_Extension_of_CLIP_process_add_document_generation["REQ#1 - Extension of CLIP process - add document generation"]
    CreditLimitChangeSupplements_v1_CreditLimitChangeSupplements["CreditLimitChangeSupplements_v1 : CreditLimitChangeSupplements_v1"]
    ADD_13_076_Accept_credit_limit_change_documents["{ADD}13.076 Accept credit limit change documents"]
    ADD_13_074_Prepare_credit_limit_change_documents["{ADD}13.074 Prepare credit limit change documents"]
    MOD_13_072_Create_Credit_limit_change_request_for_REL_accoun["{MOD}13.072 Create Credit limit change request for REL account"]
    ADD_13_076_Accept_credit_limit_change_documents["{ADD}13.076 Accept credit limit change documents"]
    ADD_13_074_Prepare_credit_limit_change_documents["{ADD}13.074 Prepare credit limit change documents"]
    ADD_13_074_Prepare_credit_limit_change_documents -->|unnamed| ADD_13_074_Prepare_credit_limit_change_documents
    ADD_13_076_Accept_credit_limit_change_documents -->|unnamed| ADD_13_076_Accept_credit_limit_change_documents
    ADD_13_078_Get_CreditLimitChange_Supplement_detail_service -->|unnamed| ADD_13_078_Get_CreditLimitChange_Supplement_detail_service
    ADD_13_074_Prepare_credit_limit_change_documents -->|unnamed| MOD_13_205_Create_contract_supplement_documents_v2
    ADD_13_076_Accept_credit_limit_change_documents -->|unnamed| MOD_13_205_Create_contract_supplement_documents_v2
```
