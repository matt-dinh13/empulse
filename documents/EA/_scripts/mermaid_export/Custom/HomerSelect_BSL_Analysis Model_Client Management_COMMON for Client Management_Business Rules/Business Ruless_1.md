# Business Ruless

```mermaid
graph TD
    BSL_to_CIF_data_conversion_VN["BSL-to-CIF data conversion - VN"]
    ADD_Email_visibility_setting["{ADD}Email visibility setting"]
    BSL_to_CIF_data_conversion_PH["BSL-to-CIF data conversion - PH"]
    Person_customerPersonGetResponse["Person : customerPersonGetResponse"]
    Person_customerPersonCreateOrUpdate["Person : customerPersonCreateOrUpdate"]
    Status_of_client_data["Status of client data"]
    BSL_to_CIF_data_conversion_KZ["BSL-to-CIF data conversion - KZ"]
    BSL_to_CIF_mapping["BSL-to-CIF mapping"]
    Client_s_contact_data["Client's contact data"]
    Status_of_client_data -->|unnamed| Client_s_contact_data
    BSL_to_CIF_mapping -->|unnamed| BSL_to_CIF_data_conversion_KZ
    BSL_to_CIF_mapping -->|unnamed| Status_of_client_data
    BSL_to_CIF_mapping -->|unnamed| Person_customerPersonCreateOrUpdate
    BSL_to_CIF_mapping -->|unnamed| Person_customerPersonGetResponse
    BSL_to_CIF_mapping -->|unnamed| BSL_to_CIF_data_conversion_PH
    BSL_to_CIF_mapping -->|unnamed| BSL_to_CIF_data_conversion_VN
```
