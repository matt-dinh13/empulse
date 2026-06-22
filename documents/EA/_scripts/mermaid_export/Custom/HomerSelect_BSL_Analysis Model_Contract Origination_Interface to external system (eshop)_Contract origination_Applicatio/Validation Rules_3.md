# Validation Rules

```mermaid
graph TD
    Identical_commodities["Identical commodities"]
    Application_validation_rule["Application validation rule"]
    Extended_property_validation_rule["Extended property validation rule"]
    File_validation_rule["File validation rule"]
    Application_cross_validation_rules_VN["Application cross-validation rules - VN"]
    Party_validation_rule["Party validation rule"]
    Relationship_attribute_validation_rule["Relationship attribute validation rule"]
    Relationship_validation_rule["Relationship validation rule"]
    Unique_refinanced_contract["Unique refinanced contract"]
    Financial_amount_0["Financial amount ›= 0"]
    Refinanced_Contract_validation_rule["Refinanced Contract validation rule"]
    Document_cross_validation_rule["Document cross validation rule"]
    Person_Custom_Attribute_validation_rule["Person Custom Attribute validation rule"]
    Get_document_containers_for_applicable_client_scoring_segmen["Get document containers for applicable client scoring segment"]
    Unique_address_type["Unique address type"]
    Unique_external_identifier["Unique external identifier"]
    External_Identifier_validation_rule["External Identifier validation rule"]
    Remittance_Data_validation_rule["Remittance Data validation rule"]
    Card_service_validity["Card service validity"]
    Security_question_validation_rule["Security question validation rule"]
    Card_issue_methods["Card issue methods"]
    Card_Delivery_Options["Card Delivery Options"]
    Card_Service_validation_rule["Card Service validation rule"]
    Verification_validation_rule["Verification validation rule"]
    Document_attribute_validation_for_sign["Document attribute validation for sign"]
    Extended_information_validation_rule["Extended information validation rule"]
    Number_of_related_person_of_each_type["Number of related person of each type"]
    Configurable_application_validation_rule["Configurable application validation rule"]
    General_validation_of_attributes_rule["General validation of attributes rule"]
    Service_validation_rule["Service validation rule"]
    InsuranceCustomData_validation_rule["InsuranceCustomData validation rule"]
    InsuranceService_validation_rule["InsuranceService validation rule"]
    Insurance_eligibility_validation_rule["Insurance eligibility validation rule"]
    VN_Validation_rules_VN["VN : Validation rules-VN"]
    Application_validation_rule_VN["Application validation rule-VN"]
    KZ_Validation_rules_KZ["KZ : Validation rules - KZ"]
    Application_cross_validation_rules_PH["Application cross-validation rules - PH"]
    PH_Validation_rules_PH["PH : Validation rules - PH"]
    MOD_Application_validation_rule_PH["{MOD}Application validation rule-PH"]
    File_name_validation["File name validation"]
    Application_cross_validation_rules_IN["Application cross-validation rules - IN"]
    MOD_Application_validation_rule_IN["{MOD}Application validation rule - IN"]
    IN_Validation_rules_IN["IN : Validation rules - IN"]
    Validation_Rules_Validation_Rules_ID["Validation Rules : Validation Rules - ID"]
    Disbursement_Channel_validation_rule["Disbursement Channel validation rule"]
    Repayment_Channel_validation_rule["Repayment Channel validation rule"]
    Create_validation_error_message["Create validation error message"]
    MOD_Application_validation_rule_ID["{MOD}Application validation rule-ID"]
    PersonAddress_validation_rule["PersonAddress validation rule"]
    ClientAddress_validation_rule["ClientAddress validation rule"]
    Commodity_validation_rule["Commodity validation rule"]
    PaymentChannel_validation_rule["PaymentChannel validation rule"]
    Person_validation_rule["Person validation rule"]
    Employment_validation_rule["Employment validation rule"]
    DocumentAttribute_validation_rule["DocumentAttribute validation rule"]
    MOD_Document_validation_rule["{MOD}Document validation rule"]
    Address_validation_rule["Address validation rule"]
    Contact_validation_rule["Contact validation rule"]
    Language_validation_rule["Language validation rule"]
    Min_number_of_documents["Min number of documents"]
    Application_validation_rule["Application validation rule"]
    Application_validation_rule -->|unnamed| Unique_refinanced_contract
    Relationship_validation_rule -->|{ADD LOR-5016/}| Relationship_attribute_validation_rule
    Relationship_validation_rule -->|{ADD LOR-5016/}| Party_validation_rule
    File_validation_rule -->|{ADD LOR-5952/}| File_name_validation
    Application_validation_rule -->|unnamed| Extended_information_validation_rule
    Application_validation_rule -->|unnamed| Contact_validation_rule
    Application_validation_rule -->|unnamed| InsuranceService_validation_rule
    Application_validation_rule -->|unnamed| PaymentChannel_validation_rule
    Application_validation_rule -->|{ADD LOR-5016/}| Relationship_validation_rule
    Application_validation_rule -->|unnamed| Unique_address_type
    Application_validation_rule -->|unnamed| Unique_external_identifier
    Application_validation_rule -->|unnamed| Person_Custom_Attribute_validation_rule
    Application_validation_rule -->|unnamed| Extended_property_validation_rule
    Application_validation_rule -->|unnamed| Min_number_of_documents
    Application_validation_rule -->|unnamed| Employment_validation_rule
    Card_Service_validation_rule -->|unnamed| Card_issue_methods
    Application_validation_rule -->|unnamed| ClientAddress_validation_rule
    Application_validation_rule -->|unnamed| Language_validation_rule
    Application_validation_rule -->|unnamed| Refinanced_Contract_validation_rule
    Application_validation_rule -->|unnamed| Person_validation_rule
    Application_validation_rule -->|unnamed| Commodity_validation_rule
    Application_validation_rule -->|unnamed| Card_Service_validation_rule
    Application_validation_rule -->|unnamed| Security_question_validation_rule
    Application_validation_rule -->|unnamed| MOD_Document_validation_rule
    Application_validation_rule -->|unnamed| Number_of_related_person_of_each_type
    Application_validation_rule -->|unnamed| Application_cross_validation_rules_PH
    Application_validation_rule -->|unnamed| Application_cross_validation_rules_VN
    Application_validation_rule -->|unnamed| Application_cross_validation_rules_IN
    Application_validation_rule -->|unnamed| External_Identifier_validation_rule
    Person_validation_rule -->|unnamed| Remittance_Data_validation_rule
    Application_validation_rule -->|unnamed| Configurable_application_validation_rule
    Application_validation_rule -->|unnamed| Application_validation_rule
    Application_validation_rule -->|unnamed| Create_validation_error_message
    Contact_validation_rule -->|unnamed| Verification_validation_rule
    MOD_Document_validation_rule -->|unnamed| Document_cross_validation_rule
    MOD_Document_validation_rule -->|unnamed| Verification_validation_rule
    MOD_Document_validation_rule -->|unnamed| DocumentAttribute_validation_rule
    MOD_Document_validation_rule -->|{ADD LOR-5952/}| File_validation_rule
    MOD_Document_validation_rule -->|unnamed| File_name_validation
    MOD_Document_validation_rule -->|unnamed| Get_document_containers_for_applicable_client_scoring_segmen
    Employment_validation_rule -->|unnamed| Contact_validation_rule
    Refinanced_Contract_validation_rule -->|unnamed| Financial_amount_0
    Person_validation_rule -->|unnamed| Contact_validation_rule
    Card_Service_validation_rule -->|unnamed| Card_Delivery_Options
    Person_validation_rule -->|unnamed| PersonAddress_validation_rule
    PaymentChannel_validation_rule -->|unnamed| Disbursement_Channel_validation_rule
    PaymentChannel_validation_rule -->|unnamed| Repayment_Channel_validation_rule
    ClientAddress_validation_rule -->|unnamed| Address_validation_rule
    PersonAddress_validation_rule -->|unnamed| Address_validation_rule
    MOD_Application_validation_rule_ID -->|unnamed| Application_validation_rule
    MOD_Application_validation_rule_PH -->|unnamed| Application_validation_rule
    Application_validation_rule_VN -->|unnamed| Application_validation_rule
    InsuranceService_validation_rule -->|unnamed| Service_validation_rule
    InsuranceService_validation_rule -->|unnamed| InsuranceCustomData_validation_rule
    Card_Service_validation_rule -->|unnamed| Service_validation_rule
    Application_validation_rule -->|unnamed| General_validation_of_attributes_rule
    Employment_validation_rule -->|unnamed| Address_validation_rule
    Min_number_of_documents -->|unnamed| Get_document_containers_for_applicable_client_scoring_segmen
    MOD_Application_validation_rule_IN -->|unnamed| Application_validation_rule
```
