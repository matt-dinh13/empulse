# Logical Data Model

```mermaid
classDiagram
    class CustomDataTypeDefinition["CustomDataTypeDefinition"]
    class Eligible_Commodity_Type["Eligible Commodity Type"]
    class Insurance_Partner["Insurance Partner"]
    class Ineligible_Profession["Ineligible Profession"]
    class Custom_Data_Definition["Custom Data Definition"]
    class Rounding["Rounding"]
    class Insurance_Custom_Data_Def["Insurance Custom Data Def"]
    class Register_Inclusion_Frequency["Register Inclusion Frequency"]
    class Register_Inclusion_Date_Calculation["Register Inclusion Date Calculation"]
    class Revenue_Share_Frequency["Revenue Share Frequency"]
    class Revenue_Share_Base["Revenue Share Base"]
    class Insurance_Contract_Type["Insurance Contract Type"]
    class Insurance_Contract_Numbering["Insurance Contract Numbering"]
    class Max_Age_Restriction_Type["Max Age Restriction Type"]
    class Insurance_Eligibility_Criteria["Insurance Eligibility Criteria"]
    class Insurance_Subject_Type["Insurance Subject Type"]
    class Insurance_Program["Insurance Program"]
    class Custom_data_types_definition_and_validator_library["Custom data types definition and validator library"]
    Insurance_Program --> Insurance_Contract_Type : unnamed
    Insurance_Program --> Insurance_Partner : unnamed
    Insurance_Custom_Data_Def --> Custom_Data_Definition : unnamed
    Insurance_Program --> Rounding : unnamed
    Insurance_Program --> Register_Inclusion_Frequency : unnamed
    Insurance_Program --> Register_Inclusion_Date_Calculation : unnamed
    Insurance_Custom_Data_Def --> CustomDataTypeDefinition : unnamed
    Insurance_Program --> Revenue_Share_Base : unnamed
    Insurance_Custom_Data_Def --> Insurance_Program : unnamed
    Insurance_Program --> Insurance_Contract_Numbering : unnamed
    Insurance_Eligibility_Criteria --> Max_Age_Restriction_Type : unnamed
    Ineligible_Profession --> Insurance_Eligibility_Criteria : unnamed
    Eligible_Commodity_Type --> Insurance_Eligibility_Criteria : unnamed
    Insurance_Program --> Insurance_Subject_Type : unnamed
    Insurance_Eligibility_Criteria --> Insurance_Program : unnamed
    Insurance_Program --> Revenue_Share_Frequency : unnamed
```
