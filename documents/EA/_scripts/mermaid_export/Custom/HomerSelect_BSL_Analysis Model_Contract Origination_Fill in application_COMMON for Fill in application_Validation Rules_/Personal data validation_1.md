# Personal data validation

```mermaid
graph TD
    Length_5["Length ‹= 5"]
    Blood_type["Blood type"]
    Length_100["Length ‹= 100"]
    First_name["First name"]
    Length_30["Length ‹= 30"]
    Security_answer["Security answer"]
    Security_question["Security question"]
    Mandatory["Mandatory"]
    Photo_result_ID["Photo result ID"]
    Text_containing_a_zA_Z["Text containing [a-zA-Z\-\.' ]+"]
    Date["Date"]
    Cannot_be_in_future["Cannot be in future"]
    Birth_date["Birth date"]
    Gender["Gender"]
    Gender_Register12["Gender - Register12"]
    Number_of_dependents_0_999["Number of dependents (0-999)"]
    Dependents["Dependents"]
    Religion["Religion"]
    Marital_status["Marital status"]
    Marital_status["Marital status"]
    Education["Education"]
    Education["Education"]
    Universal_name_validation["Universal name validation"]
    Religion["Religion"]
    Religion -->|unnamed| Religion
    Education -->|unnamed| Education
    Marital_status -->|unnamed| Marital_status
    Dependents -->|unnamed| Number_of_dependents_0_999
    Gender -->|unnamed| Gender_Register12
    Birth_date -->|unnamed| Cannot_be_in_future
    Birth_date -->|unnamed| Date
    Photo_result_ID -->|unnamed| Mandatory
    Security_answer -->|unnamed| Mandatory
    First_name -->|unnamed| Mandatory
    Blood_type -->|unnamed| Mandatory
    First_name -->|{ADD LOR-1716}| Length_100
    Blood_type -->|unnamed| Length_5
    Universal_name_validation -->|unnamed| Text_containing_a_zA_Z
    Universal_name_validation -->|unnamed| Length_30
```
